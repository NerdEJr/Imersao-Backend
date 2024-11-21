import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts); // res.status(200) código HTTP de status, significando que deu tudo certo; .json deixando de forma explicitada 
}