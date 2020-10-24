import React, {Component} from 'react';

import Content from './content/content'
import Text from './content/text';

import './game.css'

class Game extends Component{
    constructor(props){
        super(props);
    }
  
    render(){
        let gameDisplay;
        if(window.sessionStorage.getItem('isAuth') == "true"){
            gameDisplay=<Content></Content>
        }  
        else{
            gameDisplay=<Text></Text>;
        }
        return(
            <div className="Game">
                <h2>재활용 게임</h2>
                <p>무덤 별 계절이 무성할 봅니다. 그러나 강아지, 차 이런 헤일 나의 딴은 언덕 까닭입니다. 지나고 못 이국 이런 당신은 하나에 라이너 거외다. 노새, 하나에 이국 남은 불러 헤는 거외다. </p>
                <div className="game-content">
                    {gameDisplay}
                </div>
            </div>
        );
    }
}

export default Game;