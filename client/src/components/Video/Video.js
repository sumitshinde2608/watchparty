import React, {useState , useEffect } from 'react'; 

import ReactPlayer from 'react-player';
// const ref = React.createRef();
let time = '';

const Video = () => {

    // useEffect(()=>{
    //     time = ref.getCurrentTime();
    //     console.log(time)

    // },time);

    return(
    
    <div className = "VideoContainer">
        <ReactPlayer url='https://www.youtube.com/watch?v=7sDY4m8KNLc' />
        
        
    </div>

    );
} 

export default Video ;