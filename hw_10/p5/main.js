/*

    - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
    При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача



*/

const form = document.forms.checkAge;
const inputAge = document.querySelector("#age")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const inputValue = +inputAge.value
    if (isCheckAge(inputValue)) {
        alert("Yes")
    } else {
        alert("NO")
    }
})

function isCheckAge(age) {
    return age < 18 ? false : true
}