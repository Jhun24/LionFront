import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080"

export default{
    auth(data){
        return axios({
            method:'post',
            url:'/user/auth',
            data:data
        })
    },
    userData(userToken){
        return axios({
            method:'get',
            url:'/user/data/'+userToken
        })
    },
    qr(data){
        return axios({
            method:'post',
            url:'/user/recycle',
            data:data
        })
    }
}