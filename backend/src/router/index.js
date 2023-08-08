const express = require("express");

const productRoutes = require("./product.routes");
const userRoutes = require ("./user.routes.js")
const authRoutes = require("./auth.routes.js");



const router = express.Router();

router.use("/user",userRoutes);
router.use("/product",productRoutes); //* on utilise le router pour toutes les routes commencant par /product
router.use(authRoutes);

module.exports = router;