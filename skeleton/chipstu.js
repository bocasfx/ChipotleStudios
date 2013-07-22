// var ChipStu = ChipStu || {};

var ChipStu = function () {
	console.log("Initialized!");

	var chipstu = this;

	this.menuDescriptor = {
		menu : [
			{
				title : "home",
				items : []
			},
			{
				title : "ears",
				items : [
					{
						title : "tsk",
						items : []
					},
					{
						title : "q",
						items : []
					},
					{
						title : "tape",
						items : []
					},
					{
						title : "midiworm",
						items : []
					}
				]
			},
			{
				title : "brain",
				items : []
			},
			{
				title : "mouth",
				items : []
			},
			{
				title : "info",
				items : []
			}
		]
	};
};

ChipStu.prototype = function() {

	var createMenu = function() {

		var nav = $('#nav');
		$(nav).append("<ul id='menu' class='csTopMenu'></ul>");
		var menu = $('#menu');

		$.each(this.menuDescriptor.menu, function(item, elem) {
			var src = 'images/menu/' + elem.title + '.png';
			var onclick = 'chipstu.loadContent(\'' + elem.title + '\')';
			$(menu).append('<li class="csTopMenuItem"><a onclick="' +  onclick + '"><img src="' + src + '"></href></li>');
		});
	},

	loadContent = function( section ) {
		console.log(section);
		var url = 'content/' + section + '.html';
		var contentDiv = $('#content');
		$.get(url, function(data) {
			$(contentDiv).empty();
			$(contentDiv).html(data);
		});
		$('html, body').animate({
			scrollTop: $("#content").offset().top
		}, 0);
	};

	return {
		createMenu: createMenu,
		loadContent: loadContent
	};
} ();

var chipstu = null;

$(document).ready( function() {

	chipstu = new ChipStu();
	chipstu.createMenu();
	chipstu.loadContent('home');
});

$(window).resize(function() {
	var navHeight = $('#nav').css('height');
    $('#nav-placeholder').css('height', navHeight);
});


