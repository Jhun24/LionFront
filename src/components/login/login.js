import React, {Component} from 'react';

import './login.css'
import api from '../../api/api'

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            password:''
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = async (e)=>{
        let data = {
            id:this.state.id,
            password:this.state.password
        }
        let apiData = await api.auth(data);
        window.sessionStorage.setItem('userToken',apiData.data.userToken);
        window.sessionStorage.setItem('isAuth',true);
        document.location.href ="/"
        
    }
    render(){
        return(
            <div className="Login">
                <div className="login-box">
                    <h2>환영합니다!</h2>
                    <input type="text" name="id" onChange={this.handleChange} placeholder="아이디를 입력해주세요"/>
                    <input type="password" name="password" onChange={this.handleChange} placeholder="비밀번호를 입력해주세요"/>
                    
                    <div className="login-btn" onClick={this.handleSubmit}>로그인</div>
                </div>
            </div>
        );
    }
}

export default Login;