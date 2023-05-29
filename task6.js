var options = ['answer1.jpg', 'answer2.jpg', 'answer3.jpg', 'answer4.jpg', 'answer5.jpg']; // Массив изображений во втором ряду
    var selectedOption = null; // Переменная для хранения выбранной опции
    

    function shuffle(array) {
      // Функция для перемешивания массива (алгоритм Фишера-Йейтса)
      var currentIndex = array.length, temporaryValue, randomIndex;
  
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
  
      return array;
    }
  
    function renderOptions() {
      // Перемешивание и отображение изображений во втором ряду
      var shuffledOptions = shuffle(options);
      for (var i = 0; i < shuffledOptions.length; i++) {
        var optionElement = document.getElementById('option' + (i + 1));
        optionElement.innerHTML = '<img src="' + shuffledOptions[i] + '">';
      }
    }
  
    function selectOption(option) {
        // Проверка, была ли выбрана уже та же самая опция
        if (selectedOption === option) {
          // Сброс выбранной опции
          selectedOption = null;
      
          // Сброс изображения в первом ряду
          var questionMarkElement = document.getElementById('question-mark');
          questionMarkElement.setAttribute('src', 'image5.jpg');
      
          // Сброс значения результата
          var resultElement = document.getElementById('result');
          resultElement.innerHTML = null;
        } else {
          // Обновление выбранной опции
          selectedOption = option;
      
          // Вывод номера выбранной опции
          var selectedOptionElement = document.getElementById('selected-option');
          selectedOptionElement.innerHTML = 'Выбрана опция: ' + option;
      
          // Проверка выбранного ответа
          var resultElement = document.getElementById('result');
          var result = (options[selectedOption - 1] === 'answer5.jpg') ? 1 : 2;
          resultElement.innerHTML = 'Результат: ' + result;
      
          // Замена изображения в первом ряду
          var questionMarkElement = document.getElementById('question-mark');
          questionMarkElement.setAttribute('src', options[selectedOption - 1]);
        }
      }
  
    // Первоначальная отрисовка изображений во втором ряду
    renderOptions();