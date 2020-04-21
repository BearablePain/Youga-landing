function createSlider () {

let slideIndex = 1, //Указываем параметр текущего слайда 
	slides = document.querySelectorAll('.slider-item'),
	prev = document.querySelector('.prev'),
	next = document.querySelector('.next'),
	dotsWrap = document.querySelector('.slider-dots'),
	dots = document.querySelectorAll('.dot');

// функция проверяет, скрывает, и поазывает активность
showSlides(slideIndex);
function showSlides(n) {
	// проверки для начала и конца слайда
	//если переключили на последнем слайде идем в начало
	if (n > slides.length) {
		slideIndex = 1;
	}
	//если переключили назад на первом слайде идем в конец
	if (n < 1) {
		slideIndex = slides.length;
	}
	//Скрываем слайды
	slides.forEach((item) => item.style.display = 'none');
	//делаем точки неактивными
	dots.forEach((item) => item.classList.remove('dot-active'));
	//показываем первый слайд и точку
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].classList.add('dot-active');

}
// функция для показа  слайда
function plusSlides(n) {
	// получаем новое значение и вызываем. 
	showSlides(slideIndex += n);
}
//показываем слайд по точке
function currentSlide(n) {
	showSlides(slideIndex = n);
}
//клик назад
prev.addEventListener('click', () => {
	//показ пред. слайда
	plusSlides(-1);
});
//клик вперед
next.addEventListener('click', () => {
	plusSlides(1);
});  
// показ слайда по выбранной точке
dotsWrap.addEventListener('click', (event) => {
	//цикл чтобы узнакть по какой точке кликнули
	// dots.length + 1 :

	for (let i = 0; i < dots.length + 1; i++) {
		// с помощью первой проверки проверям тыкнули ли в контейнс именно по кнопке
		// с помощью второй точки узнаем номер точки
		//dots - 1 

		if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
			//запускаем слайд для показа
			currentSlide(i);
		}
	}
});
}

module.exports = createSlider;