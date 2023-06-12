

class RequestServer {
    static url = "http://jsonplaceholder.typicode.com";

    constructor() {
        if (typeof RequestServer.instance === "object") {
            return Sun.instance;
        }

        RequestServer.instance = this
    }

    getUser(userId) {
        return RequestServer.getFetchData(`${RequestServer.url}/users/${userId}`)
    }
    getUsers() {
        return RequestServer.getFetchData(`${RequestServer.url}/users`)
    }
    getPost(postId) {
        return RequestServer.getFetchData(`${RequestServer.url}/posts/${postId}`)
    }
    getPosts(postId) {
        // return RequestServer.getFetchData(`${RequestServer.url}/posts?userId=${userId}`)
        return RequestServer.getFetchData(`${RequestServer.url}/users/${postId}/posts`)
    }
    getCommentsPost(postId) {
        return RequestServer.getFetchData(`${RequestServer.url}/posts/${postId}/comments`)
    }


    static async getFetchData(url, method = "json") {
        const response = await fetch(url)
        return await response[method]()
    }
};

export const requestServer = new RequestServer();
