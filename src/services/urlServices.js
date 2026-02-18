import axios from 'axios'

const apiUrl = `${import.meta.env.VITE_API_URL}/api`
// jab envorment veriable banate hai to {import.meta.env.VITE_API_URL} ye hamesha use karenge 
const axiosInstance = axios.create({
    baseURL: apiUrl,
    withCredentials: true
})

export default axiosInstance
