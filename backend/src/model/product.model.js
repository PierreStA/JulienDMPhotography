const db =require("./db.js");

const findAll= async ()=> { 
    try{
        const [products] = await db.query("select * from `product`"); 
        return products;
    }catch(e){
        console.log(e);//* si erreur on la log
    }
};

const findOne= async (id)=> { //* id = id du produit
    try{
        const [product] = await db.query("select * from `product` where id = ? ", [id]);
        return product; 
    }catch(e){
        console.log(e); 
    }
};

const addOne = async (product) => {
    try{
        const{ description, photo } = product 
        const [result] = await db.query("insert into `product` (description, photo) values (?,?)", [product.description, product.photo] 
        );

    return { id: result.insertId,description, photo};  
    } catch (error) {
        throw new Error(`Impossible de créer le produit: ${error}`);
    }
}


const updateOne = async function (product) {
  try {
    const result = await db.query(
       "UPDATE `product` SET description = ?, photo = ? WHERE id = ?",
      [product.description, product.photo, product.id]
    );
    return result;
  } catch (error) {
    throw new Error(`Impossible de mettre à jour le produit : ${error}`);
  }
};

const deleteOne = async function (id) {
  try {
    const result = await db.query(
      "DELETE FROM `product` WHERE id = ?",
      [id]
    );
    return result;
  } catch (error) {
    throw new Error(`Impossible de supprimer le produit : ${error}`);
  }
};


module.exports = { findAll, findOne,addOne ,updateOne, deleteOne};