import express from "express";
import router from "./routes/route.js"; 
import cors from "cors";
const server = express();
const door = 8084;

server.use(express.json()); //Middleware necessário para requisições com JSON e uso de métodos comn req.body
server.use(cors());
server.use(express.static('public'));

server.use("/", router);

server.listen(door, ()=>{
    console.log(`Server running on http://localhost:${door}`);
})