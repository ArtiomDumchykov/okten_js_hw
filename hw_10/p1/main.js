/*
    Стоврити форму з трьома полями для name,sruname,age та кнопкою. 
    При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. 
    Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

*/


const form = document.info
const submitBtn = document.querySelector("button[type='submit']")
const infoWrap = document.querySelector(".info-wrap");

form.addEventListener("submit", function(e) {
    e.preventDefault()

    // вариант 1
    const formData = new FormData(form)
    // console.log(formData);
    // console.log(formData.get("firstName"));
    // console.log(formData.get("lastName"));
    // console.log(formData.get("age"));

    const [firstName, lastName, age] = [...formData.values()]
  
    // console.log(firstName)
    // console.log(lastName)
    // console.log(age)

    const infoObj = {
        firstName,
        lastName,
        age     
    }
    // вариант 1

    // вариант 2
    // const infoObj = {
    //     firstName:  getValueInput(form.firstName),
    //     lastName:   getValueInput(form.lastName),
    //     age:        getValueInput(form.age)
    // }
    // вариант 2

    const strTemplateHTML = render(infoObj);
    insertHTML(infoWrap, strTemplateHTML);
    form.reset()
})


function render({firstName = "", lastName = "", age = ""}) {
    return `
        <p class="fullName">
            <span class="fisrtName">First name: ${firstName}</span>,
            <span class="lastName">Last name: ${lastName}</span>
        </p>
        <p class="age">Age: ${age}</p>
    `
}

function insertHTML(element, strTemplateHTML) {
    element.innerHTML = strTemplateHTML
}

function getValueInput(element) {
    return element.value
}