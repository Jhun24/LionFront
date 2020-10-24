import React, {Component} from 'react';

import './chart.css'

class Chart extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="Chart">
                <div className="text-box">
                    <h1>지금까지의 재활용 현황</h1>
                    {/* <p>무덤 별 계절이 무성할 봅니다. 그러나 강아지, 차 이런 헤일 나의 딴은 언덕 까닭입니다. 지나고 못 이국 이런 당신은 하나에 라이너 거외다. 노새, 하나에 이국 남은 불러 헤는 거외다. 이름과, 어머님, 위에 하나에 언덕 그러나 차 흙으로 패, 있습니다. 멀리 멀듯이, 한 어머님, 위에 언덕 계십니다. 당신은 밤이 위에 내일 피어나듯이 경, 강아지, 노새, 듯합니다</p>    */}
                    <div className="graph-box">
                        <div className="people-box">
                            <h2>현재까지 참여 인원</h2>
                            <p>{10}명</p>
                        </div>

                        <div className="bottle-box">
                            <h2>현재까지 재활용 된 병</h2>
                            <p>{100}병</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chart;