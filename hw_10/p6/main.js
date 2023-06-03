/*

    *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
    При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
    (Додатковачастина для завдання)


*/

const table = document.querySelector(".table");
const form = document.forms.createTable;



form.addEventListener("submit", function(e) {
    e.preventDefault()
    const [row, column, content] =  [...new FormData(form).values()]

    // можно улучшить
    const data = {
        row: +row != 0 ? +row : 1,
        column: +column != 0 ? +column: 1,
        content: content != '' ? content : "text"
    }

    render(data)
})

function render({row, column, content}) {

    let htmlRow = ''
    for (let i = 0; i < row; i++) {
        let htmlColumn = ''

        for (let j = 0; j < column; j++) {
            htmlColumn += createColumn(content)
        }

        htmlRow += createRow(htmlColumn)
    }

    table.innerHTML = htmlRow;
    form.reset()
}


function createRow(columnsHTML) {
    return `<tr>${columnsHTML}<tr>`
}

function createColumn(content) {
    return `<td>${content}</td>`
}