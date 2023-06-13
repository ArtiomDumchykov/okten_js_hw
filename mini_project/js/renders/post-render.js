
import { getElement, insertContentToElement } from "../utils/index.js"

const post_content = getElement(".post__content") 

export function render(data) {
    const {userId, id: postId, title, body: text} = data

    const html = `
        <div class="post-text">
            <div class="post-title-wrap">
                <h2 class="post__title">Tiltle: ${title}</h2>
                <p class="post__text">${text}</p>
            </div>
            <p class=""></p>UserId: ${userId}, PostId: ${postId}</p>
        </div>
        
    `;

    insertContentToElement(post_content, html)

}