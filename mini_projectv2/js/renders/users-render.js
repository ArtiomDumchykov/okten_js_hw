/*
    Render пользвоателей
*/

const ul = getElement(".users-list")

const utils_url = {
    url_base: "user-details.html",
    user: "userId",

    getUrlUserId(id){
        return `${this.url_base}?${this.user}=${id}`
    }
}

 function renderUsers(data) {

    const html = [...data].map(({id, name, ...rest}) => {
        return `
            <li class="users-item _is-dark">
                <a href="${utils_url.getUrlUserId(id)}" class="users-item__link _is-dark">
                    <span>ID: ${id}, Name: ${name}</span>
                </a>
            
            </li>
        `
    }).join(" ")

    insertContentToElement(ul, html)
}