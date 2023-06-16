/*
    Проверка массива/обьекта на пустоту
    
    вызывать ошибку при пустоте массива/обеькта
*/
function isCheckEmptyData(data) {
    if (Object.values(data).length) {
        return true
    }

    throw new Error("empty data")

}