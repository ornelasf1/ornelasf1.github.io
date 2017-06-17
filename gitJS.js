var iter = 0;
var baseid;

$(document).ready(function(){
	baseid = setInterval(welcomeAnim(), 1000);
	setInterval(alert("interval"), 4000);
	disappearBar();
});

function welcomeText(){
	setTimeout(function(){
		$("#welcome1").fadeIn("slow");
	}, 1000);
	setTimeout(function(){
		$("#welcome1").fadeOut("slow");
	}, 3000);
}

function disappearBar(){
	setTimeout(function(){
		$("#intro-bar").fadeOut("slow");
	}, 6000);
}

function welcomeAnim(){
	if(iter++ > 3){
		clearInterval(baseid);
		return;
	}
	var selector = "welcome" + iter;
	var text = document.getElementById(selector);
	var pos = -100;
	var id = setInterval(frame, 5);
	function frame(){
		if(pos == 2000){
			clearInterval(id);
		}else if(pos > 300 && pos < 600){
			pos+=1;
			text.style.left = pos + "px";
		}else{
			pos+=10;
			text.style.left = pos + "px";
		}
	}
}

