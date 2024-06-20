// takes req.body.time
const convertTime = (time)=>{
    if(time.start ){
    time.start= new Date(time.start);
    }
    if(time.end){
    time.end = new Date(time.end); 
    }
    return time;
}

module.exports={convertTime: convertTime}