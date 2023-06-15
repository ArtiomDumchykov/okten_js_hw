const utils_theme = {
    theme: "theme",
    light: "light",
    dark: "dark",
    list: [...document.querySelectorAll("._is-dark")]
}




function currentTheme() {
    const {theme, light, dark} = utils_theme
    const curTheme = isCheckLocalStorage(theme) == null ? null :getLocalStorage(theme)
    const body = getElement("body")
    
    return curTheme
 
    
}  


function checkThemeLocal() {
    const {theme, light, dark} = utils_theme

    if (!(isCheckLocalStorage(theme) ?? setLocaStorage(theme, light))) {
        utils.theme = light
        return
    }
}


function changeTheme() {
    const {theme, light, dark} = utils_theme

    const body = getElement("body")
   toggleElement(body, "dark")

   
   const curTheme = currentTheme()

   switch(curTheme) {
       case light:

           setLocaStorage(theme, dark)
           break;
       case dark:

           setLocaStorage(theme, light)
           break;
       default:
           setLocaStorage(theme, light)
           break;
   }

}

function toggleElement(element, selector) {
    element.classList.toggle(selector)
} 