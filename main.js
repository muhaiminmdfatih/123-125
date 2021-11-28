noseX=0;
noseY=0;
rightWristX=0;
leftwristX=0;
difference=0;

function setup(){
video = createCapture(VIDEO);
video.size(550,500)

canvas = createCanvas(550,550);
canvas.position(560,150)
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses)
}
function draw(){
background('orangered')
document.getElementById("square_side").innerHTML="Width and height of a square will be="+difference+"px";
fill('lightblue');
textSize(difference)
text('muhaimin',50,400);
}
function modelLoaded(){
console.log("Posenet is initiaized");
}
function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX="+noseX+"noseY="+noseY);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
console.log("leftWristX="+leftwristX+"rightwristX"+rightWristX);
}
}