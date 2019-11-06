$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").click(function() {
		$("p").addClass("text_color");
	});
	$("h2").hover(function() {
		$("h2").addClass("h2_bk_color");
	});
	$("#html").hover(function() {
		$("#html").css("font-size", "2em");
	});
	$("#mysql").hover(function() {
		$("#mysql").css("font-size", "2em");
	});
	$("#python").hover(function() {
		$("#python").css("font-size", "2em");
	});
	$("#jquery").hover(function() {
		$("#jquery").css("font-size", "2em");
	});
	$("#django").hover(function() {
		$("#django").css("font-size", "2em");
	});
	$("#css").hover(function() {
		$("#css").css("font-size", "2em");
	});
	$(".bottom_button").hover(function() {
		$("body").css("background-color", "black");
	}, function() {
		$("body").css("background-color", "grey");
	});
	$("#hide_button").click(function() {
		$("#hide_para").slideToggle("slow");
	});
	$("button").mouseenter(function() {
		$("#hide_button").fadeTo("slow", "0.5");
	})
	$("button").mouseleave(function() {
		$("#hide_button").fadeTo("slow", "1");
	})



}); 
