import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";
import routes from "./src/routes/postsRoutes.js";

await conectarAoBanco(process.env.STRING_CONEXAO);

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placekitten.com/400/300"
    },
  ];

const app = express(); // criando a variavel do servidor
routes(app);
app.use(express.json()); // funcionalidade parse, tudo oq for identificado como json seja passado como tal
app.listen(3000,() => { // comando para o servidor "ouvir" requisições na porta 3000
    console.log("Servidor escutando... ");
});


function buscarPostPorID(id){
    return posts.findIndex((post) => { // função JS que busca baseado pelo Index
        return post.id === Number(id); // converte como um número
    })
}

app.get("/posts/:id", (req, res) =>{ // criando uma rota "posts" do tipo GET; Passando uma arrow function com requisição e resposta
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]); // res.status(200) código HTTP de status, significando que deu tudo certo; .json deixando de forma explicitada 
});




