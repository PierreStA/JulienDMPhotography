const mysql= require("mysql2/promise");


const { DB_HOST, DB_USER,DB_PASSWORD, DB_NAME } =process.env; // on recupere les infos de la bdd dans le fichier .env

const pool=mysql.createPool({ // on cree un pool de connexion a la bdd
    host:DB_HOST,
    user:DB_USER,
    password:DB_PASSWORD,
    database:DB_NAME,
})

module.exports = pool;