import axios from "axios"

export default axios.create({
    baseURL: import.meta.env.VITE_UPLOAD_API_URL, 
    headers:{
        "Content-Type" : "multipart/form-data"
    }
})
