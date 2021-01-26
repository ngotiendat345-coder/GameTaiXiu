import React, { Component } from 'react'
import {connect } from 'react-redux';
class ThongSoGame extends Component{
    render(){
        const {totalMatch,matchWin,choose,alert}=this.props;
        return(
            <div>
                <h1 className="text-uppercase bg-danger" >
                {alert}
                </h1>
                <h3 className="text-uppercase">
                    Bạn chọn <span className="text-danger">{choose ?"Tài":"Xỉu"}</span>
                </h3>
                
                <h3 className="text-capitalize">
                    Số bàn thắng  <span className="text-success">{matchWin}</span>
                </h3><h3 className="text-capitalize">
                    Số bàn chơi  <span className="text-warning">{totalMatch}</span>
                </h3>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        alert:state.alert,
        totalMatch:state.totalMatch,
        matchWin:state.matchWin,
        choose:state.choose,
        ketQua:state.ketQua,
    }
}

export default connect(mapStateToProps,null)(ThongSoGame);