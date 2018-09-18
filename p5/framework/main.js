var ship;
var invs = [];
var lazers = [];


function setup(){
createCanvas(600, 400);
ship = new Ship();
lazer = new Lazer(2/width, height/2);

for(var i = 0;i<6;i++){
invs[i] = new Inv(i*80+80, 60);
	}
}
function draw(){
	background(51);
	ship.show();
	ship.move();
	for(var i = 0;i<lazers.length;i++){
	lazers[i].show();
	lazers[i].move();
	for(var j = 0;j<invs.length;j++){
	if (lazers[i].hits(invs[j])){
		invs[j].damage();
		lazers[i].zip();
	
	  }
	}
  }
  var edge = false;
  for (var i = 0; i < invs.length; i++) {
    invs[i].show();
    invs[i].move();
    if (invs[i].x > width || invs[i].x < 0) {
      edge = true;
    }
  }
  if (edge) {
  	for (var i = 0; i < invs.length; i++){
  		invs[i].shiftDown();
  	}
  }
	for(var i = lazers.length-1;i >= 0;i--){
		if (lazers[i].toDelete) {
			lazers.splice(i, 0);
		}
	}

	}

	function keyReleased(){
		if(key != ' '){
			ship.setDir(0);
	}
}
	



 function keyPressed() {
 	if(key === ' '){
 		var lazer = new Lazer(ship.x, height)
 	lazers.push(lazer);	
 	}
 	if(keyCode === RIGHT_ARROW){
 		ship.setDir(1);
 	}else if (keyCode === LEFT_ARROW){
 		ship.setDir(-1);
 	}
 }