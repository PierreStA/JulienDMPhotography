const db = require("./db.js");

const findOne= async (userId)=> {
    try{
        const [user] = await db.query("select * from `user` where id = ? ", [userId]);  
        return user;
    }catch(e){
        console.log(e);
    }
};

const findByEmail = async (email) => {
  try {
    const [user] = await db.query("select * from `user` where email = ?", [
      email,
    ]);
    return user;
  } catch (e) {
    console.log(e);
  }
};


const addOne = async (user) => {
    try{
        const{ name, email, password,  } = user
        const [result] = await db.query("insert into `user` (name, email, password) values (?,?,?)", [name, email, password ]
        );
    return { id: result.insertId, name, email};  
    //* on creer un objet avec l'id, le nom et l'email de l'utilisateur
    } catch(e) {
         console.log(e);
    }
}
  
module.exports= { findOne, addOne,findByEmail };
