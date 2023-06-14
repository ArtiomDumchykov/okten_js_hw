const ulComments = getElement(".comments__list")

 function renderPostComments(data) {
  


    const html = [...data].map(item => {
        const {id,  email: userEmail, name: title, body: text} = item
        return `
            <li class="comments__item">
                <h3 class="comments-item__title">Title: <span class="text-title">${title}</span></h3>
                <p class="comments__text">${text}</p>
                <span class="comments__info">ID: ${id}, Email: ${userEmail}</span>
            </li>
        `
    }).join(" ")

    /*
    
        отрисовать post-comments 
        добавить стили
    */

    insertContentToElement(ulComments, html)
}