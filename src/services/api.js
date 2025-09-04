import axios from "axios";

const api = axios.create({
  baseURL: 'https://api-cadastro-usuarios-77pd.onrender.com/'
})

export default api