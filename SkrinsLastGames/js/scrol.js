document.getElementById('Button_Body').addEventListener('click', scrollToElementBody);
function scrollToElementBody(e) {
	element = document.getElementById("body")
	element.scrollIntoView(true);
}

document.getElementById('Button_Games').addEventListener('click', scrollToElementGames);
function scrollToElementGames(e) {
	element = document.getElementById("section-first")
	element.scrollIntoView(true);
}

document.getElementById('Button_Discord').addEventListener('click', scrollToElementDiscord);
function scrollToElementDiscord(e) {
	element = document.getElementById("section-second")
	element.scrollIntoView(true);
}

document.getElementById('Button_Gena').addEventListener('click', scrollToElementGena);
function scrollToElementGena(e) {
	element = document.getElementById("section-first")
	element.scrollIntoView(true);
	Slide(1);
}

document.getElementById('Button_Peace').addEventListener('click', scrollToElementPeace);
function scrollToElementPeace(e) {
	element = document.getElementById("section-first")
	element.scrollIntoView(true);
	Slide(2);
}

document.getElementById('Button_Cat').addEventListener('click', scrollToElementCat);
function scrollToElementCat(e) {
	element = document.getElementById("section-first")
	element.scrollIntoView(true);
	Slide(3);
}