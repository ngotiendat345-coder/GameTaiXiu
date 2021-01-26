import React, { Component } from 'react'
import { connect } from 'react-redux'
import ThongSoGame from '../component/ThongSoGame'
import XucSanContainer from '../component/XucSacContainer'

class LayoutGameTaiXiu extends Component{
    render(){
        const {LuaChonFunction,PlayGameFunction} = this.props;
        return(
            <>
                <div className="gameXucXac pt-5">
                <h1 className="text-uppercase text-center display-5 ">game tài xỉu</h1>
                <section className="d-flex flex-direction-row w-70 mx-auto my-5">
                    <button className="btn display-4 text-white bg-primary p-5 col-3"
                        onClick={()=>{
                        
                            LuaChonFunction(true);
                        }}
                    >
                        Tài
                    </button>
                    <XucSanContainer/>
                    <button className="btn display-4 text-white bg-primary p-5 ml-5 col-3"
                        onClick={()=>{
                            LuaChonFunction(false);
                        }}
                    >
                        Xỉu
                    </button>
                </section>
                <ThongSoGame />
                <button className="btn btn-success"
                onClick={()=>{
                    PlayGameFunction()
                }}
                >
                    PLAY GAME
                </button>
                </div>
            </>
        )
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        LuaChonFunction:(choose)=>{
            dispatch({
                type:'CHOOSE',
                payload:choose
            })
        },
        PlayGameFunction:()=>{
            dispatch({
                type:'PLAY'
            })
        }
    }
}
export default connect(null,mapDispatchToProps)(LayoutGameTaiXiu);