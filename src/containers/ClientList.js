import React, { Component } from 'react';
//import './css/Team.css'
import {Button,Card,CardBody} from 'reactstrap'
import {Badge,List}from 'antd'

class ClientList extends React.Component{

    state={
      clients:[ {
        id: 1,
        name: "Natarajah",
        message:"lorem hhhh",
        status:"actif",
      
        image: "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
      },
      {
        id: 2,
        name: "Krot",
        message:"lorem welcome",
        status:"absent",
        image:
          "http://forums.animeboston.com/download/file.php?avatar=11355_1455595397.png"
      },
      {
        id: 3,
        name: "Mandala",
        phoneNumber: "0975149873",
        image: "http://avatars-cdn.9gag.com/avatar/erickson8903_14899765_100.jpg"
      },
      ],
      visible: false }
    
      searchHandler =(event)=> {
        let searcjQery = event.target.value.toLowerCase()
        this.setState({
        clients:this.state.clients.
        filter(el => {
                let searchValue = el.name.toLowerCase();
                return searchValue.indexOf(searcjQery) !== -1;
              })
        }
            )
      
      }
      handleShow = data => {
        this.setState({
          client: data,
          visible: true
        });
      };

  
    render() {
         
        const isSelected =this.state.clients.id
        let clients=this.state.clients.map((client,index)=>{
            return(
              
                <List
                key={client.id}>
               <img
            src={client.image}
            className="imag"
            onClick={() => this.handleShow(client)}
            alt="img-logo"
                  />
                
           <Badge status={client.status ?"success":"error"} />
            {client.name}
            {client.message}
                  
            </List>)})
      
              return(
                <div className="container">
                <div className="holder">
        <input type="text" className="search" onChange={this.searchHandler} style={{marginBottom: "20px" }}/>
      <div></div>
        {clients}
        </div>
        
     
      </div>
        );

       
}
}
export default ClientList