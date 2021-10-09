var canvas=document.getElementById("myCanvas");

carHeight=100;
carWdith=90;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

carYpos="10";
carXpos="10";

backgroundIMGtag="concrete-road.jpg";

function add() {
	backgroundIMGtag.src=backgroundIMGtag;
    backgroundIMGtag.onload=uploadBackground;
}

function uploadBackground() {
	uploadBackground();

}

function uploadgreencar() {
	uploadgreencar();

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
    if (carYpos>0){
         carYpos=carYpos-10;
         console.log("up pressed, X:"+carXpos+" Y:"+carYpos);
         uploadBackground();
         uploadgreencar();
    }
}

function down(){
    if (carYpos<600){
         carYpos=carYpos+10;
         console.log("Down pressed, X:"+carXpos+" Y:"+carYpos);
         uploadBackground();
         uploadgreencar();
    }
}

function left(){
    if (carXpos>0){
         carXpos=carXpos-10;
         console.log("left pressed, X:"+carXpos+" Y:"+carYpos);
         uploadBackground();
         uploadgreencar();
    }
}

function right(){
    if (carXpos<800){
         carXpos=carXpos+10;
         console.log("right pressed, X:"+carXpos+" Y:"+carYpos);
         uploadBackground();
         uploadgreencar();
    }
}
