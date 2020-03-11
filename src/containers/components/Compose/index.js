import React from 'react';
import {Container} from './Styles';
import  { Input,List,Card ,Badge,Modal,Button,Menu}from 'antd';
import { SendOutlined,PlusOutlined} from '@ant-design/icons'
import TeamContainer from '../../teamContainer'
import{ Link }from 'react-router-dom'
export default class Compose extends React.Component {
state={
  show:false,visible:false,

  members:[ {
    id: 1,
    name: "Natarajah",
    status:"actif",
    topic:"topic1",
    image: "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
  },
  {
    id: 2,
    name: "Krot",
    topic:"topic1",
    status:"absent",
    image:
      "http://forums.animeboston.com/download/file.php?avatar=11355_1455595397.png"
  }]
}
show = () => {
  this.setState({
    
    visible: true
  });
};
showTeam = () => {
  this.setState({
    
    show: true
  });
};
handleOk = e => {
  console.log(e);
  this.setState({
    visible: false,
  });
};
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
handleCancel = e => {
  console.log(e);
  this.setState({
    visible: false,
  })};
  handleAnnuler = e => {
    console.log(e);
    this.setState({
      show: false,
    });
};
  render(){
    
    let members=this.state.members.map((member,index)=>{
      return(
        
          <List   key={member.id}>
         <img
      src={member.image}
      className="imag"
     
            />
          
     <Badge status={member.status ?"success":"error"} />
      {member.name}
            
      </List>)})
   

    return (
      <Container>
        <Input
          type="text"
          placeholder="taper votre message "

         
        />

{<div><SendOutlined   style={{fontSize:"30px",color:"#1d976c"}}/>
          <PlusOutlined   style={{fontSize:"30px",marginRight:"100px",color:"#1d976c"}}
                 onClick= { this.show} /></div>}
        {this.state.visible? (
           <Modal style={{width:"100px"}}
           title="choisir une action"
           visible={this.state.visible}
           onOk={this.handleOk}
           onCancel={this.handleCancel}
         >
           <Button  onClick= { this.showTeam} >Assigner</Button>
           <p>Enregister reponse</p>
           
         </Modal>

        ) : (
          ""
        )}



        {this.state.show? (
           <Menu  style={{marginTop:"-700px" ,border:"solid black"}}>
         <input type="text" className="search" onChange={this.searchHandler} 
         style={{marginBottom: "20px" }}/>{members}
          <Button onClick={this.handleAnnuler}>cancel</Button></Menu>

        ) : (
          ""
        )}
       
    
       
      </Container>
    );
}
}