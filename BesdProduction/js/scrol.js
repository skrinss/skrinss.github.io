document.getElementById('butPrice').addEventListener('click', scrollToElementPrice);
function scrollToElementPrice(e) {
	element = document.getElementById("mainTextBox")
	element.scrollIntoView(true);
}

document.getElementById('butExample').addEventListener('click', scrollToElementExample);
function scrollToElementExample(e) {
	element = document.getElementById("textSectionExample")
	element.scrollIntoView(true);
}

document.getElementById('buttonFirstBuy').addEventListener('click', scrollToElementСommunication);
function scrollToElementСommunication(e) {
	element = document.getElementById("communication")
	element.scrollIntoView(true);
}

document.getElementById('buttonWeb').addEventListener('click', scrollToElementExampleWeb);
function scrollToElementExampleWeb(e) {
	element = document.getElementById("sectionExampleWeb")
	element.scrollIntoView(true);
}
