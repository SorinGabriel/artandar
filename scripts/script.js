$(document).ready(function() {
   $('#nav').localScroll({duration:800});
});

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, x);
});
var x=$(window).height();
function setSizes() {

	/* Despre */
	$('#despre').css({
		'height': ($(window).height()*1.5) + 'px'
	});
	/* Intro */
	$('#intro').css({
		'height': ($(window).height()*1.5) + 'px'
	});
	/* Parteneri */
	$('#parteneri').css({
		'height': ($(window).height()*1.5) + 'px'
	});

}

    setSizes();
    $(window).resize(function() {
        setSizes();
		x=$(window).height()*1.5;
    });