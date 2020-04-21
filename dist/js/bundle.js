/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function (){
  "use strict";

let createCalculator = __webpack_require__(/*! ./parts/calculator.js */ "./js/parts/calculator.js"),
    createTabs = __webpack_require__(/*! ./parts/createTab */ "./js/parts/createTab.js"),
    sendFormContact = __webpack_require__(/*! ./parts/formContact */ "./js/parts/formContact.js"),
    sendFormMore = __webpack_require__(/*! ./parts/formMore */ "./js/parts/formMore.js"),
    createModal = __webpack_require__(/*! ./parts/modal */ "./js/parts/modal.js"),
    createSlider = __webpack_require__(/*! ./parts/slider */ "./js/parts/slider.js"),
    createTimer = __webpack_require__(/*! ./parts/timer */ "./js/parts/timer.js");

createCalculator();
createTabs();
sendFormContact();
sendFormMore();
createModal();
createSlider();
createTimer();

});

/***/ }),

/***/ "./js/parts/calculator.js":
/*!********************************!*\
  !*** ./js/parts/calculator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createCalculator() {

    let personsInput = document.querySelectorAll('.counter-block-input')[0], //инпут количества людей
        restDaysInput = document.querySelectorAll('.counter-block-input')[1], //инпут количества дней
        place = document.getElementById('select'), // селект по выбору базы 
        totalValue = document.getElementById('total'), // общее количество денег

        //устанавливаем начальное значение: на нули

        personsSum = 0,
        daysSum = 0,
        total = 0;

    //пишем в браузером начальное значение 0

    totalValue.innerHTML = 0;

    //делаем обработчие события на инпут количества людей

    personsInput.addEventListener('input', function () {

        //персонс ссум будет ровна тому что ввели в инпут

        personsSum = +this.value;

        //здесь формула мб разной возьмем к примеру такую
        //тотал будет равени количесту людей + количство дней умноженное на 4000

        total = (daysSum + personsSum) * 4000;

        //создаем условия если поле дней не введено у нас оставался нолик в тотале

        if (restDaysInput.value == '' || personsInput.value == '') {
            totalValue.innerHTML = 'Заполните поля';

            //иначе записываем результат

        } else {
            totalValue.innerHTML = total;
        }
    });

    //делаем обработчик на количество дней ( тоже самое что и в верхгнем примере
    // меняем только переменные на обратные)

    restDaysInput.addEventListener('input', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;
        if (personsInput.value == '' || restDaysInput.value == '') {
            totalValue.innerHTML = 'Заполните поля';
        } else {
            totalValue.innerHTML = total;
        }
    });
    //вешаем обработчик на выбор базы
    //два варианта решения с делегированием и без

    place.addEventListener('change', (e) => {
        // this.total = 0;
        //пишем условие на проверку заполнено ли у нас поле
        if (restDaysInput.value == '' || personsInput.value == '') {
            totalValue.innerHTML = 'Заполните поля';
        }
        //
        else {
            //1
            // this.options - обращаемся к элементу оптион на которое мы воздействуем сейчас
            // this.selectedIndex - обращаемся к тому елементу который у нас был выбран
            // totalValue.innerHTML = total * this.options[this.selectedIndex].value;
            // 2
            //   e.target.value - смотри что выбрали и умнажаем на value выбранного
            totalValue.innerHTML = total * e.target.value;
        }
    });
}

module.exports = createCalculator;

/***/ }),

/***/ "./js/parts/createTab.js":
/*!*******************************!*\
  !*** ./js/parts/createTab.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createTabs() {
  //Ждем загрузку все элементов на странице и переводим в строгий режим 
  //Ждать загрузку можно множеством способов(например написать defer)


    //Получаем элементы
    let tab = document.querySelectorAll('.info-header-tab'), //берем все элемеенты менюТаба
      info = document.querySelector('.info-header'), //получаем родителя меню-табов
      tabContent = document.querySelectorAll('.info-tabcontent'); //получаем табы который будем показывать
    //скрываем все табконтенты при запуске, кроме первого
    function hideTabContent(a) {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show'); //Удаляем класс который показывал элементы
        tabContent[i].classList.add('hide'); //Приваиваем класс который прячет элементы
      }
    }

    hideTabContent(1);
    // показываем нужный табконтент
    // b = Наш меню-таб
    function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) { //Проверяем действительно ли наш элемент скрыт
        tabContent[b].classList.remove('hide'); //
        tabContent[b].classList.add('show');
      }
    }

    //создаем  обработчик события
    info.addEventListener('click', (event) => {
      let target = event.target; //Для удобства создаю переменню для таргета
      if (target && target.classList.contains('info-header-tab')) { //делегируем событие
        // определяем  что наш меню-таб свзян с табконтентом через цикл
        for (let i = 0; i < tab.length; i++) {
          if (target == tab[i]) { // сравниваем кликнуты менютаб и который нужно показать
            hideTabContent(0); //скрываем все табы
            showTabContent(i); //показываем нужный
            break; //остановОчка
          }
        }
      }
    });

}

module.exports =  createTabs;

/***/ }),

/***/ "./js/parts/formContact.js":
/*!*********************************!*\
  !*** ./js/parts/formContact.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

	function formContact() {
		let messageContact = {
			loading: 'Загрузка...',
			sucess: 'Заявка принята. Скоро свяжемся',
			error: 'Ой. Что-то пошло не так'
		};

		let contactForm = document.getElementById('form'),
			inputContact = contactForm.getElementsByTagName('input');

		let statusMessageContact = document.createElement('div');
		statusMessageContact.classList.add('status');
		//Создаем функцию дял отправки форму 
		function sendForm(elem) {
			elem.addEventListener('submit', (event) => {
				event.preventDefault();
				elem.appendChild(statusMessageContact);
				let contactFormData = new FormData(elem);
				//внутри создаем функци.
				function postData(data) {
					//Которая возвращает нам  промис
					return new Promise((resolve, reject) => {

						let requestContact = new XMLHttpRequest();

						requestContact.open('POST', 'server.php');

						requestContact.setRequestHeader('Content-type', 'application/json', 'charset-utf-8');
						//преобразуем в JSON
						let obj = {};
						data.forEach((value, key) => obj[key] = value);

						let jsonContact = JSON.stringify(obj);

						requestContact.onreadystatechange = () => {

							if (requestContact.readyState < 4) {
								resolve();
							} else if (requestContact.readyState == 4 &&
								requestContact.status == 200) {
								resolve();
							} else {
								reject();
							}

						};
						requestContact.send(jsonContact);

					});
				} //End postdata


				function clearInput() {
					for (let i = 0; i < inputContact.length; i++) {
						inputContact[i].value = '';
					}
				}



				postData(contactFormData)
					.then(() => statusMessageContact.innerHTML = messageContact.loading)
					.then(() => statusMessageContact.innerHTML = messageContact.sucess)
					.catch(() => statusMessageContact.innerHTML = messageContact.error)
					.then(clearInput);
			});
		}

		sendForm(contactForm);
	}

	module.exports = formContact;



	//Вариант без промисов

	// let response =  fetch('server.php', {
	// 	method: 'POST',
	// 	body: new FormData(contactForm),
	// 	headers: {
	// 		'Content-type': 'application/json;charset-utf-8'
	// 	}


	// contactForm.addEventListener('submit', (event) => {
	// 	event.preventDefault();

	// 	contactForm.appendChild(statusMessageContact);

	// 	let requestContact = new XMLHttpRequest();
	// 	requestContact.open('POST', 'server.php');
	// 	requestContact.setRequestHeader('Content-type', 'application/json', 'charset-utf-8');
	// 	let contactFormData = new FormData(contactForm);
	// 	let obj = {};
	// 	contactFormData.forEach((value, key) => obj[key] = value);
	// 	let jsonContact = JSON.stringify(obj);
	// 	requestContact.send(jsonContact);

	// 	requestContact.addEventListener('readystatechange', () => {
	// 		if (requestContact.readyState < 4) {
	// 			statusMessageContact.innerHTML = messageContact.loading;
	// 		} else if (requestContact.readyState == 4 && requestContact.status == 200) {
	// 			statusMessageContact.innerHTML = messageContact.sucess;

	// 		} else {
	// 			statusMessageContact.innerHTML = messageContact.error;
	// 		}

	// 	});

	// 	for (let i = 0; i < inputContact.length; i++) {
	// 		inputContact[i].value = '';
	// 	}
	// });

/***/ }),

/***/ "./js/parts/formMore.js":
/*!******************************!*\
  !*** ./js/parts/formMore.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function formMore() {
	//Создаем объект с различными состояниями нашего запроса
	let massage = {
		loading: 'Загрузка..',
		sucess: 'Спасибо! Скоро свяжемся',
		failure: 'Что-то пошло не так'
	};
	//Получаем жлементы формы для работы с ними
	let form = document.querySelector('.main-form'),
		input = form.getElementsByTagName('input'),
		//Создаем элемент для вывода сообщения стутауса отправки формы
		statusMessage = document.createElement('div');
	statusMessage.classList.add('status');
	//Создаем обработчик на форму 
	// (событик submit будет происходить тогда когда наша форма отправляется)
	form.addEventListener('submit', (event) => {

		//Отменяем стандартное поведение браузкра
		//для того чтобы страница не перезагружалась
		event.preventDefault();
		//оповещаем пользователя о статусе
		form.appendChild(statusMessage);
		//создаем объект(конструктор) для запросов
		let request = new XMLHttpRequest();
		//cсоздаем мктод для настройки нашего AJAX запроса 
		// может прнимать пять аргументов 
		// (1 = метод. обычно GET - получаем, POST отправляем,
		//   2 = куда обращаемся
		//   3 = отвечает за ассинхронность. по умолчанию стоит тру
		//   4 логин
		//   5 пароль)
		request.open('POST', 'server.php'); //отправляем тело
		//Натсраиваем заголовки HTTP запроса
		//указываем какиой контент у нас будет (будет в JSONформате)
		request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
		//получаем данные которые ввел пользователь
		//  для того чтобы правильно отправлять данные на сервер
		//  необходимо чтобы в инпутах стояли параметры нэйм он будет ключом в запросе
		//создаем и помещаем в конструктор все что заполнил пользователь
		let formData = new FormData(form);
		//проебразовываем в JSONфайл
		//Создаем промежуточный объект
		let obj = {};
		// записываем наши ключи и значение полученные от пользователя в объект
		formData.forEach((value, key) => {
			obj[key] = value;
		});
		//метод стрингифлай превращает обычные объекты в JSON формат
		//
		let json = JSON.stringify(obj);

		//открываем(отправляем на сервер) наш запрос(те данные что ввел пользователь)
		request.send(json); //*чтобы провермить что отправили можно посмотреть в консоле нетворк
		//прописывает обработчик с событием readystatechange чтобы клиент видел что происходит
		//событие изменение стутуса нашего запроса
		request.addEventListener('readystatechange', () => {
			// прописываем условия для отслеживания нашего запроса
			//readeState < 4 значит что запрос еще не отправился
			if (request.readyState < 4) {
				statusMessage.innerHTML = massage.loading;
			}
			//request 4 значит отправилось(можно было бы вставить прогрессбар)
			else if (request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = massage.sucess;
			}
			//если запрос был неудачен
			else {
				statusMessage.innerHTML = massage.failure;
			}

			input[0].value = ''; //сбрасываем инпут. если их несколько сделать через цикл
		});

	});
}

module.exports = formMore;

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createModal() {

	let more = document.querySelector('.more'), //кнопка для вызова модального окна
		overlay = document.querySelector('.overlay'), //модальное окно
		shut = document.querySelector('.popup-close'), //крестик
		arrTabBtn = document.querySelectorAll('.description-btn'); //массив кнопок


	// arrTabBtn.document.push(more);
	//конструктор конопки

	class Btn {
		constructor(name) {
			this.name = name;
		}

		//Вызов модального окна

		open() {
			if (this.name.length == undefined) { //проверяем одна кнопка или нет
				this.name.addEventListener('click', () => {
					overlay.style.display = 'block'; //Принимаем блочную модель 
					this.name.classList.add('more-splash'); //Добавляем анимацию
					document.body.style.overflow = 'hidden'; //Запрещаем скролить пока не закроем окно
				});
			}

			for (let i = 0; i < this.name.length; i++) { //Запускаем цикл для массива кнопок
				this.name[i].addEventListener('click', () => {
					overlay.style.display = 'block';
					this.name[i].classList.add('more-splash');
					document.body.style.overflow = 'hidden';
				});
			}
		}

		// //закрытие модального окна

		close() {
			this.name.addEventListener('click', () => {
				overlay.style.display = 'none'; ////Убиарем классы 
				this.name.classList.remove('more-splash'); //Убираем анимацию
				document.body.style.overflow = ''; //Запрещаем скролить пока не закроем окно
			});
		}
	}

	// создаем кнопки 

	let openModalBtnTimer = new Btn(more),
		closerOpenModal = new Btn(shut),
		openModalBtnContentArr = new Btn(arrTabBtn);

	//вызываем нужные методы для кнопок

	openModalBtnTimer.open();
	openModalBtnContentArr.open();
	closerOpenModal.close();
}

module.exports = createModal;

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createTimer () {

let deadline = '2020-04-22'; //Указываем конечное время нашего таймера

//Узнать промежуток времени между настоящим временем и дедлайном и парсим дату
function getTimeRemaining(endTime) { //В параметры передаем дедлайн
	//Узнаем разницу и парсим в дату
	//(вторая дата это настоящий момент времени)
	let t = Date.parse(endTime) - Date.parse(new Date()), //получаем кол-во милисекунд;
		//Чтобы получить секунды
		//Нужно получить остаток 
		//(вычленяем количество минут и берем остаток, тоесть наши секунды)
		seconds = Math.floor((t / 1000) % 60),
		minutes = Math.floor((t / 1000 / 60) % 60), //Тоже самое но получаем минуты
		hours = Math.floor((t / (1000 * 60 * 60) % 24)), //получаем часы
		// hours = Math.floor((t/1000/60/60) ), получаем часы
		days = Math.floor((t / (1000 * 60 * 60 * 24))); //дни
	//Возвращаем объект из таймера, и парисрованной даты настоящего времени
	return {
		'total': t,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds,
		'days': days,
	};

}
//Взтавляем значение в нашу верстку и запускаем таймер
//Функция принимает два параметра 
//id таймера в верстке и наш дедлайн

function setClock(id, endTime) {
	let timer = document.getElementById(id), //получаем наш таймер
		hours = timer.querySelector('.hours'), //часы из верстки
		minutes = timer.querySelector('.minutes'), //минуты
		seconds = timer.querySelector('.seconds'), //секунды
		days = timer.querySelector('.days');
	//делаем таймер динамичным с помощью сетинтервала
	let timeInterval = setInterval(updateClock, 1000);
	//Записываем значения
	//Парсим дату и записываем значение

	function updateClock() {
		//каждый раз как вызывается эта функция мы 
		//будем получать изменения каждую секунду
		//и получать обновленное время
		let t = getTimeRemaining(endTime); //получаем объет с разницей по времени
		hours.textContent = t.hours; //получаем часы
		minutes.textContent = t.minutes; //минуты
		seconds.textContent = t.seconds; //секунды
		days.textContent = t.days;
		//Добавляем ноль, когда секунд,минут,часов меньше дясяти
		if (t.seconds < 10) {
			seconds.textContent = '0' + t.seconds;
		}
		if (t.minutes < 10) {
			minutes.textContent = '0' + t.minutes;
		}
		if (t.hours < 10) {
			hours.textContent = '0' + t.hours;
		}
		if (t.total <= 0) { //останавливаем интервал по завершению
			clearInterval(timeInterval);
			hours.textContent = '00';
			minutes.textContent = '00';
			seconds.textContent = '00';
			days.textContent = '0';
		}
	}
}

setClock('timer', deadline);
}

module.exports = createTimer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map