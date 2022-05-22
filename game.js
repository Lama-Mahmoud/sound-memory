window.onload= function(){
	
	let colorsArrangement=[];
	var level=0;
	
	//tracing clicks
	var position=0;
	
	// get elements
	let green=document.getElementById("green");
	let red=document.getElementById("red");
	let yellow=document.getElementById("yellow");
	let blue=document.getElementById("blue");
	let head=document.getElementById("level");
	
	// initiate the game
	document.addEventListener('keypress',startGame);
	
	
	function nextLevel()
	{
		level++;
		var rand= Math.floor(Math.random()*4);
		colorsArrangement.push(rand);
		console.log(rand);
		head.innerHTML= "Level"+level;
		//play voice
		play(rand);
		
		
	}
	
	
	function selected(color){
		if(colorsArrangement[position]!=color)
		
		if(position===colorsArrangement.length-1)
		{
			if(level===15)
				//you won level=0 again
			else
			{
				position=0;
				nextLevel();
			}
		}
	}
	

	function startGame(){
		document.removeEventListener('keypress',startGame);
		
		// for the sake of testing
		console.log("event removed");
		
		
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
	
	green.addEventListener('click',selected(0));
	red.addEventListener('click',selected(1));
	yellow.addEventListener('click',selected(2));
	blue.addEventListener('click',selected(3));
	
	
	
	
	
	
}