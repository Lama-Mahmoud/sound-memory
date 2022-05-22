window.onload= function(){
	
	let colorsArrangement=[];
	
	function rand(){
		return Math.floor(Math.random()*4));
	}
	// initiate the game
	document.onkeypress = function (){
		var rand=rand();
		
		colorsArrangement.push(rand);
		
		
		if(rand===0)
		{
			let green=document.getElementById("green");
			var audio = new Audio('sounds/green.mp3');
			audio.play();
		}
		if(rand===1)
		{
			let red=document.getElementById("red");
			var audio = new Audio('sounds/red.mp3');
			audio.play();
			
		}
		if(rand===2)
		{
			let yellow=document.getElementById("yellow");
			var audio = new Audio('sounds/yellow.mp3');
			audio.play();
		}
		if(rand===3)
		{
			let blue=document.getElementById("blue");
			var audio = new Audio('sounds/blue.mp3');
			audio.play();
		}
		
	}
}