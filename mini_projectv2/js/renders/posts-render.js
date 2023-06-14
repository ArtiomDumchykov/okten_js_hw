const ulPosts = getElement(".user-posts__list")



const utils_url = {
    url_base: "post-details.html",
    post: "postId",

    getPostId(id){
        return `${this.url_base}?${this.post}=${id}`
    }
}

 function renderPosts(data) {
  

    // const {userId, id, title, body} = data

    const html = [...data].map(item => {
        const {userId, id, title, body} = item

        return `
            <li class="posts__item">
                <a href="${utils_url.getPostId(id)}" class="posts-item__link">
                    <span class="posts__title">${title}</span>
                </a>
            
            </li>
        `
    }).join(" ")

    insertContentToElement(ulPosts, html)
}