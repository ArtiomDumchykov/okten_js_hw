
// THEME
currentTheme()
checkThemeLocal()


const url_params = new URLParams(location.href)


addListener(document, "DOMContentLoaded", start())

// Start code
// POST_DETAILS
async function start() {
    try {
        const post_id = url_params.getParam("postId");
        const data = await requestServer.getPost(post_id);

        isCheckEmptyData(data) && renderPost(data)

        const btn = getElement(".comments__btn");
        addListener(btn, "click", comments)

        
    } catch (err) {
        console.log(err)
        const emptyDataElement = getElement(".empty-data")
        emptyDataError(err.message, emptyDataElement)
        
        hiddenElements(getElement(".post-content-wrap") )
        
    }
    finally {
        dotPreLoader()
    }
}


// Post COMMENTS
async function comments() {
    const ulComments = getElement(".comments__list")
    const loadDots = getElement(".data-load")
    try {
        addClass(loadDots, "load")
        
   
        const post_id = url_params.getParam("postId");
        const data = await requestServer.getCommentsPost(post_id)

        isCheckEmptyData(data) && renderPostComments(data)

        dotsLoadData(loadDots, ulComments)

    } catch (err) {
        console.log(err);
        const emptyDataElement = getElement(".empty-comments-data")

        emptyDataError(err.message, emptyDataElement)
        dotsLoadData(loadDots, ulComments)
    }
    

}