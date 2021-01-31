import React, { useState, useEffect, useRef } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Video from '../Video/Video';

import './Chat.css';

const ENDPOINT = 'localhost:5000';

let socket;

// const time = useRef(0);

const Chat = ({ location }) => {

  const { name, room ,URL} = queryString.parse(location.search);

  // const [name, setName] = useState('');
  // const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  
  const playerRef = useRef(0);
  const [playerData, SetPlayerData] = useState({url:URL,playing:false,time:0});

  useEffect(() => {

    socket = io(ENDPOINT);

    // setRoom(room);
    // setName(name);
    // setURL(URL);

    socket.emit('join', { name, room, URL }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  

  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

useEffect(()=>{
  socket.on("requestPlayerInfo",()=> {
    console.log("Ftr");
    socket.emit('sendPlayerState',{url:playerRef.current.props.url,
      time:playerRef.current.getCurrentTime(),
      playing:playerRef.current.props.playing},
      (response)=>{
        console.log(response)
    })
    console.log(playerRef.current.getCurrentTime(),"nbkjhjkfkj")
  })
},[]);

let trys = '';
useEffect(()=>{
  socket.on('getPlayerInfo',(playerInfo)=>{
    console.log(playerInfo)
  
    SetPlayerData(playerInfo);
    })
},[])

// const [PlayerState, SetPlayerState] = useState(player);

useEffect(()=>{
  console.log(playerData);
},[playerData.playing])


  // const Videosync =( ) => {
  //   seek.current.seekTo(PlayerState,'seconds');
  // }

  return (
    <div className="outerContainer">
      <Video playerRef={playerRef} playerInfo={playerData} setPlayerInfo = {SetPlayerData}/>
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      {/* <TextContainer users={users}/> */}
      {/* <button onClick= {()=> console.log(playerData)}>Click Chat.js</button> */}
 
      
    </div>
  );
}

export default Chat;