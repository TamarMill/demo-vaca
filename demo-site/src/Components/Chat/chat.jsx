

import {
    TextField,
    FormControl,
    IconButton,
    Select,
    InputLabel,
    MenuItem,
    Button
  } from "@mui/material";
  
  
  import { useInterval } from "./UseInterval";
  

  import React, { useEffect, useState } from "react";
  import SendTwoToneIcon from "@mui/icons-material/Send";

export function Chat(){

const [user, setUser] = useState("");
const [message, setMessage] =useState("");
const [chats, setChats] = useState([{id: "",name:""}]);
const [currentChat, setCurrentChat] =useState({});
const [chatName, setChatName] = useState("");
const [messages, setMessages] = useState([{}]);

const handleChatName = (event) => {
    setChatName(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  
function addChat() {
    const chatNames = {
      name: chatName,
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(chatNames),
    });
  }


function addMessage() {
    const addMessages = {
       chatId: currentChat.id,
       username: user,
       text: message,
};
setMessage("");
fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(addMessages),
  });
}

useInterval(() => {
  fetch(`https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats`)
    .then((response) => response.json())
    .then((data) => {
      setChats(data.Items);
    });
}, 1000);

useInterval(
  (params) => {
    const chatId = params[0];
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        setMessages(data.Items);
      });
  },
  1000, 
  
  currentChat.id
);

return (
    <div className="Chats">
      <header id="header">Chat Rooms</header>
            
      
      <InputLabel id="label">Create a new chat</InputLabel>
           
              <TextField
                id="filled"
                onChange={handleChatName}
                value={chatName}
                placeholder="Enter New Chat Name"
              />

              <Button aria-label="send" onClick={addChat}>
                {"Create Chat"}
                </Button>
           
     
    <div>
    
<InputLabel id="demo-simple-select-label">Select an existing chat</InputLabel>
    <FormControl fullWidth>
   
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      
    >
        {chats.map ((chat)=> (
        <MenuItem 
        value={chat.id} 
        onClick = {()=>  setCurrentChat(chat)}
        >{chat.name} </MenuItem>))}
      </Select>
  </FormControl>
            </div>
<div id="messages">
              {messages.map((message) => (
                <MenuItem key={message.id} value={message.id}>
                  {message.username}: {message.text}
                </MenuItem>
              ))}
            </div>
                
                <FormControl fullwidth>
                  <TextField
                    onChange={handleUserChange}
                    value={user}
                    label="Enter User Name"
                    variant="outlined"
                  />
                </FormControl>
              
                <FormControl fullwidth>
                  <TextField
                    onChange={handleMessageChange}
                    value={message}
                    label="Enter message"
                    variant="outlined"
                  />
                </FormControl>
                <IconButton aria-label="send" color="primary">
                  <SendTwoToneIcon onClick={addMessage}></SendTwoToneIcon>
                </IconButton>
           </div>
  );
}




export default Chat;