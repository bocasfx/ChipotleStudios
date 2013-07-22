
var ttw = {

	fadeSpeed: 500,
	fading: false,

	sections: [
		"ears",
		"brain",
		"mouth",
		"info"
	],

	brainSubSections: [
		"marvin",
		"q",
		"bubbles",
		"midiworm"
	],

	earsSubSections: [
		"tsk",
		"q",
		"tape",
		"bubbles",
		"midiworm"
	],

	initialize: function() {
		dojo.require("dojox.image.Lightbox");
		console.log( "initializing..." );
		dojo.parser.parse();
		ttw.menu.initialize();
		ttw.content.load( "content/home.html" );
	},

	// Menu ---------------------------------------------------------------------

	menu: {

		initialize: function() {

			dojo.connect( dojo.byId('menuSection1'), 'onclick', ttw.preloader.show );
			dojo.connect( dojo.byId('menuSection2'), 'onclick', ttw.preloader.show );
			dojo.connect( dojo.byId('menuSection3'), 'onclick', ttw.preloader.show );
			dojo.connect( dojo.byId('menuSection4'), 'onclick', ttw.preloader.show );
			dojo.connect( dojo.byId('menuSection5'), 'onclick', ttw.preloader.show );
			dojo.connect( dojo.byId('menuSection6'), 'onclick', ttw.preloader.show );
			dojo.connect( dojo.byId('menuSection7'), 'onclick', ttw.preloader.show );
			dojo.connect( dojo.byId('menuSection8'), 'onclick', ttw.preloader.show );
			dojo.connect( dojo.byId('menuSection9'), 'onclick', ttw.preloader.show );
			dojo.connect( dojo.byId('menuSection10'), 'onclick', ttw.preloader.show );
		},

		update: function ( section ) {
			try {
				dojo.query(".submenu").style("visibility", "hidden");
				dojo.query(".submenu").style("height", "0");
				dojo.query("#preloader").style("top", "34px");

				var selectedMenu = "images/menu/" + section + "-sel.png";

				switch(section) {
					case "ears":
					case "q":
					case "bubbles":
					case "midiworm":
					case "tape":
					case "tsk":
						// unselect submenus
						ttw.earsSubSections.forEach( function(entry) {
							var menuImg = "images/menu/" + entry + ".png";
							var menuId = "menu-" + entry;
							dojo.byId(menuId).setAttribute("src", menuImg);
						});
						dojo.query("#ears-submenu").style("visibility", "visible");
						dojo.query("#ears-submenu").style("height", "34px");
						dojo.query("#preloader").style("top", "68px");
						break;
					default:
				}

				ttw.sections.forEach( function(entry) {
					var menuImg = "images/menu/" + entry + ".png";
					var menuId = "menu-" + entry;
					dojo.byId(menuId).setAttribute("src", menuImg);
				});

				if ( section !== "home" ) {
					var menuId = "menu-" + section;
					dojo.byId(menuId).setAttribute("src", selectedMenu);
				}
			} catch (err) {
				console.log(err);
			}

		}
	},

	// Content ---------------------------------------------------------------------

	content: {

		load: function( url, section ) {
			dojo.xhrGet({
				url: url,
				load: function( response ) {

					dojo.empty("content");

					var newContent = dojo.create("div", { innerHTML: response });
					dojo.place( newContent, "content" );
					dojo.parser.parse();
					ttw.preloader.hide();

					try {
						dojo.window.scrollIntoView("topnode");
					} catch (err) {}

					ttw.menu.update(section);
				},
				error: function( err ) {
					console.log( err );
				}
			});
		}
	},

	// Loader ----------------------------------------------------------------------

	preloader: {
		hide: function()
		{
			if ( ttw.fading === true ) {
				return;
			}

			try
			{
				ttw.fading = true;
				dojo.style("preloader", "opacity", "1");

				var anim1 =dojo.fadeOut({
					node: "preloader",
					duration: ttw.fadeSpeed,
					onEnd: function(){
						dojo.style("preloader", "display", "none");
						ttw.fading = false;
					}
				});

				anim1.play();


			} catch ( err ) {
				console.log( err );
			}
		},

		show: function( event ) {

			if ( ttw.fading === true ) {
				return;
			}

			try
			{
				ttw.fading = true;
				dojo.style("preloader", "opacity", "0");
				dojo.style("preloader", "display", "inline");

				var url = dojo.attr(event.target, 'url');
				var section = dojo.attr(event.target, 'section');

				var anim1 = dojo.fadeIn({
					node: "preloader",
					duration: ttw.fadeSpeed,
					onEnd: function() {
						ttw.content.load( url, section );
						ttw.fading = false;
					}
				});

				anim1.play();
			} catch ( err ) {
				console.log( err );
			}
		}
	}
};
