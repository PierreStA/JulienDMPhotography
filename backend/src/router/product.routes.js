const express = require("express");

const { getAll, getOne, createOne, editOne, deleteProduct } = require("../controller/product.controller.js"); 
const authorization = require("../middleware/auth.js");

const router = express.Router(); 

router.get("/", getAll); //* execute la fonction getAll du controller product lorsque l'on fait une requete get sur api/product
router.get("/:id", getOne); 
router.post("/", authorization, createOne);
router.put("/:id", authorization, editOne); 
router.delete("/:id",authorization, deleteProduct);

module.exports = router;