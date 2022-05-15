let arrTypeSite = ["Самый крутой сайт",
                  "Средний тип сайта",
                  "Сайт для нищебродов"];
var priceTypeSite = [1000,
                     500,
                     250];

let arrDesigne = ["Гламурный дизайн",
                  "Деловой дизайн",
                  "Детский дизайн"];
var priceDesigne = [250,
                     1000,
                     500];

let arrAdaptive = ["Фиксированный макет",
                  "Резиновый макет",
                  "Адаптивный макет"];
var priceAdaptive = [500,
                     250,
                     1000];

let typeSite = prompt("Какой тип сайта интересует?", "1-крутой, 2-средний, 3-нищебродский");
var t = 0;
    if(typeSite == "1") {
        console.log(arrTypeSite[0] + " = " + priceTypeSite[0]);
        arrTypeSite[t] = arrTypeSite[0];
        priceTypeSite[t] = priceTypeSite[0];
    } else if(typeSite == "2") {
        console.log(arrTypeSite[1] + " = " + priceTypeSite[1]);
        arrTypeSite[t] = arrTypeSite[1];
        priceTypeSite[t] = priceTypeSite[1];
    } else {
        console.log(arrTypeSite[2] + " = " + priceTypeSite[2]);
        arrTypeSite[t] = arrTypeSite[2];
        priceTypeSite[t] = priceTypeSite[2];
    }

let designe = prompt("Какой стиль сайта необходим?", "1-гламурный, 2-деловой, 3-детский");
var d = 0;
     if(designe == "1") {
        console.log(arrDesigne[0] + " = " + priceDesigne[0]);
         arrDesigne[d] = arrDesigne[0];
        priceDesigne[d] = priceDesigne[0];
    } else if(designe == "2") {
        console.log(arrDesigne[1] + " = " + priceDesigne[1]);
        arrDesigne[d] = arrDesigne[1];
        priceDesigne[d] = priceDesigne[1];
    } else {
        console.log(arrDesigne[2] + " = " + priceDesigne[2]);
        arrDesigne[d] = arrDesigne[2];
        priceDesigne[d] = priceDesigne[2];
    }
    
let adaptive = prompt("Какой макет сайта предпочтителен?", "1-фиксированный, 2-резиновый 3-адаптивный");
var a = 0;
    if(adaptive == "1") {
        console.log(arrAdaptive[a] + " = " + priceAdaptive[0]);
        arrAdaptive[a] = arrAdaptive[0];
        priceAdaptive[a] = priceAdaptive[0];
    } else if(adaptive == "2") {
        console.log(arrAdaptive[a] + " = " + priceAdaptive[1]);
        arrAdaptive[a] = arrAdaptive[1];
        priceAdaptive[a] = priceAdaptive[1];
    } else {
        console.log(arrAdaptive[a] + " = " + priceAdaptive[2]);
        arrAdaptive[a] = arrAdaptive[2];
        priceAdaptive[a] = priceAdaptive[2];
    }


var sum = priceTypeSite[t] + priceDesigne[d] + priceAdaptive[a];

alert("Вы выбрали " + arrTypeSite[t] + ", " + arrDesigne[d] + " и " + arrAdaptive[a] +". Общая цена: " + sum);