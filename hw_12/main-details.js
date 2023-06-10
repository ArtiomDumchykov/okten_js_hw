const userUl = getElement(".user-list");

const URL_BASE = "http://jsonplaceholder.typicode.com/users";

const userID = getParam("id")
const URL_USER_ID = `${URL_BASE}/${userID}`


addListener(document, "DOMContentLoaded", start) 


async function start() {

    const data = await getFetch(URL_USER_ID )
    render(data)
}



function getParam(nameParms) {
    return getUrlParams().get(nameParms) || ""
}


function getUrlParams() {
    return new URL(location.href).searchParams
}



function render(data) {
    console.log(data)
    const {id, name, email, phone, address, company} = {...data}

    const html = `
        <li class="user-item">
            <p class="item__id-text">ID: ${id}</p>
            <p class="item__name-text">Name: ${name}</p>
            <p class="item__phone-text">${phone}</p>
            <p class="item__email-text">${email}</p>
            <div class="address-wrap>
                <p class="adress">Adress:</p>
                <ul class="item__address">
                    ${[...getObjectValues(address)].join(", ")}
                
                </ul>
            </div>
            <div class="company-wrap>
                <p class="adress">Company:</p>
                <ul class="item__company">
                    ${ [...getObjectValues(company)].join(", ")}
                </ul>
            </div>
        </li>
    `

    
    insertContentToElement(userUl, html)
}


function* getObjectValues(obj) {
    for (const item of Object.values(obj)) {
        if (typeof item != "object") yield item

        getObjectValues(item)
    }
}

function addListener(element, eventName, fn) {
    element.addEventListener(eventName, fn)
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