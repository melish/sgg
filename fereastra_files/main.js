var oprestescroll=0;
var ferestreslide1=1;
var slideslide2=1;
var animatieslide2=2;

$(document).ready(function() {
    animeazaSpecial();
    /* Every time the window is scrolled ... */
    $(window).scroll( function(e){
    	animeazaSpecial();
    	if(verificaVizibilitate("ferestre-first-slide",200)) animeazaFerestreSlide1();
	});
    
});



function animeazaSpecial() {
	$('.animate-text').each( function(i){
            
            var bottom_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({
                	'opacity':'1',
                	'margin-top':'0'
                },1000);
                $(this).removeClass("animate-text");    
            }
            
        }); 
        
        $('.animate-opacity').each( function(i){
        	
        	
            
            var bottom_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({
                	'opacity':'1'
                },1000);
                $(this).removeClass("animate-opacity");    
            }
            
        }); 
        
        $('.animate-opacity-absolute').each( function(i){
        	
        	
            
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({
                	'opacity':'1'
                },1000);
                $(this).removeClass("animate-opacity");    
            }
            
        }); 
        
        var delay_vitraje=0;
        
        $('.animate-vitraje').each( function(i){
            
            var bottom_of_object = $(this).position().top;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_object ){
            	
            	$(this).css("margin-top","100px");    
                $(this).delay(delay_vitraje).animate({
                	'opacity':'1',
                	'margin-top':'30px'
                },1000);
                $(this).removeClass("animate-vitraje");    
            }
            delay_vitraje+=300;
            if(delay_vitraje==900) delay_vitraje=0;
        }); 
}

function verificaVizibilitate(id,offset) {
	var returnvar=0;
	var bottom_of_object = $("#"+id).position().top + $("#"+id).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object-offset ){
    	returnvar=1;	
    }
    if($("#"+id).css("display")=="none") { returnvar=0; }
    return returnvar;
}	

function animeazaFerestreSlide1() {
	if(ferestreslide1) {
	var delay=500;
	$("#schita1").animate({"opacity":"0"},1000);
	$("#schita2").animate({"opacity":"1"},1000);
	$("#schita2").delay(delay).animate({"opacity":"0"},1000);
	$("#schita3").delay(delay).animate({"opacity":"1"},1000);
	$("#schita3").delay(delay*2).animate({"opacity":"0"},1000);
	$("#schita4").delay(delay*2).animate({"opacity":"1"},1000);
	$("#schita4").delay(delay*3).animate({"opacity":"0"},1000);
	$("#schita5").delay(delay*3).animate({"opacity":"1"},1000);
	$("#schita5").delay(delay*4).animate({"opacity":"0"},1000);
	$("#schita6").delay(delay*4).animate({"opacity":"1"},1000);
	$("#schita6").delay(delay*5).animate({"opacity":"0"},1000);
	$("#schita7").delay(delay*5).animate({"opacity":"1"},1000);
	}
	ferestreslide1=0;
}

$(function() {
      if($( window ).width()>=1200) {
	  	$(".front-mobile").addClass("front");
	  	$(".back-mobile").addClass("back");
	  	$(".back-mobile-alt").hide();
	  	$(".back-mobile").show();
	  } else {
	  	$(".front-mobile").removeClass("front");
	  	$(".back-mobile").hide();
	  	$(".back-mobile-alt").show();
	  }
	  $("#scena").height($("#intrebare1").height());
});

$( window ).resize(function() {
      oprestescroll=0;
      //console.log("test");
      $("#scena").height($("#intrebare1").height());
      if($( window ).width()>=1200) {
	  	$(".front-mobile").addClass("front");
	  	$(".back-mobile").addClass("back");
	  	$(".back-mobile-alt").hide();
	  	$(".back-mobile").show();
	  	$("#meniumobile").hide();
	  } else {
	  	$(".front-mobile").removeClass("front");
	  	$(".back-mobile").hide();
	  	$(".back-mobile-alt").show();
	  }
});

function inchideCookie() {
	$.ajax({url: "/js/cookie.ajax.php"});
	$(".cookie-container").fadeOut();
}

$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
		$("#meniumobile").toggle();
	});
});

function scroll2element(id) {
	$('html, body').animate({
        scrollTop: $("#"+id).offset().top
    }, 1300);
}
