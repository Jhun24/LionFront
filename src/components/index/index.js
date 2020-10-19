import React, {Component} from 'react'

import './index.css'

import Header from '../header/header';
import Main from './component/main/main';

class Index extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="index">
                <Header></Header>
                <Main></Main>
                <Main></Main>
                <Main></Main>
            </div>
        );
    }
}

export default Index;