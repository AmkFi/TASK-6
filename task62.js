
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


(function () {
    if(window.setupDone === true) {
        return;
    }

    defineCSS();

    window.setupDone = true;
})();
