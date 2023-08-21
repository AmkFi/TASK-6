function defineCSS() {
  let style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `

  .table {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }


.image-container img {
  max-width: 100%;
  max-height: 100%;
 }



.row1 {
  margin: 50px; /* добавляем отступы вокруг контейнера */
  display: flex; /* используем flex-контейнер для размещения таблиц */
  justify-content: center; /* выравниваем таблицы по центру */
  align-items: center; /* выравниваем таблицы по вертикали */
  border: 2px solid black; /* создаем границу из черной линии толщиной 2 пикселя */
  padding: 10px; 
  border-radius: 20px;
  background-color: #fd3e0462;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.2);

}

.row1 .image-container {
    width: 130px;
    height: 130px;
    border: 3px solid #000;
    display: inline-block;
    margin: 5px;

  }

.row2 {
    margin: 20px; /* добавляем отступы вокруг контейнера */
    display: flex; /* используем flex-контейнер для размещения таблиц */
    justify-content: center; /* выравниваем таблицы по центру */
    align-items: center; /* выравниваем таблицы по вертикали */
    border: 2px solid black; /* создаем границу из черной линии толщиной 2 пикселя */
    padding: 10px; 
    border-radius: 20px;
    position: relative;
    background-color: #51ffc57c;
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.2);

  }

  .row2 .image-container {
    width: 120px;
    height: 120px;
    border: 2px solid #000;
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .row2 .image-container:hover {
    transform: scale(1.2);
  }

  .label {
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
    text-align: center;
    padding: 5px 10px;
    margin: 0 auto;
    font-family: "Comic Sans MS", cursive;
    font-size: 32px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }
  `
  document.getElementsByTagName('head')[0].appendChild(style);
}

var scriptPath = document.currentScript.src; // Получить путь к текущему скрипту
var newPath = scriptPath.substring(0, scriptPath.lastIndexOf('/') + 1);


// Изначальное значение basePath

function row1Images() {
  var images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
  ];

  for (var i = 0; i < images.length; i++) {
    var imageElement = document.getElementById('image' + (i + 1));
    imageElement.src = newPath + images[i];
  }
}

    var selectedOption = null; // Переменная для хранения выбранной опции
    var options = [ 'answer1.jpg', 'answer2.jpg', 'answer3.jpg', 'answer4.jpg', 'answer5.jpg']; // Массив изображений во втором ряду
    
    

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
  
    function renderAnswers() {
      // Перемешивание и отображение изображений во втором ряду
      var shuffledOptions = shuffle(options);

      for (var i = 0; i < shuffledOptions.length; i++) {
        var optionElement = document.getElementById('option' + (i + 1));
        optionElement.innerHTML = '<img src="' + newPath + shuffledOptions[i] + '">';
      }
    }
  
    function selectOption(option) {

      var resultElement = document.getElementById('result');

        // Проверка, была ли выбрана уже та же самая опция
        if (selectedOption === option) {

          // Сброс выбранной опции
          selectedOption = null;
      
          // Сброс изображения в первом ряду
          var questionMarkElement = document.getElementById('image5');
          questionMarkElement.setAttribute('src', newPath +'image5.jpg');

          // Сброс значения результата
          resultElement.innerHTML = null;

        } else {

          // Обновление выбранной опции
          selectedOption = option;
      
          // Вывод номера выбранной опции
          var selectedOptionElement = document.getElementById('selected-option');
          selectedOptionElement.innerHTML = 'Выбрана опция: ' + option;
      
          // Получение имени файла выбранной опции
          var selectedOptionFileName = options[selectedOption - 1].split('/').pop();

          // Проверка выбранного ответа
           var result = (selectedOptionFileName === 'answer5.jpg') ? 1 : 2;
           resultElement.innerHTML = 'Результат: ' + result;
      
          // Замена изображения в первом ряду
          var questionMarkElement = document.getElementById('image5');
          questionMarkElement.setAttribute('src', newPath + options[selectedOption - 1]);
        }
      }
  


(function () {
    if(window.setupDone === true) {
        return;
    }

    defineCSS();
    row1Images();
    renderAnswers();
    window.setupDone = true;
})();

window.onload=function(){
  result=getAnswerInput('ans1');
}
