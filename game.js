window.onload= function(){
	
	let colorsArrangement=[];
	var level=0;
	
	
	// get elements
	let green=document.getElementById("green");
	let red=document.getElementById("red");
	let yellow=document.getElementById("yellow");
	let blue=document.getElementById("blue");
	
	// initiate the game
	document.onkeypress = function (){
		var rand= Math.floor(Math.random()*4);
		
		console.log(rand);
		level++;
		
		colorsArrangement.push(rand);
		
		
		if(rand===0)
		{
			var audio = new Audio('sounds/green.mp3');
			audio.play();
		}
		if(rand===1)
		{
			var audio = new Audio('sounds/red.mp3');
			audio.play();
			
		}
		if(rand===2)
		{
			var audio = new Audio('sounds/yellow.mp3');
			audio.play();
		}
		if(rand===3)
		{
			var audio = new Audio('sounds/blue.mp3');
			audio.play();
		}
		
	}
}