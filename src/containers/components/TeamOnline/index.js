import React, { Component } from 'react';

import {Button,Card,CardBody} from 'reactstrap'
import {Badge,List}from 'antd'
import {ContainerTeam} from './Styles'
import {Input} from 'antd'
class TeamOnline extends React.Component{

    state={
      members:[ {
        id: 1,
        name: "Natarajah",
        message:"lorem hhhh",
        status:"actif",
      
        image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      },
      {
        id: 2,
        name: "Krot",
        message:"lorem welcome",
        status:"absent",
        image:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      },
      {
        id: 3,
        name: "Mandala",
        phoneNumber: "0975149873",
        image: "http://avatars-cdn.9gag.com/avatar/erickson8903_14899765_100.jpg"
      },
      ],
      note: false }
    
      searchHandler =(event)=> {
        let searcjQery = event.target.value.toLowerCase()
        this.setState({
        members:this.state.members.
        filter(el => {
                let searchValue = el.name.toLowerCase();
                return searchValue.indexOf(searcjQery) !== -1;
              })
        }
            )
      
      }
      handleShow = ()=> {
        this.setState({
          note: true
        });
      };

  
    render() {
         
        const isSelected =this.state.members.id
        let members=this.state.members.map((member,index)=>{
            return(
              
                <List
                itemLayout="horizontal" key={member.id}>
               <img
            src={member.image}
            className="imag"
            onClick={ this.handleShow}
            alt="img-logo"
                  />
                
           <Badge status={member.status ?"success":"error"} />
            {member.name}
                  
            </List>)})
      
              return(
                
        <ContainerTeam>
        <input type="text" className="search" onChange={this.searchHandler} style={{marginBottom: "20px",marginRight:"20px"}}/>
      <div></div>
        {members}
        {this.state.note?(
        <input style={{margin:"auto"}}
        placeholder="taper votre note"></input>):""}
        </ContainerTeam>
        );

       
}
}
export default TeamOnline