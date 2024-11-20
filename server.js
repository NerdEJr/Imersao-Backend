import express from "express";

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
    {
        id: 3,
        descricao: "Paisagem com um pôr do sol incrível",
        imagem: "https://picsum.photos/seed/picsum/600/400"
    },
    {
        id: 4, 
        descricao: "Foto de um cachorro sorrindo",
        imagem: "https://random.dog/woof.jpg"
    },
    {
        id: 5, 
        descricao: "Montanha coberta de neve",
        imagem: "https://source.unsplash.com/random/600x400/?mountain,snow"
    },
    {
        id: 6,
        descricao: "Comida deliciosa",
        imagem: "https://loremflickr.com/640/480/food"
    }
  ];

const app = express(); // criando a variavel do servidor
app.use(express.json()); // funcionalidade parse, tudo oq for identificado como json seja passado como tal
app.listen(3000,() => { // comando para o servidor "ouvir" requisições na porta 3000
    console.log("Servidor escutando... ");
});

app.get("/posts", (req, res) =>{ // criando uma rota "posts" do tipo GET; Passando uma arrow function com requisição e resposta
    res.status(200).json(posts); // res.status(200) código HTTP de status, significando que deu tudo certo; .json deixando de forma explicitada 
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




