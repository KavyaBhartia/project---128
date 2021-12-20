song1 = "";
song2 = "";
leftWristx = 0;
leftWristy = 0; 
rightWristx = 0;
rightWristy = 0;
function preload()
{
    song = loadSound("song1.mp3");
    song = loadSound("song2.mp3");
}
function setup()
{
 canvas = createCanvas(600, 500);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("Pose Net is initilized");
}
function draw()
{
 image(video, 0, 0, 600, 500);
}
function gotPoses(results)
{
    if (results.length > 0) 
    {
    console.log(results);    
    leftWristx = results[0].pose.leftWrist.x;
    leftWristy = results[0].pose.leftWrist.y;
    console.log("Left wrist x = " + leftWristx + "Left wrist y = " + leftWristy);
    rightWristx = results[0].pose.rightWrist.x;
    rightWristy = results[0].pose.rightWrist.y;
    console.log("Right wrist x = " + rightWristx + "Right Wrist y = " + rightWristy);
    }
}