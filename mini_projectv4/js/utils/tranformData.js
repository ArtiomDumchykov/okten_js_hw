// Преобразовать данные из JSON в JS object
function transformToJSON(data) {
    try {
        return JSON.stringify(data)
    } catch (err) {
        console.log(err)
        return 
    }
}



// Преобразовать данные из JSON в JS object
function transformToJSObj(data) {
    try {
        return JSON.parse(data)
    } catch (err) {
        console.log(err)
        return 
    }
}