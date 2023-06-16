const utils_theme = {
    theme: "theme",
    light: "light",
    dark: "dark",
    list: [...document.querySelectorAll("._is-dark")]
}



// Проверка текущей темы
function currentTheme() {
    const {theme, light, dark} = utils_theme
    const curTheme = isCheckLocalStorage(theme) == null ? null :getLocalStorage(theme)

    return curTheme
 
    
}  

// Проверка theme в localStorage
function checkThemeLocal() {
    const {theme, light, dark} = utils_theme

    if (!(isCheckLocalStorage(theme) ?? setLocaStorage(theme, light))) {
        // utils.theme = light
        return
    }

    const body = getElement("body")
    const themeLocalStorage =  getLocalStorage(theme);


    themeLocalStorage == light && removeClass(body, dark)

    themeLocalStorage == dark && addClass(body, dark)

}

// Смена текущей theme с изменением текущей theme в localStorage
function changeTheme() {
    const {theme, light, dark} = utils_theme

    const body = getElement("body")
    toggleElement(body, "dark")

   const curTheme = currentTheme()

   curTheme == light && setLocaStorage(theme, dark)

   curTheme == dark && setLocaStorage(theme, light)
}

