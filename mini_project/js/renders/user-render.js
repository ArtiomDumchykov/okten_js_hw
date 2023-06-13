import { getElement, insertContentToElement } from "../utils/index.js"


const user_content = getElement(".user__content");

export function render(data) {
    

    const {id, name, email, phone, address, company} = {...data};


    const html = `
            <div class="item__description-text">
                <p class="item__id-text text-item">ID: <span class="item-text">${id}</span></p>
                <p class="item__name-text text-item">Name: <span class="item-text">${name}</span></p>
                <p class="item__phone-text text-item">Phone: <span class="item-text">${phone}</span></p>
                <p class="item__email-text text-item">Email: <span class="item-text">${email}</span></p>
            </div>
            <div class="info">
                <div class="address-wrap">
                    <p class="adress__title">Adress:</p>
                    <p class="address__text">
                        ${[...getObjectValues(address)].join(", ")}
                    
                    </p>
                </div>
                <div class="company-wrap">
                    <p class="company__title">Company:</p>
                    <p class="company__text">
                        ${ [...getObjectValues(company)].join(", ")}
                    </p>
                </div>
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