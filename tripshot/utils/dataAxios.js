import axios from "axios"

export default axios.create({

    baseURL: import.meta.env.VITE_DATA_API_URL, 
    headers:{
        "Content-Type" : "application/json"
    }
})
