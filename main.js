var canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d")

rover_height=90
rover_width=100

roverX=10
roverY=10
var backgroundimagesarray=["n1.jpg","n2.jpg","n3.jpg","mars.jpg"]
var randomnumber=Math.floor(Math.random()*3)


var backgroundimage=backgroundimagesarray[randomnumber]
rover_img="rover.png"
function add(){
    bTag=new Image;
    bTag.onload=uploadbackground;
    bTag.src=backgroundimage

    rTag=new Image;
    rTag.onload=uploadrover;
    rTag.src=rover_img;
}
function uploadbackground(){
    ctx.drawImage(bTag,0,0,canvas.width,canvas.height)
}
function uploadrover(){
    ctx.drawImage(rTag,roverX,roverY,rover_width,rover_height)
}
window.addEventListener("keydown", my_keydown)
function my_keydown(e){
    keypress=e.keyCode
    console.log(keypress)
    if (keypress==37) {
        left()
    }  
    if (keypress==38) {
        up()
    }
    if (keypress==39) {
        right()
    }
    if (keypress==40) {
        down()
    }
        
    
}
function left(){
    if (roverX>=0) {
        roverX=roverX-10;
        uploadbackground()
        uploadrover()
    }
}
function right(){
    if (roverX<=800) {
        roverX=roverX+10;
        uploadbackground()
        uploadrover()
    }
}
function up(){
    if (roverY>=0) {
        roverY=roverY-10;
        uploadbackground()
        uploadrover()
    }
}
function down(){
    if (roverY<=600) {
        roverY=roverY+10;
        uploadbackground()
        uploadrover()
    }
}

