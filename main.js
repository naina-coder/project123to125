
function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(5,170);

    canvas = createCanvas(550, 170);
    canvas.position(700, 275);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded()
{
    console.log("poseNet is Intialized.");

}

function gotPoses(results)
{
    if(results[0].length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

    }
}

function draw()
{
    textSize(difference);
    fill('#a83234')
    text('Gauri', 600, 170)
    stroke('#e3a3b9')
}