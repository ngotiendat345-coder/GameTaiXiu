import React, { Component } from 'react'
import {connect } from 'react-redux';
class XucSanContainer extends Component{
    render(){
        const {xucSacIMG} = this.props;
        const diem =xucSacIMG.reduce((total,item)=>{
            return total+item.number;
        },0);
        return(
            <>
            <div className="col-6 text-center">
                      {xucSacIMG.map((item,index)=>{
                        return <img className="ml-5" style={{width:50}} src={item.hinhAnh} key={index} />
                      })}
                        <h3 className="bg-warning">Tổng điểm :{diem} <span className="text-danger">{diem>10?'Xỉu' : 'Tài'}</span></h3>
                    </div>
            </>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        xucSacIMG:state.xucSac
    }
} 

export default connect(mapStateToProps,null)(XucSanContainer);