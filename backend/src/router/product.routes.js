const express = require("express");

const { getAll, getOne, createOne, editOne, deleteProduct } = require("../controller/product.controller.js"); //* on importe les fonctions du controller product

const router = express.Router(); 

router.get("/", getAll); //* execute la fonction getAll du controller product lorsque l'on fait une requete get sur /product
router.get("/:id", getOne); 
router.post("/", createOne);
router.put("/:id", editOne); 
router.delete("/:id", deleteProduct);

module.exports = router;