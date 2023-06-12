
import { getElement, insertContentToElement } from "../utils/index.js"

const post_content = getElement(".post__content") 

export function render(data) {
    const {userId, id: postId, title, body: text} = data

    const html = `
        <div class="post-text">
            <div class="post-title-wrap">
                <h2 class="post__title">${title}</h2>
                <p class=""></p>UserId: ${userId}, PostId: ${postId}</p>
            </div>
            <p class="post__text">${text}</p>
        </div>
        <div class="post__comments">
            <h2 class"post-comments__title">Comments</h2>
            <div class="post-comments-wrap">
                <ul class="comments__list">
                </ul>
            </div>
        </div>
    `;

    insertContentToElement(post_content, html)

}