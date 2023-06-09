/*
    Render информации поста
*/

const post_content = getElement(".post__content") 

function renderPost(data) {
    const {userId, id: postId, title, body: text} = data

    const html = `
        <div class="post-text">
            <div class="post-title-wrap">
                <h2 class="post-title">Tiltle: ${title}</h2>
                <p class="post__text">${text}</p>
            </div>
            <p class="post__user">UserId: ${userId}, PostId: ${postId}</p>
        </div>
        
    `;

    insertContentToElement(post_content, html)

}