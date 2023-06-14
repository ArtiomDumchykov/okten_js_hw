const url_params = new URLParams(location.href)


addListener(document, "DOMContentLoaded", start())

async function start() {
    try {
        const user_id = url_params.getParam("userId");
        const data = await requestServer.getUser(user_id);
        
        isCheckEmptyData(data) && renderUser(data)

        const btn = getElement(".posts__btn");
        btn.dataset.userId = user_id;
        addListener(btn, "click", posts);

    } catch (err) {
        
        const emptyDataElement = getElement(".empty-data")

        emptyDataError(err.message, emptyDataElement)

        hiddenElements(getElement(".user__content"), getElement(".user__posts"))
        
    }
    finally {
        dotPreLoader()
    }

}


async function posts(e) {
    try {
        const loadDots = getElement(".data-load")
        addClass(loadDots, "load")

        const target = e.target;
        const userIdPosts = target.dataset.userId;
        const data = await requestServer.getPosts(userIdPosts);

        isCheckEmptyData(data) && renderPosts(data)

        dotsLoadData(loadDots, getElement(".user-posts__list"))
        
    } catch (err) {
        console.log(err);

        const emptyDataElement = getElement(".empty-posts-data")

        emptyDataError(err.message, emptyDataElement)
    }
   



}