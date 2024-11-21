import express from 'express';

console.log(process.env.STRING_CONEXAO);

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://picsum.photos/seed/picsum/600/400"
    },
    {
        id: 2,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://picsum.photos/seed/picsum/600/400"
    },
    {
        id: 3,
        descricao: "Paisagem com um pôr do sol incrível",
        imagem: "https://picsum.photos/seed/picsum/600/400"
    },
    {
        descricao: "Cachorro correndo na praia",
        imagem: "https://source.unsplash.com/random/600x400/?dog,beach"
    },
    {
        id: 4,
        descricao: "Comida deliciosa e colorida",
        imagem: "https://picsum.photos/seed/picsum/600/400"
    },
    {
        id: 5,
        descricao: "Montanha coberta de neve",
        imagem: "https://picsum.photos/seed/picsum/600/400"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Funfando...");
});


app.get("/posts", (req, res) => {
    res.status(200).json(posts);

});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);

    });
}


app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);

});