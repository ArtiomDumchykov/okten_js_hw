const url_params = new URLParams(location.href)


addListener(document, "DOMContentLoaded", start())

async function start() {
    try {
        const post_id = url_params.getParam("postId");
        const data = await requestServer.getPost(post_id);
        renderPost(data);

        const btn = getElement(".comments__btn");
        addListener(btn, "click", comments)

        // comments()
    } catch (err) {
        console.log(err)
    }
    finally {
        dotPreLoader()
    }
}


async function comments() {
    try {
        // const ulComments = getElement(".comments__list")
        const post_id = url_params.getParam("postId");
        const data = await requestServer.getCommentsPost(post_id)
        renderPostComments(data)
    } catch (error) {
        
    }

}