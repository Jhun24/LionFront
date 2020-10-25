import React, {Component} from 'react'

import './index.css'
import api from '../../api/api'

import Header from '../header/header';
import Main from './component/main/main';
import Chart from './component/chart/chart';
import Game from './component/game/game';
import Mean from './component/mean/mean'

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {
            userToken:String,
            isAuth:false
        }
    }
    componentDidMount(){
        console.log(window.sessionStorage.getItem('isAuth'));
        //null
    }
    render(){
        return(
            <div className="index">
                <Header isAuth={this.state.isAuth}></Header>
                <Main></Main>
                <Chart></Chart>
                <Game></Game>
                <Mean></Mean>
            </div>
        );
    }
}

export default Index;