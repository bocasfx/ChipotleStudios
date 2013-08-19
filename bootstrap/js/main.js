var csapp = null;

$(document).ready(function() {
	csapp = new CSApp();

	$('#mainNav li').on('click', csapp.navigate);
	$('.navbar-brand').on('click', csapp.navigate);

	csapp.showHome();
	$('#courtain').fadeOut(1000);
	console.log("Ready");
});

var CSApp = function() {
	var csapp = this;
};

CSApp.prototype = function() {

	var navigate = function( event ) {

		var caller = this;

		$('.navbar-nav li').removeClass('active');
		$(this).addClass('active');
		
		$('#courtain').fadeIn(1000, function() {
			
			$('#csmain').empty();

			switch($(caller).text()) {
				case 'Ears':
					csapp.showEars();
					break;
				case 'Brain':
					csapp.showBrain();
					break;
				case 'Mouth':
					csapp.showMouth();
					break;
				case 'Info':
					csapp.showInfo();
					break;
				default:
					csapp.showHome();
					break;
			}

			
		});
	},

	showHome = function() {
		$('#csmain').empty();
		$('.navbar-nav li').removeClass('active');
		$('#csmain').append('<img class="center img-responsive" src="img/home.png"/>');
		$('#courtain').fadeOut(1000);
	},

	showEars = function() {
		// $.get('content/tsk.html', function(data) {
		// 	$('#csmain').html(data);
		// 	$('#courtain').fadeOut(1000);
		// });
		// 
		$.ajax({
			url: "content/tsk.html",
		}).done(function ( data ) {
			$('#csmain').html(data);
			$('#courtain').fadeOut(1000);
		});
	},

	showBrain = function() {
		console.log('show brain');
		$('#courtain').fadeOut(1000);
	},

	showMouth = function() {
		console.log('show mouth');
		$('#courtain').fadeOut(1000);
	},

	showInfo = function() {
		console.log('show Info');
		$('#courtain').fadeOut(1000);
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

