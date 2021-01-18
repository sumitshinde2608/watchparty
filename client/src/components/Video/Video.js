import React, {useState , useEffect , useRef } from 'react'; 

import ReactPlayer from 'react-player';


const Video = () => {
    const time = useRef(null);
     useEffect(()=>{
        //  time.current = time.getCurrentTime();
        // console.log(time.current.getCurrentTime());

    },[]);
    const getTime = () => {
        console.log(time.current.getCurrentTime());
    }

    return(
    
    <div className = "VideoContainer">
        <ReactPlayer url='https://www.facebook.com/Daleroxxu/videos/151463899863600/' ref = {time}/>
        {/* <div>Current time : {time.current}</div> */}
        <button onClick= {getTime}>Click  </button>
    </div>

    );
} 

export default Video ;