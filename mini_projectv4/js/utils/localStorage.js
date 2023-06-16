

// Проверка в LocalStorage ключа (key)
function isCheckLocalStorage(key) {
    return getLocalStorage(key) ?? null
}

// Получение data из localStorage по ключу key
function getLocalStorage(key) {
    return transformToJSObj(localStorage.getItem(key))
}

// Добавление в localStorage data по ключу key
function setLocaStorage(key, data) {
    localStorage.setItem(key, transformToJSON(data))
}


