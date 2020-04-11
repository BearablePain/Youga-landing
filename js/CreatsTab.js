//Ждем загрузку все элементов на странице и переводим в строгий режим 
//Ждать загрузку можно множеством способов(например написать defer)
window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  //Получаем жлементы
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
  info.addEventListener('click', function (event) {
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
});          