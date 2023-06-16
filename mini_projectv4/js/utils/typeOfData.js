//Получение к кому типу даных односиться переданное занчение
function typeOfFunction(val) {
    return Object.prototype.toString.call(val).slice(8,-1).toLowerCase();
}