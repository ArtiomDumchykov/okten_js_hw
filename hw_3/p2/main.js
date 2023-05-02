/*
    - Використовуючи данні з масиву, за допомоги document.write та циклу
    побудувати структуру по шаблону
    Масив:

    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

    ШАБЛОН:
    <ul>
        <li>ITEM OF ARRAY</li>
        <!--
            і тд інші об'єкти масиву
            ...
            ...
            ...
        -->
    </ul>

    замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


*/

const ul = document.querySelector(".menu__list")

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

let str = ""
listOfItems.map(item => {
    str += `<li class="item-menu">${item}</li>`
})

ul.innerHTML = str;
//--------------------------------------------------------------------------------------------------------------------------