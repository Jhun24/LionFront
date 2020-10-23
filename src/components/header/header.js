import React , {Component} from 'react'

import LoginBox from './component/login/login';
import MypageBox from './component/mypage/mypage'

import logo from './resource/Union.svg'
import './header.css'

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            userToken:String,
        }
    }
   
    render(){
        let button;
        if(window.sessionStorage.getItem('isAuth') == "true"){
            button=<MypageBox></MypageBox>
        }  
        else{
            button=<LoginBox></LoginBox>;
        }
        return( 
            <div className="header">
                <div className="header-box">
                    <div className="logo-box">
                        <img src={logo}/>
                    </div>
                    <div className="list-box">
                        <h2 className="under-bar">개요</h2>
                        <h2>재활용 지표</h2>
                        <h2>재활용 게임</h2>
                        <h2>캠페인 소개</h2>
                    </div>
                </div>
                <div className="button-box">
                    {button}
                </div>
            </div>
        );
    }
}

export default Header;