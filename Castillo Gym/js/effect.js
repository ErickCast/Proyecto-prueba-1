"use strict";

$(document).ready(function(){
	//Efecto menu
	$('header .menu a').each(function(index, elemento){
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '20px'
		}, 2000 + (index * 500));
	});
	//Efecto header
		if( $(window).width() > 800 ){
		$('header .center').css({
			opacity: 0,
			marginTop: 0
		});

		$('header .center').animate({
			opacity: 1,
			marginTop: '300px'
		}, 1500);
	}
	// Scroll Elementos Menu
	var sobreNosotros = $('#sobre-nosotros').offset().top,
		galeria = $('#galeria').offset().top,
		redes = $('#encabezado-redes').offset().top,
		ubicacion = $('#ubicacion').offset().top;

	$('#btn-inicio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: sobreNosotros - 100
		}, 500);
	});

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria
		}, 500);
	});

	$('#btn-redes').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: redes
		}, 500);
	});

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		}, 500);
	});

	$("#flotante").click(function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop:0,
		},500);
		return false;
	});
});