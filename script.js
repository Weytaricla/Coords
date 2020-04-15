'use strict'

function coords() {


    function getXPositionOfElement() {//Получить случайные координаты x окна браузера.

        var x_position = Math.floor(Math.random() * 900);

        return x_position + "px";

    }



    function getYPositionOfElement() {//Получить случайные координаты y окна браузера.

        var y_position = Math.floor(Math.random() * 500);

        return y_position + "px";

    }



    let XCoord =  getXPositionOfElement()
    let YCoord =  getYPositionOfElement()

    var element = document.createElement('div');
    let x = "x = " + XCoord
    let y = "y = " + YCoord

    element.style.width = "100px";
    element.style.height = "50px";
    element.style.padding = "5px";
    element.style.position = "relative";
    element.style.backgroundColor = "rgb(230, 138, 101)";

    element.style.left = '100px'
    element.style.top = '100px'

    element.innerHTML = x +  "<br>"  +  y;

    document.getElementById('pole').append(element);

}