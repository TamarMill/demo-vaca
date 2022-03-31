import React from 'react';
import logo from './IMG_9645.PNG';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export const Home=()=>{
   //const[value, setValue]=useState(50);



  const myStyle={
   backgroundColor: 'navy',
    
    width:'100%',
    height:'100%',
    
    };
    const myStyle2={
      backgroundColor: 'navy',
       
       width:'100%',
       height:'100%',
       display: "flex"
       };
    const Style={
      
      
      color: "white",
      marginLeft: "auto",
      marginRight: "auto",
      width: "20%",
      
      };
     const CardStyle={
      
      backgroundColor: "magenta",
      width: "50%",
      padding: "10px",
      display: "block",
       marginLeft: "auto",
       marginRight: "auto",
       width: "50%",
       marginBottom: "2%",
       marginTop: "2%"
      
      
     };
     const ImageStyle={
      display: "block",
       marginLeft: "auto",
       marginRight: "auto",
       width: "10%"
      
      
     };
     const WordStyle={
      
       marginLeft: "40%",
       width: "20%",
       color: "white"

      
      
     };
  
 return  (
   <div style ={myStyle}>
     <h1 style={WordStyle}> Tamar Miller</h1>
     <h3 style={WordStyle}> Welcome to my home page!</h3>
      <img src={logo} alt="Logo"  style={ImageStyle}/>


<p style={WordStyle}> Tami is a Computer Science student at Touro College. She lives in Flatbush with her parents and siblings. Tami enjoys spending time with her friends and family. In her spare time she enjoys playing piano and reading. </p>








<div style ={myStyle2}>
 <Card sx={{ maxWidth: 345 }} style= {CardStyle}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Piano
        </Typography>
        <Typography variant="body2" >
         One of my hobbies is playing piano. I learnt how to play when I was younger and now I enjoy playing in my spare time. 
        </Typography>
      </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345 }} style={CardStyle}>
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       Reading
        </Typography>
        <Typography variant="body2" >
         Whenever I have free time I really love to read.  I specifically enjoy reading historical fiction and mysteries. 
        </Typography>
      </CardContent>
      </Card>
      </div>
      <Accordion>
        <AccordionSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Press to learn about my family</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           My family lives on 34th Steet in Flatbush. My father grew up in Boro Park and my mother grew up in Israel. They got married in 1996 and have nine children. My oldest sister Rivki is married to Shmuel Wurzburger and they have a really cute baby named Dov. My older brother Aaron is in Israel learning in Brisk. Then comes me! Benzion and Yoel are learning in Yeshiva Shaar Hatorah in Queens. Gedalya and Shlomo go to Yeshiva Torah Vodaath in Brooklyn. Esti goes to Masores Bais Yaakov in Brooklyn. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
         
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Press for information about the schools I have attended</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           I went to Prospect Park Yeshiva (aka Bloppy) for elementary school and high school. I have great memories from Prospect and really appreciate all that I learnt there and the friends that I made there. Then I went to Bais Yaakov Machon Raaya in Yerushalayim for seminary. My time in Israel was cut short due to Covid but I really loved all the time I spent there. Now I attend Touro College. I am majoring in Computer Science. I am now in the middle of my third semester and so far I've really been enjoying!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
 </div>
 
 );
}


