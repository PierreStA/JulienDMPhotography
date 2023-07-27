require("dotenv").config();
const express = require("express");
const cookieParser = require ("cookie-parser");
const path = require("path");
const cors = require("cors");

const router=require("./router");

const app = express();

app.use(cors({origin:"http://localhost:3000",credentials:true})); 
app.use(express.static(path.join(__dirname, "../public"))); // pour servir les fichiers statiques
app.use(express.json()); // pour parser le body des requetes en json
app.use(cookieParser());// pour lire les cookies

app.use("/api", router); // explication dans la video JWT1 a 29 min/*

app.get("*", (req, res) => {
  res.status(404).json({ message: "Not Found!" });
});

module.exports = app;