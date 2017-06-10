$(document).ready(function(){
	setTimeout(function(){
		$(".introText").fadeIn("slow", function(){
			$(".introText").toggleClass("table-hidden");
		});
	}, 3000);
	setTimeout(function(){
		$("#intro").fadeOut("slow");
	}, 6000);
});

