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
        const data = await requestServer.getUsers()

        isCheckEmptyData(data) && renderUsers(data)

    } catch (err) {
        console.log(err);
        const emptyDataElement = getElement(".empty-data")

        emptyDataError(err.message, emptyDataElement)
        


    }
    finally {
        dotPreLoader()
    }
    
}