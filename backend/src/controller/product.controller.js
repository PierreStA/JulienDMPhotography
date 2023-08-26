const { findAll, findOne, addOne, updateOne, deleteOne} = require("../model/product.model.js");

const getAll = async(req,res, next)=>{
    try{ 
        const products = await findAll(); //* on recupere tous les produits      
        res.send(products);
    } catch(e){
        next(e);
    }
};

const getOne = async(req,res,next) =>{
    
    try{
        const productId= parseInt(req.params.id); //* on recupere l'id du produit dans l'url et on le convertit en nombre entier
        if (isNaN(productId)) throw new Error(); //* si l'id n'est pas un nombre on renvoie une erreur 400
        const [product] = await findOne(productId);//* on recupere le produit 
        res.send(product); //* on renvoie le produit
    }catch(e){
        next(e);
    }
};


const createOne = async (req, res, next) => {
  try {
    const product = req.body; //* on recupere le produit dans le body de la requete
    const newProduct = await addOne(product); //* on ajoute le produit a la bdd
    res.status(201).json(newProduct);//* on renvoie le produit avec le status 201
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async function (req, res, next) {
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
    next(error);
  }
};

const editOne = async (req, res) => {
  try {
    const product = req.body;
    product.id = parseInt(req.params.id, 10);//* on recupere l'id du produit et on le convertit en nombre entier
    const [result] = await updateOne(product);//* on met a jour le produit avec l'id recupere
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports ={getAll, getOne,createOne, editOne, deleteProduct};