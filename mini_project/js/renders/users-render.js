import { getElement, insertContentToElement } from "../_utils/index.js"


const ul = getElement(".users-list")

const utils_url = {
    url_base: "partial/user-details.html",
    user: "userId",

    getUrlUserId(id){
        return `${this.url_base}?${this.user}=${id}`
    }
}

export function render(data) {

    const html = [...data].map(({id, name, ...rest}) => {
        return `
            <li class="users-item">
                <a href="${utils_url.getUrlUserId(id)}" class="users-item__link">
                    <p>ID: ${id}, Name: ${name}</p>
                </a>
            
            </li>
        `
    }).join(" ")

    insertContentToElement(ul, html)
}