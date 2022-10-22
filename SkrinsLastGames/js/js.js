		
/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
    text();
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1); 
    text(); 
}

function Slide(x) {
    showSlides(slideIndex = x); 
    text(); 
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
    text(); 
}

function text(){
	if(slideIndex==1){
		document.getElementsByClassName("div-name")[0].innerHTML = "Brandch";
		document.getElementsByClassName("div-info")[0].innerHTML = "Векторный гиперказуал в 2D для Android";
	} else if(slideIndex==2){
		document.getElementsByClassName("div-name")[0].innerHTML = "Gena the Run";
		document.getElementsByClassName("div-info")[0].innerHTML = "Пиксельный платформер в 2D для Android";
	} else if(slideIndex==3){
		document.getElementsByClassName("div-name")[0].innerHTML = "Peace the Da";
		document.getElementsByClassName("div-info")[0].innerHTML = "Векторный платформер в 2D для Android";
	}
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
