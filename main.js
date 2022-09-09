function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_die = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav");
	mario_atk = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(650,400);
	canvas.parent("canvas");
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(600,300);
	video.parent("game_console");

	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);
}
 function modelLoaded() {
	console.log("model Loaded")
 }

function draw() {
	game()
}
function gotPoses ( results ){
 if ( results.length >0)
    noseX = results[0].pose.nose.x ;
    noseY = results[0].pose.nose.y ;
    
 }






