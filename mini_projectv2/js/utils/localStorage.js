


function isCheckLocalStorage(key) {
    return getLocalStorage(key) ?? null
}


function getLocalStorage(key) {
    return transformToJSObj(localStorage.getItem(key))
}

function setLocaStorage(key, data) {
    localStorage.setItem(key, transformToJSON(data))
}

function transformToJSON(data) {
    try {
        return JSON.stringify(data)
    } catch (err) {
        console.log(err)
        return 
    }
}
function transformToJSObj(data) {
    try {
        return JSON.parse(data)
    } catch (err) {
        console.log(err)
        return 
    }
}