import React, {useState , useEffect , useRef } from 'react'; 

import io from "socket.io-client";



import ReactPlayer from 'react-player';
const ENDPOINT = 'localhost:5000';

const  socket = io(ENDPOINT);

const Video = ( {  playerRef, playerInfo, setPlayerInfo }) => {

    const time = useRef(null);
    // const seek = useRef(0);


    // const currtime = time.current.getCurrentTime();
    // SetPlayerState = currtime;
     
    useEffect(()=>{
        //  time.current = time.getCurrentTime();
        // console.log(time.current.getCurrentTime());

    },[]);

    // useEffect(()=> {
    //  socket.emit('newuser',{
    //      SetPlayerState = time.current.getCurrentTime()     
    //  })   
    // },)

    const getTime = () => {
        console.log(time.current.getCurrentTime());
    }
    
    
    // const SeekTo =()=> {
    //     playerRef.current.seekTo(PlayerState,'seconds'); 
    // }

    const HandlePlayPause = (playing)=> {
        setPlayerInfo((prev)=>({
            ...prev,playing,time:playerRef.current.getCurrentTime()
        })
        )
    }

    
    return(
    
    <div className = "VideoContainer">
        <ReactPlayer url={ playerInfo.url } playing={playerInfo.playing} controls={true} ref = {playerRef} height="100vh" width="80vw"
        onPlay={()=>{HandlePlayPause(true)}}
        onPause={()=>{HandlePlayPause(false)} }
        />

        {/* <button onClick= {getTime}>Click  </button> */}
        {/* <button onClick= {SeekTo}>Click  </button> */}
        {/* Seekto(); */}

        
        {/* <button onClick= {()=> console.log(URL)}>Click Video.js </button>  */}
        
    </div>

    );
} 

export default Video ;