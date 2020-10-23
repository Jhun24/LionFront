import React, {Component} from 'react';
import {Link} from 'react-router-dom'

import './mypage.css'
import logoutImg from './resource/logout.svg';
import homeImg from './resource/home.svg';
import mapImg from './resource/map.svg';

class MypageBox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Mypage">
                <div className="mypage-button-box">
                    <Link to="/user">
                        <div className="mypage-button">
                            <img src={homeImg}/>
                            <h2>마이페이지</h2>
                        </div>
                    </Link>
                    <div className="map-button">
                        <img src={mapImg}/>
                        <h2>수거 지도</h2>
                    </div>
                    <div className="logout-button">
                        <img src={logoutImg}/>
                        <h2>로그아웃</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default MypageBox;