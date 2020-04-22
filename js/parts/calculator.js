function createCalculator() {
  let personsInput = document.querySelectorAll('.counter-block-input')[0],
      //инпут количества людей
  restDaysInput = document.querySelectorAll('.counter-block-input')[1],
      //инпут количества дней
  place = document.getElementById('select'),
      // селект по выбору базы 
  totalValue = document.getElementById('total'),
      // общее количество денег
  //устанавливаем начальное значение: на нули
  personsSum = 0,
      daysSum = 0,
      total = 0; //пишем в браузером начальное значение 0

  totalValue.innerHTML = 0; //делаем обработчие события на инпут количества людей

  personsInput.addEventListener('input', function () {
    //персонс ссум будет ровна тому что ввели в инпут
    personsSum = +this.value; //здесь формула мб разной возьмем к примеру такую
    //тотал будет равени количесту людей + количство дней умноженное на 4000

    total = (daysSum + personsSum) * 4000; //создаем условия если поле дней не введено у нас оставался нолик в тотале

    if (restDaysInput.value == '' || personsInput.value == '') {
      totalValue.innerHTML = 'Заполните поля'; //иначе записываем результат
    } else {
      totalValue.innerHTML = total;
    }
  }); //делаем обработчик на количество дней ( тоже самое что и в верхгнем примере
  // меняем только переменные на обратные)

  restDaysInput.addEventListener('input', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (personsInput.value == '' || restDaysInput.value == '') {
      totalValue.innerHTML = 'Заполните поля';
    } else {
      totalValue.innerHTML = total;
    }
  }); //вешаем обработчик на выбор базы
  //два варианта решения с делегированием и без

  place.addEventListener('change', e => {
    // this.total = 0;
    //пишем условие на проверку заполнено ли у нас поле
    if (restDaysInput.value == '' || personsInput.value == '') {
      totalValue.innerHTML = 'Заполните поля';
    } //
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