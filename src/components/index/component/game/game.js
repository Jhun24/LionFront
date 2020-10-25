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
                <p>재활용 게임을 통해 자세한 재활용 방법을 알아보세요!</p>
                <div className="game-content">
                    {gameDisplay}
                </div>
            </div>
        );
    }
}

export default Game;