/*

    - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
    Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

*/




//--------------------------------------------------------------------------------------------------------------------------

// Если через замыкание код придется педелать, добавить доп логику
// инициалзация установка значений/переменных, так как курс валют меняеться и т.п.
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    const exchangeRate = currencyValues.find(currency => currency.currency === exchangeCurrency).value;
    
    const sumExchanged = sumUAH / exchangeRate;
    
    
    const roundedSum = Math.round(sumExchanged * 100) / 100;
    
    return roundedSum;
}
  

const sumUAH = 10000;
const currencyValues = [{currency:'USD',value:40},{currency:'EUR',value:42}];
const exchangeCurrency = 'USD';

const sumExchanged = exchange(sumUAH, currencyValues, exchangeCurrency);
console.log(sumExchanged); 
   

//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------