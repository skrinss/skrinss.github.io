let Gena = false;
let Peace = false;
let Brand = false;
let Cat = false;

let First1 = document.getElementById("game-first");
let Second1 = document.getElementById("show-div-first");
let First2 = document.getElementById("game-second");
let Second2 = document.getElementById("show-div-second");
let First3 = document.getElementById("game-third");
let Second3 = document.getElementById("show-div-third");
let First4 = document.getElementById("game-fourth");
let Second4 = document.getElementById("show-div-fourth");

function ReverseGena(){
	console.log("open-first-box");
	if(Gena == false){
		Gena = true;
		First1.classList.remove("section-game-div-off");
		First1.classList.add("section-game-div-on");
		Second1.classList.add("section-game-div-show-on");
		Second1.classList.remove("section-game-div-show-off");
	} else if(Gena == true){
		Gena = false;
		First1.classList.remove("section-game-div-on");
		First1.classList.add("section-game-div-off");
		Second1.classList.add("section-game-div-show-off");
		Second1.classList.remove("section-game-div-show-on");
	}
}

function ReversePeace(){
	console.log("open-second-box");

	if(Peace == false){
		Peace = true;
		First2.classList.remove("section-game-div-off");
		First2.classList.add("section-game-div-on");
		Second2.classList.add("section-game-div-show-on");
		Second2.classList.remove("section-game-div-show-off");
	} else if(Peace == true){
		Peace = false;
		First2.classList.remove("section-game-div-on");
		First2.classList.add("section-game-div-off");
		Second2.classList.add("section-game-div-show-off");
		Second2.classList.remove("section-game-div-show-on");
	}
}

function ReverseBrand(){
	console.log("open-third-box");

	if(Brand == false){
		Brand = true;
		First3.classList.remove("section-game-div-off");
		First3.classList.add("section-game-div-on");
		Second3.classList.add("section-game-div-show-on");
		Second3.classList.remove("section-game-div-show-off");
	} else if(Brand == true){
		Brand = false;
		First3.classList.remove("section-game-div-on");
		First3.classList.add("section-game-div-off");
		Second3.classList.add("section-game-div-show-off");
		Second3.classList.remove("section-game-div-show-on");
	}
}

function ReverseCat(){
	console.log("open-fourth-box");

	if(Cat == false){
		Cat = true;
		First4.classList.remove("section-game-div-off");
		First4.classList.add("section-game-div-on");
		Second4.classList.add("section-game-div-show-on");
		Second4.classList.remove("section-game-div-show-off");
	} else if(Cat == true){
		Cat = false;
		First4.classList.remove("section-game-div-on");
		First4.classList.add("section-game-div-off");
		Second4.classList.add("section-game-div-show-off");
		Second4.classList.remove("section-game-div-show-on");
	}
}