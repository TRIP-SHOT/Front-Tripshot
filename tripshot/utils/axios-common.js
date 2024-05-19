//axios 객체 관련 설정
//사용자 정의 axios 객체 생성
//baseURL, Content type....
import axios from "axios"

export default axios.create({
    baseURL: "http://3.37.57.139:8080",     
    headers:{
        "Content-Type" : "multipart/form-data"
    }
})