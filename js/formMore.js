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
    formData.forEach((value, key)=> {
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