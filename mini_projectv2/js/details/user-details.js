
// THEME
currentTheme()
checkThemeLocal()

const btnTHEME = getElement('.btn__change-theme')

addListener(btnTHEME, "click", function() {
    changeTheme()
})

const url_params = new URLParams(location.href)

addListener(document, "DOMContentLoaded", start())

// Start code
// USER-DETAILS
async function start() {
    try {
        const user_id = url_params.getParam("userId");
        const data = await requestServer.getUser(user_id);
        
        isCheckEmptyData(data) && renderUser(data)

        const btn = getElement(".posts__btn");
        btn.dataset.userId = user_id;
        addListener(btn, "click", posts);

    } catch (err) {
        console.log(err);
        const emptyDataElement = getElement(".empty-data")

        emptyDataError(err.message, emptyDataElement)

        hiddenElements(getElement(".user__content"), getElement(".user__posts"))
        
    }
    finally {
        dotPreLoader()
    }

}


// User POSTS
async function posts(e) {
    const ulPosts = getElement(".user-posts__list")
    const loadDots = getElement(".data-load")
    try {
        addClass(loadDots, "load")

        const target = e.target;
        const userIdPosts = target.dataset.userId;
        const data = await requestServer.getPosts(userIdPosts);

        isCheckEmptyData(data) && renderPosts(data)

        dotsLoadData(loadDots, ulPosts)
        
    } catch (err) {
        console.log(err);

        const emptyDataElement = getElement(".empty-posts-data")

        emptyDataError(err.message, emptyDataElement)
        dotsLoadData(loadDots, ulPosts)
       
    }
    
   



}