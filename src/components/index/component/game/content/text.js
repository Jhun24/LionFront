import React, {Component} from 'react';

import './text.css'

class Text extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h4 className="game-login-text">로그인을 먼저 해주세요</h4>
            </div>
        );
    }
}

export default Text;