import express from "express";
import { filtrarProdutos, ordenarPorAvaliacao } from "../controller/logic.js";
import {produtos} from "../model/database.js";
//Uso de rotas

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

export default router;

