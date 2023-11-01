import React, { useEffect } from 'react'
import SocketSingleton from '.'

function ExampleSingleton(place:string) {


  const socketClass = SocketSingleton.getInstance(place)


  useEffect(()=>{
    const URL = "wss://YOUR_SOCKET_URL"
    socketClass.connect(URL)


    socketClass.send('Hello, WebSocket!');

  },[])
 
  
}

export default ExampleSingleton