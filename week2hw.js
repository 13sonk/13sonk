//song link https://www.youtube.com/watch?v=ioL_sqlQU8U
//load song https://p5js.org/reference/#/p5.SoundFile
//size change according to amp https://p5js.org/reference/#/p5.Amplitude
//response to diff freq https://p5js.org/reference/#/p5.FFT

let img;
let pixelation_level = 25;

	function preload() {
	img = loadImage("download.jpg"); 
	}
	function setup() {
	song = loadSound('the reason 8bit.mp3');
	fft = new p5.FFT();
	amplitude = new p5.Amplitude();
	createCanvas(1000, 800);
	background("#df0d0d");
	pixelDensity(1);
	loadPixels();
	frameRate(8);
	}

	function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}
	function draw() {
	myfinger();	
	
	push();
	translate(500,400)
	myfinger();
	pop();
	
	push();
	translate(0,400)
	myfinger();
	pop();
	
	push();
	translate(500,0)
	myfinger();
	pop();
	
	push();
	let spectrum = fft.analyze();
	strokeWeight(7)
	translate(500, 400);
	scale(0.25);
  var fireRed = random(255);
  var fireGreen = random(fireRed);
  var fireBlue = random(fireGreen);
  stroke(fireRed, fireGreen, fireRed);
  for (let i = 0; i< spectrum.length; i++){
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
		rotate(180);
    rect(x, height, width / spectrum.length, h )
  }
	pop();
		
	let level = amplitude.getLevel();
  let sz = map(level, 0, 1, 0, 200);
	push();
  translate (sz/2, sz/2);
  fill(fireRed, fireGreen, fireRed);
	myBEEF();
	pop();
		
	push();
  let wf = fft.waveform();
  noFill();
	translate(250, 200)
	scale(0.5)
  beginShape();
  stroke(0);
	strokeWeight(5);
  for (let i = 0; i < wf.length; i++){
    let x = map(i, 0, wf.length, 0, width);
    let y = map( wf[i], -1, 1, 0, height);
    vertex(x, y);
  }
  endShape();
	pop();

	}
	