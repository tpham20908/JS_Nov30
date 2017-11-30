$(function() {
	// alert($('#celebs tbody tr').length + " elements");
	// alert($('#celebs tbody tr:even').length + " even elements");
	// alert($('#celebs tbody tr:odd').length + " odd elements");

	// get the font size of the first tr in tbody
	var firstTr = $('#celebs tbody tr:first');
	// alert(firstTr.css('font-size'));
	// change the color and background of the first td
	firstTr.css('color', 'red');
	firstTr.css('background-color', 'purple');

	// combine styles into one statement
	var evenTrs = $('#celebs tbody tr:even');
	// evenTrs.css({
	// 	"background-color": "#d88",
	// 	"color": "#8dd",
	// 	"text-transform": "uppercase",
	// 	"line-height": "2.5em"
	// });

	// apply zebra type to tr even rows
	evenTrs.addClass('zebra');
	// remove a class
	// evenTrs.removeClass('zebra');
	// add the hover effect using the zebraHover css class
	evenTrs.mouseover(function() {
		$(this).addClass('zebraHover');
	});

	evenTrs.mouseout(function() {
		$(this).removeClass('zebraHover');
	});

	var disclaimerPara = $('#disclaimer');
	disclaimerPara.click(function() {
		// hide paragraph with id disclaimer
		// disclaimerPara.hide(10).show();

		// fade out
		disclaimerPara.fadeOut();
	});

});