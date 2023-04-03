const { findAll, addOne,findOne} = require("../model/cartproduct.model.js");

const createOne = async (req, res, next) => {
  try {
    const cartproduct = req.body;
    const newCartproduct = await addOne(cartproduct);
    res.status(201).json(newCartproduct);
  } catch (error) {
    next(error);
  }
};

const getAll = async(req,res, next)=>{
    try{ 
        const cartproduct = await findAll();
        
        res.send(cartproduct);
    } catch(e){
        next(e);
    }

};

const getOne = async(req,res,next) =>{
    try{
        const cartproductId= parseInt(req.params.id);

        if (isNaN(cartproductId)) throw new Error();

        const [cartproduct] = await findOne(cartproductId);
        res.send(cartproduct);
    }catch(e){
        next(e);
    }
};


module.exports ={getAll,getOne,createOne};