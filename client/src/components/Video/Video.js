import React, {useState , useEffect , useRef } from 'react'; 

import ReactPlayer from 'react-player';


const Video = (url) => {
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
        <ReactPlayer url={url} ref = {time}/>
        {/* <div>Current time : {time.current}</div> */}
        <button onClick= {getTime}>Click  </button>
    </div>

    );
} 

export default Video ;