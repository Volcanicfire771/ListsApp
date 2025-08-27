import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));

const movie_list = [
    {   
        id:1,
        name:"shangasd",
        img: "endgame",
        rating:3.7,
    },
    {
        id:2,
        name:"Avatar",
        img: "endgame",
        rating:3.7,
    },
    {
        id:3,
        name:"sadfas",
        img: "endgame",
        rating:3.7,
    },
]

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../front/build')));
// app.use(cors());


app.get("/", (req, res) => {
    // Send the index.html file from the build folder
    res.sendFile(path.join(__dirname, '..','front','build', 'index.html'));
    // res.send('Hello World!')
});

app.get("/api/items", (req, res) => {
    console.log(movie_list);
    res.json(movie_list);
    
});

app.get("/api/items/:id", (req, res) => {
    
    res.send(movie_list[req.params.id]);
});

app.post("/api/items/", (req, res) => {
    // console.log(req.body.name);
    // movie_list.push(req.body.name);
    const movie = 
    {
        id: req.body.id,
        name: req.body.name,
        img: req.body.img,
        rating: req.body.rate,
    }
    movie_list.push(movie);
    res.redirect('/api/items');
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});