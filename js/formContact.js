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
//Которая возвращает нам новоый промис
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