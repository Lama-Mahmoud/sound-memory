
window.onload= function(){
	let AllColors=["green","red","yellow","blue"];
	let colorsArrangement=[];
	var level=0;
	var noOfColors=4;
	var yellowCOLOR="#FDFE00";
	var redCOLOR="#FE0000";
	var greenCOLOR="#027402";
	var blueCOLOR="#0100FE";
	
	//tracing clicks
	var position=0;
	
	//string
	var color=null;
	
	// get elements
	let green=document.getElementById("green");
	let red=document.getElementById("red");
	let yellow=document.getElementById("yellow");
	let blue=document.getElementById("blue");
	
	let head=document.getElementById("level");
	
	
	
	function startGame(){
		document.removeEventListener('keypress',startGame);
		
		// for the sake of testing
		console.log("event removed");
		
		document.body.backgroundColor="#011C37";
		nextLevel();
		
	}
	
	
	function startVoice()
	{
		
		if(!color.localeCompare("green"))
		{
			var audio = new Audio('sounds/green.mp3');
			audio.play();
		}
		else if(!color.localeCompare("red"))
		{
			var audio = new Audio('sounds/red.mp3');
			audio.play();
			
		}
		else if(!color.localeCompare("yellow"))
		{
			var audio = new Audio('sounds/yellow.mp3');
			audio.play();
		}
		else if(!color.localeCompare("blue"))
		{
			var audio = new Audio('sounds/blue.mp3');
			audio.play();
		}
		else if(!color.localeCompare("wrong"))
		{
			var audio = new Audio('sounds/wrong.mp3');
			audio.play();
			console.log("i'm already here4");
		}
		else return;
	}
	
	
	
	function nextLevel()
	{
		level++;
		
		var rand= Math.floor(Math.random()*noOfColors);
		colorsArrangement.push(AllColors[rand]);
		
		color=AllColors[rand];
		
		console.log(color);
		
		nextbutton= document.getElementById(color);
		nextbutton.style.borderColor="#011C37";
		head.innerHTML= "Level "+level;
		
		window.setTimeout(function()
			{
				nextbutton.style.borderColor="black";
				//play voice 
				startVoice();
				
			}, 500);
			
			
		
	}
	
	
	function selected(){
		
		currentColor=event.srcElement.id;
		console.log(currentColor);
		button=document.getElementById(currentColor);
		color=currentColor;
		startVoice();
		backgroundColor=null;
		
		// recoloring button
		if(!currentColor.localeCompare("blue"))
			backgroundcolor=blueCOLOR;
		
		else if(!currentColor.localeCompare("red"))
			backgroundcolor=redCOLOR;
		
		else if(!currentColor.localeCompare("yellow"))
			backgroundcolor=yellowCOLOR;
		
		else if(!currentColor.localeCompare("green"))
			backgroundcolor=greenCOLOR;
		
		button.style.backgroundColor="#808080";
		button.style.boxShadow = "0 0 30px white";
		window.setTimeout(function()
			{
				button.style.boxShadow = "";
				button.style.backgroundColor=backgroundcolor;
				
			}, 100);
		
		//cases disscussion
		
		//lose
		if(colorsArrangement[position].localeCompare(currentColor))
		{
			
			head.innerHTML="Press any key to restart";
			// stop the game and red background and playing wrong mp3
			color="wrong";
			startVoice();
			console.log("you lost");
			
			document.body.style.backgroundColor="#AA0000";
			
			// returning old styles and restart the game
			window.setTimeout(function()
			{
				console.log("i'm here");
				document.body.style.backgroundColor="#011C37";
			}, 1000);
			
			level=0;
			position=0;
			document.addEventListener('keypress',startGame);

		}
		
		//win
		else
		{
			position++;
			
			// last tile in the level
			if(position===colorsArrangement.length)
			{
				if(level===15)
				{
					head.innerHTML="Congrats!!! you won"
					document.body.backgroundColor="#93F393";
				}
				else
				{
					position=0;
					nextLevel();
				}
			}
		}
		
	}
	
	
	
	// event listeners for the buttons
	
	green.addEventListener("click",selected);
	red.addEventListener("click",selected);
	yellow.addEventListener("click",selected);
	blue.addEventListener("click",selected);
	
	
	
	// initiate the game for the first time
	document.addEventListener('keypress',startGame);
	
}
	
	
	