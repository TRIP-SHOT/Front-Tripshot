//axios 객체 관련 설정
//사용자 정의 axios 객체 생성
//baseURL, Content type....
import axios from "axios"

export default axios.create({
    baseURL: "http://localhost",     
    headers:{
        "Content-Type" : "application/json"
    }
})