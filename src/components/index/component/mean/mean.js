import React, {Component} from 'react';

import meanIcon from './resource/Icon.svg';
import './mean.css'

class Mean extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Mean">
                <div className="content">
                    <div className="mean-title">
                        <h2>더 나은<br/>지구를 위한<br/>재활용 캠페인</h2>
                        <p>평소처럼 플라스틱을 소비하고 분리수거 하는 것 만으로 캠페인에 참여할 수 있습니다. 분리수거한 플라스틱은 전국에 비치된 네프론 기기 혹은 방문한 택배기사에게 수거되어 이곳으로 오게 됩니다. 이곳에서 여러분이 버린 플라스틱 병들이 의류, 가방, 신발등으로 재탄생하여 두번째 싸이클을 시작할 것입니다. 플라스틱 수거 시 QR 인증을 하면 버린 플라스틱의 양이 기록되며, 이는 적절한 포인트로 환산되어 여러분께 제공됩니다.</p>
                    </div>
                    <div className="mean-data">
                        <img src={meanIcon}/>
                        <h2>의의</h2>
                        <p>환경을 지키는 것은 중요한 일입니다. 폐기되는 플라스틱의 양은 나날이 증가하고 있으며, 분리수거를 위해 노력하는 것 만으로 물질의 재활용률을 높여 환경 보존에 이바지할 수 있습니다. 롯데 또한 이를 위해 플라스틱 패키지를 종이로 변경, 플라스틱 페트병의 라벨 제거, 스마트 리사이클 프로젝트 진행 등 여러 방면으로 노력해 왔습니다. 하지만 환경을 지킬 의무는 모두에게 있으며, 이를 쉽게 실천하실 수 있도록 해당 캠페인을 기획하였습니다. 앞으로도 환경을 위한 롯데의 행보는 계속될 것입니다.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mean;