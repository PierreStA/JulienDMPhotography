const express = require("express");

const productRoutes = require("./product.routes");
const userRoutes = require ("./user.routes.js")
const authRoutes = require("./auth.routes.js");
const cartRoutes = require("./cart.routes.js");
const cartproduct = require("./cartproduct.routes.js");
const authorization = require("../middleware/auth.js");


const router = express.Router();

 // les midleware placé dans ce fichier seront global pour toutes les routes/*
router.use("/user",userRoutes);
router.use("/cart",authorization, cartRoutes);
router.use("/cartproduct",authorization, cartproduct)
router.use("/product",productRoutes);
router.use(authRoutes);

module.exports = router;