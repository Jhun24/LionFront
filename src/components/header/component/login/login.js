import React, {Component} from 'react';

import loginImg from './resource/login.svg'
import './login.css'

class LoginBox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="LoginBox">
                <img src={loginImg}/>
                <h2>로그인</h2>
            </div>
        );
    }
}

export default LoginBox;