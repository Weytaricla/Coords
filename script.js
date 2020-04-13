'use strict'

function coords() {


    function getXPositionOfElement() {//Получить случайные координаты x окна браузера.

        var x_position = Math.floor(Math.random() * window.innerWidth);

        return x_position + "px";

    }



    function getYPositionOfElement() {//Получить случайные координаты y окна браузера.

        var y_position = Math.floor(Math.random() * window.innerHeight);

        return y_position + "px";

    }



    let XCoord =  getXPositionOfElement()
    let YCoord =  getYPositionOfElement()

    var div = document.createElement('div');
    let x = "x = " + XCoord
    let y = "y = " + YCoord

    div.style.left = XCoord + "px"
    div.style.top = YCoord + "px"

    div.style.width = "100px";
    div.style.height = "50px";
    div.style.padding = "5px";
    div.style.backgroundColor = "rgb(230, 138, 101)";

    div.innerHTML = x +  "<br>"  +  y;

    document.getElementById('pole').append(div);

}