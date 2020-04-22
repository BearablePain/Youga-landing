function createModal() {
  let more = document.querySelector('.more'),
      //кнопка для вызова модального окна
  overlay = document.querySelector('.overlay'),
      //модальное окно
  shut = document.querySelector('.popup-close'),
      //крестик
  arrTabBtn = document.querySelectorAll('.description-btn'); //массив кнопок
  // arrTabBtn.document.push(more);
  //конструктор конопки

  class Btn {
    constructor(name) {
      this.name = name;
    } //Вызов модального окна


    open() {
      if (this.name.length == undefined) {
        //проверяем одна кнопка или нет
        this.name.addEventListener('click', () => {
          overlay.style.display = 'block'; //Принимаем блочную модель 

          this.name.classList.add('more-splash'); //Добавляем анимацию

          document.body.style.overflow = 'hidden'; //Запрещаем скролить пока не закроем окно
        });
      }

      for (let i = 0; i < this.name.length; i++) {
        //Запускаем цикл для массива кнопок
        this.name[i].addEventListener('click', () => {
          overlay.style.display = 'block';
          this.name[i].classList.add('more-splash');
          document.body.style.overflow = 'hidden';
        });
      }
    } // //закрытие модального окна


    close() {
      this.name.addEventListener('click', () => {
        overlay.style.display = 'none'; ////Убиарем классы 

        this.name.classList.remove('more-splash'); //Убираем анимацию

        document.body.style.overflow = ''; //Запрещаем скролить пока не закроем окно
      });
    }

  } // создаем кнопки 


  let openModalBtnTimer = new Btn(more),
      closerOpenModal = new Btn(shut),
      openModalBtnContentArr = new Btn(arrTabBtn); //вызываем нужные методы для кнопок

  openModalBtnTimer.open();
  openModalBtnContentArr.open();
  closerOpenModal.close();
}

module.exports = createModal;