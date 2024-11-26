import fs from "fs";
import {getTodosPosts, criarPost} from "../models/postsModel.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts); // res.status(200) código HTTP de status, significando que deu tudo certo; .json deixando de forma explicitada 
}

export async function postarNovoPost(requisicao, resposta) {
    const novoPost = requisicao.body;
    try {
        const postCriado = await criarPost(novoPost);
        resposta.status(200).json(postCriado);
    } catch (error) {
        console.error(error.message);
        resposta.status(500).json({"Erro":"Falha na requisição"})
    }
}

export async function uploadImagem(req, res) {
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCriado = await criarPost(novoPost);
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
        res.status(200).json(postCriado);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}