// Добавление класса элементу
function addClass(element, className) {
    element.classList.add(className)
}
// Удаление класса элементу
function removeClass(element, className){
    element.classList.remove(className)
}

// Смена класса удаление/добавление у элемента
function toggleElement(element, selector) {
    element.classList.toggle(selector)
} 