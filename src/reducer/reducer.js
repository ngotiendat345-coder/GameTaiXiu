const init = {
    alert:'',
    checkChoose:false,
    choose:true,
    totalMatch:0,
    matchWin:0,
    xucSac:[
        {number:1,hinhAnh:'./1.png'},
        {number:2,hinhAnh:'./2.png'},
        {number:3,hinhAnh:'./3.png'}
    ]
}

const reducer=(state=init,action)=>{
    switch(action.type){
        case 'CHOOSE':
           if(action.payload){
               return {...state,choose:true,checkChoose:true};
           }
           else{
               return {...state,choose:false,checkChoose:true};
           }
           break;
        case 'PLAY':
            if(!state.checkChoose){
                return {...state,alert:'Mời chọn tài hoặc xỉu để chơi'};
            }
            let number1 = Math.ceil(Math.random()*6);
            let number2 = Math.ceil(Math.random()*6);
            let number3 = Math.ceil(Math.random()*6);
            let total = number1 + number2 + number3;
            let ketQua=true;
            let matchWin=state.matchWin;
            let totalMatch=state.totalMatch+1;
            let luaChon = state.choose;
            if(total>10){
                ketQua=false;
            }
            if((luaChon && ketQua) || (!luaChon && !ketQua) ){
                matchWin++;
            }
           
            const newXucSac= [
                {number:number1,hinhAnh:`./${number1}.png`},
                {number:number2,hinhAnh:`./${number2}.png`},
                {number:number3,hinhAnh:`./${number3}.png`}
            ]
            console.log(newXucSac);
            return {...state,xucSac:newXucSac,ketQua:ketQua, totalMatch:totalMatch,matchWin:matchWin,checkChoose:false,alert:''}
        default:return state;
    }
}

export default reducer;