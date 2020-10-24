import React, {Component} from 'react';

class Text extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h4 style="color:#fff; font-size:60px;">로그인을 먼저 해주세요</h4>
            </div>
        );
    }
}

export default Text;