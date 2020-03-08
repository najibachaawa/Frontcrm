import React, { Component } from 'react';
import {Button,Card,CardBody} from 'reactstrap'
  export default class SingleMember extends React.Component{
    state= {
         
    member: {
        id: 1,
        name: "Natarajah",
        phoneNumber: "0938073320",
        status:"actif",
        topic:"topic1",
        image: "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
      }
    }
      
    
render(){
   let member=this.state.member
    return (
         <Card
        hoverable
        style={{ width: 240 }}>
       
      
           {<img  src={member.image} />}

           <h1>{member.name}</h1> 
            <br></br>
             <h2>Spécialité : {member.topic}</h2>
             <Button type="primary"> envoyer un message</Button>
      </Card>
      );
        
             




}
}
