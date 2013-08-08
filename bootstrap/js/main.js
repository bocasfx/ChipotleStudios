var csapp = null;

$(document).ready(function() {
	csapp = new CSApp();

	$('#mainNav li').on('click', csapp.navigate);
	$('.navbar-brand').on('click', csapp.showHome);

	csapp.showHome();
	$('#courtain').fadeOut(1000);
	console.log("Ready");
});

var CSApp = function() {
	var csapp = this;
};

CSApp.prototype = function() {


	var showHome = function() {
		$('#csmain').empty();
		$('.navbar-nav li').removeClass('active');
		$('#csmain').append('<img class="center img-responsive" src="img/home.png"/>');
	},

	navigate = function( event ) {
		var caller = this;
		$('.navbar-nav li').removeClass('active');
		$(caller).addClass('active');
		$('#courtain').fadeIn(1000, function() {
			
			$('#csmain').empty();
			var section = $(caller).text();
			switch(section) {
				case 'Ears':
					csapp.showEars();
					break;
				case 'Brain':
					csapp.showBrain();
					break
				case 'Mouth':
					csapp.showMouth();
					break

				case 'Info':
					csapp.showInfo();
					break
				default:
					break;
			}
			console.log('fadeout');
			$('#courtain').fadeOut(1000);
		});
	},

	showHome = function() {
		$('#csmain').empty();
		$('.navbar-nav li').removeClass('active');
		$('#csmain').append('<img class="center img-responsive" src="img/home.png"/>');
	},

	showEars = function() {
		// $('#csmain').append('<h3>The Sofa Kings</h3>');
		// $('#csmain').append('<div id="TSKContent"></div>');
		// $('#TSKContent').text('The Sofa Kings are the next generation of psychedelic jam music. Taking inspiration from classic Funk and Jazz as well as modern improvisational and jam bands, they weave deceptively fluid bass lines with funky and hypnotic drum beats into atmospheric keys and guitar lines that bubble and simmer with rhythm and melody, until they erupt into a soaring celebration of music.');

		$.get('content/tsk.html', function(data) {
			$('#csmain').html(data);
		});
	},

	showBrain = function() {
		console.log('show brain');
	},

	showMouth = function() {
		console.log('show mouth');
	},

	showInfo = function() {
		console.log('show Info');
	};

	return {
		showHome: showHome,
		navigate: navigate,
		showEars: showEars,
		showBrain: showBrain,
		showMouth: showMouth,
		showInfo: showInfo
	};
}();

