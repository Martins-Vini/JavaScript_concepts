import express from "express";
import path from "path";
import {fileURLToPath} from "url"

import { filtrarProdutos, ordenarPorAvaliacao } from "../controller/logic.js";
import {produtos} from "../model/database.js";

const nomeArquivo = fileURLToPath(import.meta.url);
const nomePasta = path.dirname(nomeArquivo)


const router = express.Router();

router.get("/produtos", (req,res)=>{
    res.json({produtos});
})

router.get("/produtos/filtrados", (req,res) => {  
    const produtosFiltrados = filtrarProdutos(produtos);
    res.json({produtosFiltrados});
})

router.get("/produtos/acima30", (req,res) => {
    const { produtosAcimade30 } = filtrarProdutos(produtos);
    res.json({produtosAcimade30});
})

router.get("/produtos/abaixo30", (req,res)=>{
    const {produtosAbaixode30} = filtrarProdutos(produtos);
    res.json({produtosAbaixode30});
})

router.get("/home", (req,res)=>{
    res.sendFile(path.join(nomePasta, '../view/index.html'));
})

export default router;

