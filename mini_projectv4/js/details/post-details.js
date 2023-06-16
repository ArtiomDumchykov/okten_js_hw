
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
// POST_DETAILS
async function start() {
    try {
        const post_id = url_params.getParam("postId");
        const data = await requestServer
                            .getPost(post_id)
                            .catch(() => {
                                throw new Error("404")
                            })

        isCheckEmptyData(data) && renderPost(data)

        const btn = getElement(".comments__btn");
        addListener(btn, "click", comments)

        
    } catch (err) {
        console.log(err)
        const emptyDataElement = getElement(".empty-data")
        
        const message = err.message

        errorStrategies[message]()

        if (message == "404") {
            notFound()
        }
        
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
        
        const message = err.message

        errorStrategies[message]()

        if (message == "404") {
            notFound()
        }
        
        dotsLoadData(loadDots, ulComments)
    }
    

}