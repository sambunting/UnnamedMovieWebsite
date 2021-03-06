$(document).foundation()

$('.homeslider').slick({
	autoplay: true,
	autoplaySpeed: 5000,
	arrows : false
});

$("#movie_search").on('keyup', function (e) {
	console.log(e.keyCode);

	if (e.keyCode == 13) {
		e.preventDefault();
		var searchVal = $("#movie_search").val();
		if (location.hostname == "localhost") {
			window.location = "http://localhost/search/" + searchVal;
		} else {
			window.location = "http://" + location.hostname + "/search/" + searchVal;
		}
	}	
})

var cast = false;
var crew = false;

$("#cast-cast a").on('click', function() {
	if (cast) {
		$("#cast-cast .cast-list").css('height', '160px');
		cast = false;
	} else {
		$("#cast-cast .cast-list").css('height', 'auto');
		cast = true;
	}
})

$("#cast-crew a").on('click', function() {
	if (crew) {
		$("#cast-crew .cast-list").css('height', '160px');
		crew = false;
	} else {
		$("#cast-crew .cast-list").css('height', 'auto');
		crew = true;
	}
})