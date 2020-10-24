import axios from 'axios'

axios.defaults.baseURL = "http://15.164.103.157/:20002"

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