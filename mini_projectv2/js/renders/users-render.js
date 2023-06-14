const ul = getElement(".users-list")

const utils_url = {
    url_base: "partial/user-details.html",
    user: "userId",

    getUrlUserId(id){
        return `${this.url_base}?${this.user}=${id}`
    }
}

 function renderUsers(data) {

    const html = [...data].map(({id, name, ...rest}) => {
        return `
            <li class="users-item">
                <a href="${utils_url.getUrlUserId(id)}" class="users-item__link">
                    <span>ID: ${id}, Name: ${name}</span>
                </a>
            
            </li>
        `
    }).join(" ")

    insertContentToElement(ul, html)
}