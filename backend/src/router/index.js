const express = require("express");

const productRoutes = require("./product.routes");
const userRoutes = require ("./user.routes.js")
const authRoutes = require("./auth.routes.js");



const router = express.Router();

router.use("/user",userRoutes);//*
router.use("/product",productRoutes); //* ttes les routes definis dans product.routes.js commencent par /product
router.use(authRoutes); 

module.exports = router;