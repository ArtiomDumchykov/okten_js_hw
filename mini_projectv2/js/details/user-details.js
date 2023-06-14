const url_params = new URLParams(location.href)


addListener(document, "DOMContentLoaded", start())

async function start() {
    try {
        const user_id = url_params.getParam("userId");
        const data = await requestServer.getUser(user_id);
        renderUser(data);

        const btn = getElement(".posts__btn");
        btn.dataset.userId = user_id;
        addListener(btn, "click", posts);

    } catch (err) {
        console.log(err);
    }

}


async function posts(e) {
    try {
        const target = e.target;
        const userIdPosts = target.dataset.userId;
        const data = await requestServer.getPosts(userIdPosts);
        renderPosts(data);
        
    } catch (err) {
        console.log(err);
    }



}