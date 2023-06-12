import { getElement, insertContentToElement } from "../_utils/index.js"



const ulPosts = getElement(".user-posts__list")



const utils_url = {
    url_base: "post-details.html",
    post: "postId",

    getPostId(id){
        return `${this.url_base}?${this.post}=${id}`
    }
}

export function render(data) {
  

    // const {userId, id, title, body} = data

    const html = [...data].map(item => {
        const {userId, id, title, body} = item

        return `
            <li class="posts__item">
                <a href="${utils_url.getPostId(id)}">
                    <h3 class="posts__title">${title}</h3>
                </a>
            
            </li>
        `
    }).join(" ")

    insertContentToElement(ulPosts, html)
}