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
                        <p>우리는 매년 71,400t 의 PET병과 45,900T의 플라스틱 컵을 소비하고 있습니다.(2018 환경부 기준)
썩지 않는 플라스틱의 사용량은 매년 증가하고 있는데 우리가 분리 수거한 폐 플라스틱 중 단 14%만 재활용되고 나머지는 ‘쓰레기’가 된다는 사실을 알고 계셨나요? 이러한 문제를 개선하기 위해 ’대량생산- 소비- 폐기’ 로 이어지는 기존사이클에서 벗어나 자원을 지속 활용 하는 ’순환경제’에 개인도 능동적으로 참여할 수 있는 시스템을 만들었습니다.
롯데의 친환경 제품을 구매하고 동일하게 사용 후, 정기 수거 시스템을 통하여 편리하게 수거하거나 구매한 플라스틱을 ‘네프론’을 통해 직접 돌려보냄으로서 개인과 기업이 함께 ‘플라스틱 순환 경제’ 에 동참할 수 있습니다. </p>
                    </div>
                    
                </div>
                <div className="image-box">

                </div>
            </div>
        );
    }
}

export default Main;