var iter = 0;
var baseid;

$(document).ready(function(){
	baseid = setInterval(function(){ welcomeAnim() }, 1500);
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
	}, 8000);
}

function welcomeAnim(){
	if(iter++ > 4){
		clearInterval(baseid);
		return;
	}
	var selector = "welcome" + iter;
	var text = document.getElementById(selector);
	var pos = -1000;
	var id = setInterval(frame, 5);
	function frame(){
		if(pos == 2000){
			clearInterval(id);
		}else if(pos > 300 && pos < 600){
			pos+=1;
			text.style.left = pos + "px";
		}else if(pos < -300){
			pos+=300;
			text.style.left = pos + "px";
		}else{
			pos+=10;
			text.style.left = pos + "px";
		}
	}
}

