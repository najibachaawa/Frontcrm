import React,{  Component } from "react";
import {List  } from 'antd';
import {
    CardWrapper,
    CardContent,
    CardTextTitle,
    CardTextParag,
    Square,
    NextArrow,
    Row,
  
  } from "../components/ui/css/CardProject.styles";
import HeaderUser from "../components/layout/HeaderUser";
  

export default  class Notes extends React.Component{
state={
    Notes:[
        {id:1,
       text:"Lorem ipsum dolor sit amet consectetur adipiscing elit",
        
       date:"10/02/2020",
        
        member:
                {
        id: 1,
        name: "Natarajah",
      
        image: "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
      }
    },
    {id:2,
        text:"Lorem ipsum dolor sit amet consectetur adipiscing elit",
        date:"10/02/2020",
         member:
                 {
         id: 1,
         name: "Na",
       
         image: "http://avatars-cdn.9gag.com/avatar/erickson8903_14899765_100.jpg",
       }
     }

    ,{id:3,
        text:"Lorem ipsum dolor sit amet consectetur adipiscing elit",
        date:"11/02/2020",
         member:
                 {
         id: 1,
         name: "Najiba",
       
         image: "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
       }
     }

   
    
    ]
    
    


}
    render(){
        let Notes=this.state.Notes.map((note,index)=>{
            return(
           
            <CardWrapper key={note.id}  style={{marginBottom:"40px",marginLeft:"50px" }}>
            <CardContent>
              <CardTextTitle>
              {note.member.name}
              </CardTextTitle>
              <CardTextParag>
              {note.text}
              </CardTextParag>
            </CardContent>
            <CardContent>
              <Row>
                <Square>
                  {note.date}
                </Square>
               
              </Row>
    
              <img
                src={note.member.image}
                style={{
                  position: "relative",
                  zIndex: 0,
                  top: "-25px",
                  width: "150px"
                }}
              />
            </CardContent>
          </CardWrapper>)})
        return(
            
          <div>
          <HeaderUser></HeaderUser>
          <div id="projects"  style={{ display: "flex", flexWrap: "wrap" ,marginTop:"100px"}}  >
        
          {Notes}
          </div>
          </div>


        )

    }
}