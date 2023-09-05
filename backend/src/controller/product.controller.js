const { findAll, findOne, addOne, updateOne, deleteOne} = require("../model/product.model.js");

const getAll = async(req,res, )=>{
    try{ 
        const products = await findAll(); //* on recupere tous les produits      
        res.send(products);
    }catch(error){
        console.error(error);
    res.sendStatus(500);
    }
};

const getOne = async(req,res) =>{
    
    try{
        const productId= parseInt(req.params.id); //* on recupere l'id du produit dans l'url et on le convertit en nombre entier
        const [product] = await findOne(productId); //* on utilise le model pour recuperer le produit avec l'id recupere
        res.send(product); //* on renvoie le produit
    }catch(error){
        console.error(error);
    res.sendStatus(500);
    }
};


const createOne = async (req, res) => {
  try {
    const product = req.body; //* on recupere le produit dans le body de la requete
    const newProduct = await addOne(product); //* on utilise le model pour creer le produit
    res.status(201).json(newProduct);//* on renvoie le produit en json avec le code 201
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const deleteProduct = async function (req, res) {
  try {
    const productId = req.params.id; //* on recupere l'id du produit  a supprimer 
    const [result] = await deleteOne(productId); //* on supprime le produit avec l'id recupere 
    res.status(200).json({ message: `Le produit avec l'ID ${productId} a été supprimé.` });
    if (result.affectedRows === 0) { //* si le produit n'existe pas on renvoie une erreur 404
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

const editOne = async (req, res) => {
  try {
    const product = req.body;
    product.id = parseInt(req.params.id, 10);//* on recupere l'id du produit et on le convertit en nombre entier
    const [result] = await updateOne(product);//* on met a jour le produit 
    if (result.affectedRows === 0) { 
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports ={getAll, getOne,createOne, editOne, deleteProduct};