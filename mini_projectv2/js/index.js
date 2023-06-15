



checkThemeLocal()
currentTheme()

addListener(document, "DOMContentLoaded", start())

async function start() {
    try {
        const data = await requestServer.getUsers()

        isCheckEmptyData(data) && renderUsers(data)

    } catch (err) {
        // console.log(err);
        const emptyDataElement = getElement(".empty-data")

        emptyDataError(err.message, emptyDataElement)
        


    }
    finally {
        dotPreLoader()
    }
    
}