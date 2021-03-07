$(document).ready(function(){
	// $('#wip').hover(function(){
	// 	$('#wip-text').toggleClass('highlight');
	// });
	var $cyan = ('#00FFFF');
	var $grey = ('#cdcdcd');
	var $rose = ('#e4c1e2');

	$(function() {
		$('#wip').hover(function() { 
    		$('#wip-text').fadeIn(); 
		}, function() { 
    		$('#wip-text').fadeOut(); 
		});
	});

	$('#expand-svndl-17').click(function() {
		$('#svndl-17').toggle(100);
	});

	$('#expand-pac').click(function() {
		$('#pac').toggle(100);
	});

	$('#expand-svndl-16').click(function() {
		$('#svndl-16').toggle(100);
	});

	$('#expand-3dsl').click(function() {
		$('#3dsl').toggle(100);
	});

	$('#expand-ex').click(function() {
		$('#ex').toggle(100);
	});

	$('#link-1-span').hover(function() {
		$('#link-1-span').toggleClass('span-C');
		$('#link-1-a').toggleClass('a-white');
	});
	$('#link-2-span').hover(function() {
		$('#link-2-span').toggleClass('span-M');
		$('#link-2-a').toggleClass('a-white');
	});
	$('#link-3-span').hover(function() {
		$('#link-3-span').toggleClass('span-Y');
		$('#link-3-a').toggleClass('a-white');
	});

	$('a').hover(function() {
		$(this).toggleClass('link-hover');
	});

	$('#email-field, #msg-field, .square-button').focus(function() {
		$('#email-field').attr("placeholder","name");
		$('#email-field').css("width","70px");
		$('#email-field').css("background-color","#00FFFF");
		$('#email-field').css("border","2px solid #00FFFF");
		$('#msg-field').show();
		$('.square-button').show();
	});

	$('#monogram-b').draggable({scroll:false});
	$('#name-2').draggable({scroll:false});
	$('#name-3').draggable({scroll:false});

	$('#card-1').draggable({containment:"window"});
	$('#card-2').draggable({containment:"window"});

	var bounce = $('.horiz-bounce');
	hover();
		function hover(){
   		bounce.animate({top:'+=7'}, 750);
   		bounce.animate({top:'-=7'}, 750, hover);
		}	

// COLOR TOGGLES 
	$('#lbtn').on("click", function() {
		$('body').css("background-color","#1e506a");
		$('#card-1').css("background-color","#fcf4fb");
		$('#card-2').css('background-image', 'url(assets/imgs/sea-grad.png)');
		$('#card-2').css('background-size', '370px 370px');
		$('#blurb').css("background-color","#f9e8eb");
		$('#lbtn').css("opacity","1");
		$('#cmy').css("opacity","0.5");
		$('#blue').css("opacity","0.5");
		$('span, a').css("background-color","#e4c1e2");
		$("#face").attr("src","assets/imgs/face-orig.png");
		$('#name-1').css("color","#fcf4fb");
		$('#name-3').css("color","#e4c1e2");
		$('#name-2').css("color","#1e506a");
		$('#name-1,#name-2,#name-3').css("opacity","0.5");
		$('input').css("background-color",$rose);
		$('input').css("border","2px solid #e4c1e2");
		$('.center-text').css("color","#FFFFFF");
		

		$('#link-1-span').on("mouseenter", function() {
			$('#link-1-span').css("background-color","#e4c1e2");
			$('#link-1-a').css("background-color","#FFFFFF");
		});		
		$('#link-2-span').on("mouseenter", function() {
			$('#link-2-span').css("background-color","#1e506a");
			$('#link-2-a').css("background-color","#FFFFFF");
		});
		$('#link-3-span').on("mouseenter", function() {
			$('#link-3-span').css("background-color","#000000");
			$('#link-3-a').css("background-color","#FFFFFF");
		});
		$('#link-1-span, #link-2-span, #link-3-span').on("mouseleave", function() {
			// $('#link-1-span, #link-2-span, #link-3-span, #link-1-a, #link-2-a, #link-3-a').css("background-image","none");
			$('#link-1-span, #link-2-span, #link-3-span').css("background-color","#e4c1e2");
			$('#link-1-a, #link-2-a, #link-3-a').css("background-color","#e4c1e2");
		});
	});

	$('#blue').on("click", function() {
		$('body').css("background-color","#d3ebf1");
		$('#card-1').css("background-color","#FFFFFF");
		$('#card-2').css("background-image","none");
		$('#blurb').css("background-color","#00FFFF");
		$('#lbtn').css("opacity","0.5");
		$('#cmy').css("opacity","0.5");
		$('#blue').css("opacity","1");
		$('span, a').css("background-color","#00FFFF");
		$("#face").attr("src","assets/imgs/face.png");
		$('#name-1').css("color","#FFFF00");
		$('#name-3').css("color","#00FFFF");
		$('#name-2').css("color","#FF00FF");
		$('#name-1,#name-2,#name-3').css("opacity","0.2");
		$('input').css("background-color",$cyan);
		$('input').css("border","2px solid #00FFFF");
		$('.center-text').css("color","#000000");

		$('#link-1-span').on("mouseenter", function() {
			$('#link-1-span').css("background-color","#00FFFF");
			$('#link-1-a').css("background-color","#FFFFFF");
		});		
		$('#link-2-span').on("mouseenter", function() {
			$('#link-2-span').css("background-color","#00FFFF");
			$('#link-2-a').css("background-color","#FFFFFF");
		});
		$('#link-3-span').on("mouseenter", function() {
			$('#link-3-span').css("background-color","#00FFFF");
			$('#link-3-a').css("background-color","#FFFFFF");
		});	
		$('#link-1-span, #link-2-span, #link-3-span').on("mouseleave", function() {
			$('#link-1-span, #link-2-span, #link-3-span').css("background-color","#00FFFF");
			$('#link-1-a, #link-2-a, #link-3-a').css("background-color","#00FFFF");
		});
	});

	$('#cmy').on("click", function() {
		$('body').css("background-color",$grey);
		$('#card-1').css("background-color","#FFFFFF");
		$('#card-2').css('background-image', 'url(assets/imgs/cmy-waves.png)');
		$('#blurb').css("background-color","#FFFFFF");
		$('#lbtn').css("opacity",".5");
		$('#cmy').css("opacity","1");
		$('#blue').css("opacity","0.5");
		$('span, a').css("background-color",$grey);
		$("#face").attr("src","assets/imgs/face-bw.png");
		$('#name-1').css("color","#FFFF00");
		$('#name-3').css("color","#00FFFF");
		$('#name-2').css("color","#FF00FF");
		$('#name-1,#name-2,#name-3').css("opacity","0.2");
		$('input').css("background-color",$grey);
		$('input').css("border","2px solid" + $grey);
		$('.center-text').css("color","#000000");


		$('#link-1-span').on("mouseenter", function() {
			$('#link-1-span').css("background-color","#00FFFF");
			$('#link-1-a').css("background-color","#FFFFFF");
		});		
		$('#link-2-span').on("mouseenter", function() {
			$('#link-2-span').css("background-color","#FF00FF");
			$('#link-2-a').css("background-color","#FFFFFF");
		});
		$('#link-3-span').on("mouseenter", function() {
			$('#link-3-span').css("background-color","#FFFF00");
			$('#link-3-a').css("background-color","#FFFFFF");
		});
		$('#link-1-span, #link-2-span, #link-3-span').on("mouseleave", function() {
			$('#link-1-span, #link-2-span, #link-3-span').css("background-color",$grey);
			$('#link-1-a, #link-2-a, #link-3-a').css("background-color",$grey);
		});
	});

// END OF COLOR TOGGLES


});
