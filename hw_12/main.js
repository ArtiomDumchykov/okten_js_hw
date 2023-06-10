const usersUl = getElement(".users-list");


const URL_BASE = "http://jsonplaceholder.typicode.com/users";
const URL_USER_DETAILS = "index-details.html" ;



addListener(document, "DOMContentLoaded", start) 


function addListener(element, eventName, fn) {
    element.addEventListener(eventName, fn)
}


async function start() {
    const data = await getFetch(URL_BASE)
    render(data)
}



function render(data) {
    const copyData = [...data];

    const html = copyData.map(({id, name}) => {
        const URL_USER_ID = `${URL_USER_DETAILS}?id=${id}`;

        return `
            <li class="users-item">
                <a href="${URL_USER_ID}" class="users-item__link">
                    <p>ID: ${id}, Name: ${name}</p>
                </a>
            
            </li>
        `
    }).join(" ")
    
    insertContentToElement(usersUl, html)
}

function insertContentToElement(element, content) {
    element.innerHTML = content
}

function getElement(selector) {
    return document.querySelector(selector)
}

async function getFetch(url, dataMethod = "json") {
    try {
        const response = await fetch(url)
        const data = await response[dataMethod]();
        return data
        
    } catch (err) {
        console.log(err)
    }
}