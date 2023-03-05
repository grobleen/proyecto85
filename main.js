//crear la variabale canvas
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

//establecer el ancho y alto del coche verde con las variables greencar_width y greencar_height
greencar_width=75;
greencar_height=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//establecer la variable x, y del auto, greencar_x,greencar_y 
greencar_x=5;
greencar_y=225;
function add() {
	background_imgTag = new Image(); 				
	background_imgTag.onload = uploadBackground; 	
	background_imgTag.src = background_image;   	

	greencar_imgTag = new Image(); 				
	greencar_imgTag.onload = uploadgreencar; 	
	greencar_imgTag.src = greencar_image;  		 

}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
	
}

//añadir un evento de addEventListener para keydown
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
            //llamar a la funcion up
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
            //llamar a la funcion down
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
             //llamar a la funcion left
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
            //llamar a la funcion right
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("When up arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		 uploadBackground();
		 uploadgreencar();
		
	}
}

function down()
{
	if(greencar_y <=350)
	{
		greencar_y =greencar_y+ 10;
		console.log("When down arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
		
	}
}

function left()
{
	if(greencar_x >= 0)
	{
		greencar_x =greencar_x - 10;
		console.log("When left arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		 uploadgreencar();
		
	}
}

function right()
{
	if(greencar_x <= 750)
	{
		greencar_x =greencar_x + 10;
		console.log("When right arrow is pressed,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
		
   }
}
