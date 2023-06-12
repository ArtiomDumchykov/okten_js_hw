import { getElement, addListener } from "../utils/index.js";
import { URLParams } from "../utils/url-params.js";
import { requestServer } from "../utils/request-server.js";
import { render as renderPost} from "../renders/post-render.js";
import { render as renderPostComments } from "../renders/post-comments-render.js";

const url_params = new URLParams(location.href)



addListener(document, "DOMContentLoaded", start())

async function start() {
    try {
        const post_id = url_params.getParam("postId");
        const data = await requestServer.getPost(post_id);
        renderPost(data);
        comments()
    } catch (err) {
        console.log(err)
    }
}


async function comments() {
    try {
        // const ulComments = getElement(".comments__list")
        const post_id = url_params.getParam("postId");
        const data = await requestServer.getCommentsPost(post_id)
        renderPostComments(data)
    } catch (error) {
        
    }
}