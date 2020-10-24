import React, {Component} from 'react'

import mainBackground from '../../../../resource/main_background.svg'
import './main.css'

class Main extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Main">
                <div className="text-box">
                    <div className="text-content">
                        <h2>재활용은<br/>중요합니다</h2>
                        <p>환경을 지키는 것은 중요한 일입니다. 폐기되는 플라스틱의 양은 나날이 증가하고 있으며, 분리수거를 위해 노력하는 것 만으로 물질의 재활용률을 높여 환경 보존에 이바지할 수 있습니다. 롯데 또한 이를 위해 플라스틱 패키지를 종이로 변경, 플라스틱 페트병의 라벨 제거, 스마트 리사이클 프로젝트 진행 등 여러 방면으로 노력해 왔습니다. 하지만 환경을 지킬 의무는 모두에게 있으며, 이를 쉽게 실천하실 수 있도록 이 캠페인을 기획하였습니다. 앞으로도 환경을 위한 롯데의 행보는 계속될 것입니다.</p>
                    </div>
                    
                </div>
                <div className="image-box">

                </div>
            </div>
        );
    }
}

export default Main;