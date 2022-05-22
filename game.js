
// to whom it may concern read my functions from the last one to the first 



window.onload= function(){
	
	let colorsArrangement=[];
	var level=0;
	var noOfColors=4;
	
	//tracing clicks
	var position=0;
	
	// get elements
	let green=document.getElementById("green");
	let red=document.getElementById("red");
	let yellow=document.getElementById("yellow");
	let blue=document.getElementById("blue");
	let head=document.getElementById("level");
	
	// initiate the game for the first time
	document.addEventListener('keypress',startGame);
	
	
	function play(colorNumber)
	{
		
		if(colorNumber===0)
		{
			var audio = new Audio('sounds/green.mp3');
			audio.play();
		}
		else if(colorNumber)
		{
			var audio = new Audio('sounds/red.mp3');
			audio.play();
			
		}
		else if(colorNumber===2)
		{
			var audio = new Audio('sounds/yellow.mp3');
			audio.play();
		}
		else if(colorNumber===3)
		{
			var audio = new Audio('sounds/blue.mp3');
			audio.play();
		}
		else
		{
			var audio = new Audio('sounds/wrong.mp3');
			audio.play();
		}
	}
	
	function nextLevel()
	{
		level++;
		var rand= Math.floor(Math.random()*noOfColors);
		colorsArrangement.push(rand);
		
		console.log(rand);
		
		head.innerHTML= "Level"+level;
		
		//play voice
		play(rand);
		
		
	}
	
	
	function selected(color){
		if(colorsArrangement[position]!=color)
		{
			// stop the game and red background
			document.body.style.backgroundColor="#FE0000";
			
			// returning old functions
			window.setTimeout(function()
			{
				document.body.style.backgroundColor="#FE0000";
			}, 300);
			level=0;
			position=0;
			document.addEventListener('keypress',startGame);

		}
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
		
		nextLevel();
		
	}
	
	green.addEventListener('click',selected(0));
	red.addEventListener('click',selected(1));
	yellow.addEventListener('click',selected(2));
	blue.addEventListener('click',selected(3));
	
	
	
	
	
	
}