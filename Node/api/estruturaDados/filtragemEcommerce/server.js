import express from "express";
import router from "./routes/route.js"; 
import cors from "cors";
import path from "path";
import {fileURLToPath} from "url"

const nomeArquivo = fileURLToPath(import.meta.url);
const nomePasta = path.dirname(nomeArquivo)


const server = express();
const door = 8084;

server.use(express.json());
server.use(cors());
server.use(express.static(path.join(nomePasta, 'public')));
server.use('/view', express.static(path.join(nomePasta, 'view')));

server.use("/", router);


server.listen(door, ()=>{
    console.log(`Server running on http://localhost:${door}`);
})