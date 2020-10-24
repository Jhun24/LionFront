import React, {Component} from 'react';
import QrReader from 'react-qr-reader'

import api from '../../api/api'

class QR extends Component{
    constructor(props){
        super(props);

        this.state = {
            result:'',
            scanTime:0
        }
    }
    handleScan = async (data) => {
        if (data) {
            if(this.state.scanTime == 0){
                this.setState({result: data});
              
                let apiData = await api.qr({
                    userToken:this.state.result
                });
                if(apiData.status == 200){
                    alert("인증되었습니다.")
                }
            }
        }
    }
    handleError = (err) => {
        console.error(err)
    }
    render(){
        return(
            <div className="QR">
                 <QrReader
                delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width: '500px' }}
                />
            </div>
        );
    }
}

export default QR;