const ulComments = getElement(".comments__list")

 function renderPostComments(data) {
  

    const html = [...data].map(item => {
        const {id,  email: userEmail, name: title, body: text} = item
        return `
            <li class="comments__item">
                <div class="comments-title-wrap">
                    <h3 class="comments-item__title">Title: <span class="text-title">${title}</span></h3>
                    <p class="comments__text">${text}</p>
                </div>
                <span class="comments__info">ID: ${id}, Email: ${userEmail}</span>
            </li>
        `
    }).join(" ")


    insertContentToElement(ulComments, html)
}