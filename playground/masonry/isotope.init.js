isotope_kick=function(){
	$isotope_container.isotope({
		// update columnWidth to a percentage of container width
		masonry: { columnWidth: $isotope_container.width() / 8 }
	});
}

$isotope_container = $('.row.isotope');
isotope_kick();

$(window).on("debouncedresize", (function(){
	isotope_kick();
}))

$('a.resize').click(function(e){
	e.preventDefault();
	$('.row.isotope').animate({opacity:0}, 100);
	$('.row.isotope').animate({width:$(this).data('size')}, 200,isotope_kick);
	$('.row.isotope').animate({opacity:1}, 100);
});