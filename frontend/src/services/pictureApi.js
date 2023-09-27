import  axios from "axios";

const instance = axios.create({ //*
    baseURL: import.meta.env.VITE_BACKEND_URL, //* URL de base de l'API 
    withCredentials: true,  //* envoie les cookies 
});

export default instance;