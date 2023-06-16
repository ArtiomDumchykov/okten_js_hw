// THEME
currentTheme()
checkThemeLocal()


const btnTHEME = getElement('.btn__change-theme')

addListener(btnTHEME, "click", function() {
    changeTheme()
})

addListener(document, "DOMContentLoaded", start())

// Start code
// USERS
async function start() {

    try {
        const data = await requestServer
                            .getUsers()
                            .catch(() => {
                                throw new Error("404")
                            })

        isCheckEmptyData(data) && renderUsers(data)

    } catch (err) {
        console.log(err);
        const message = err.message

        errorStrategies[message]()

        if (message == "404") {
            notFound()
        }
    }
    finally {
        dotPreLoader()
    }
    
}