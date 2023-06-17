/** 
여기 있는 arc_guide(), ellipse_guide(), rect_guide() 함수는 
utils.js에서 정의한 함수를 사용하는 것이다.
내가 직접 만든 알파벳 도형 함수들을 여기에 다 정리해보자.
*/

function myfinger() {
image(img, 0, 0, 500, 400);
	loadPixels();
  for (let x = 0; x < width; x += pixelation_level) {
  for (let y = 0; y < height; y += pixelation_level) {
      let i = (x + y * width) * 4;
      let r = pixels[i + 0];
      let g = pixels[i + 1];
      let b = pixels[i + 2];
      let a = pixels[i + 3];
      fill(r, g, b, a);
      square(x, y, pixelation_level);
}
}
}

function myBEEF() {
	push();
	translate(150,110);
	scale(0.7);
	
	//F shadow
	push();
	fill("#000000")
	translate(625, 290);
	myLetterF();
	pop();
	
	//F letter
	push();
	translate(620, 280);
	myLetterF();
	pop();
	
	//E2 shadow
	push();
	fill("#000000")
	translate(490, 300);
	myLetterE();
	pop();
	
	//E2 letter
	push();
	translate(485, 288);
	myLetterE();
	pop();
	
	//E1 shadow
	push();
	fill("#000000")
	translate(350, 300);
	myLetterE();
	pop();
	
	//E1 letter
	push();
	translate(345, 288);
	myLetterE();
	pop();
	
	//B shadow
	push();
	fill("#000000")
	translate(202, 302);
	myLetterB();
	pop();
	
	//B letter
	push();
	translate(193, 289);
	myLetterB();
	pop();
	
	push();
	fill("#000000")
	translate(285, 376);
	myLetterBtri();
	pop();
	
	push();
	fill("#000000")
	translate(264, 430);
	myLetterBrhom();
	pop();
}

			function myLetterB() {
			push();
			beginShape();
			vertex(132, 0);
			vertex(48, 16);
			vertex(28, 96);
			vertex(48, 92);
			vertex(0, 232);
			vertex(12, 272);
			vertex(152, 200);
			vertex(172, 172);
			vertex(160, 108);
			vertex(180, 72);
			endShape(CLOSE)
			pop();
}

			function myLetterBrhom() {
			push();
			beginShape();
			vertex(48, 0);
			vertex(8, 8);
			vertex(0, 48);
			vertex(47, 28);
			endShape(CLOSE)
			pop();
}

			function myLetterBtri() {
			push();
			beginShape();
			vertex(20, 0);
			vertex(4, 4);
			vertex(4, 20);
			endShape(CLOSE)
			pop();
}

			function myLetterE() {
			beginShape();
			vertex(160, 24);
			vertex(20, 0);
			vertex(0, 28);
			vertex(16, 264);
			vertex(48, 268);
			vertex(164, 200);
			vertex(164, 152);
			vertex(72, 188);
			vertex(64, 144);
			vertex(88, 144);
			vertex(100, 140);
			vertex(92, 100);
			vertex(60, 96);
			vertex(56, 68);
			vertex(116, 84);
			vertex(108, 92);
			vertex(140, 92);
			vertex(176, 52);
			endShape(CLOSE)	
	
}	

			function myLetterF() {
			push();
			beginShape();
			vertex(204, 28);
			vertex(176, 0);
			vertex(28, 28);
			vertex(0, 272);
			vertex(60, 248);
			vertex(68, 232);
			vertex(72, 152);
			vertex(108, 152);
			vertex(128, 112);
			vertex(72, 112);
			vertex(72, 72);
			vertex(120, 72);
			vertex(108, 100);
			vertex(152, 100);
			endShape(CLOSE)
			pop();
}	
	