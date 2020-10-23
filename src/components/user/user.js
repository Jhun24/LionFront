import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './user.css'
import api from '../../api/api'

class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            userData:{
                userToken:String,
                id:String,
                password:String,
                userContent:{
                    point:Number,
                    recycleBottle:Number,
                    QRCode:String
                },
                userPrivacyData:{
                    name:String,
                    phoneNumber:String,
                }
            }
        }
        
    }
    componentDidMount = async ()=>{
        console.log(window.sessionStorage.getItem('isAuth'))
        if(window.sessionStorage.getItem('isAuth') == "true"){
            let data = await api.userData(window.sessionStorage.getItem('userToken'));
            if(data.status == 200){
                console.log(data.data)
                this.setState({userData:data.data});
                console.log(this.state.userData.userPrivacyData.name)
            }
            else{
                alert('Server Error')
            }
        }
        else{
            // document.location.href = "/"
        }
    }
    render(){
        return(
            <div className="User">
                <div className="user-box">
                    <h2>{this.state.userData.userPrivacyData.name}님의 마이페이지</h2>
                    <div className="user-point">
                        <h2>{this.state.userData.userPrivacyData.name}님이 적립한 포인트</h2>
                        <p>{this.state.userData.userContent.point}<span>p</span></p>
                    </div>
                    <div className="user-bottle">
                        <h2>{this.state.userData.userPrivacyData.name}님이 재활용한 병</h2>
                        <p>{this.state.userData.userContent.recycleBottle}<span>병</span></p>
                    </div>
                    <div className="user-qrcode">
                        <img src={this.state.userData.userContent.QRCode}/>
                    </div>

                    <Link to="/">
                        <div className="back-btn">
                            뒤로가기
                        </div>
                    </Link>
                </div>
                <div className="img">

                </div>
            </div>
        );
    }
}

export default User;