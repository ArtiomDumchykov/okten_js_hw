import { getElement, insertContentToElement } from "../utils/index.js"


const user_content = getElement(".user__content");

export function render(data) {
    

    const {id, name, email, phone, address, company} = {...data};


    const html = `
            <p class="item__id-text">ID: ${id}</p>
            <p class="item__name-text">Name: ${name}</p>
            <p class="item__phone-text">${phone}</p>
            <p class="item__email-text">${email}</p>
            <div class="address-wrap>
                <p class="adress__title">Adress:</p>
                <p class="address__text">
                    ${[...getObjectValues(address)].join(", ")}
                
                </p>
            </div>
            <div class="company-wrap>
                <p class="company__title">Company:</p>
                <p class="company__text">
                    ${ [...getObjectValues(company)].join(", ")}
                </p>
            </div>
        
    `

    insertContentToElement(user_content, html);
}


function* getObjectValues(obj) {
    for (const item of Object.values(obj)) {
        if (typeof item != "object") yield item

        getObjectValues(item);
    }
}