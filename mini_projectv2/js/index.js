addListener(document, "DOMContentLoaded", start())

async function start() {
    try {
        const data = await requestServer.getUsers()
        renderUsers(data)
    } catch (err) {
        console.log(err);
    }
    
}