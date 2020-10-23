import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import loginImg from './resource/login.svg'
import './login.css'

class LoginBox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Link to="/auth">
                <div className="LoginBox">
                    <img src={loginImg}/>
                    <h2>로그인</h2>
                </div>
            </Link>  
        );
    }
}

export default LoginBox;