import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { Link } from 'react-router-dom';
//import AdminWrapper from './style';
//import AdminContent from './style';
//import IntlMessages from '../../components/utility/intlMessages';
import { Button,Toast, ToastBody, ToastHeader,
  InputGroup, Label, Input,
Table, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import   { Popconfirm} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
//import { updateLocale } from 'moment';
//import { InputGroup } from '../../components/uielements/input';
class Users extends React.Component{

state={
  users:
  [{
    id: 1,
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
    prénom :"Benjamin",
    nom: "Jacobi",
    email:"email@gmail.com",  spécialité: "abc"
   
   
  }, {
    id: 2,
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg",
    prénom :"Clementina",
    nom: "Hahn",
    email:"email@gmail.com",
    spécialité: "abc",
   
  }],
  NewUserModal:false,
  EditUserModal:false,
  newUserData:{
prénom:'',
nom:'',
email:'',
spécialité:'',
current:'',id:''

  },
  editUserData:{
id:'',
prénom:'',
nom:'',
email:'',
spécialité:''

  }
}
toggleNewUserModal(){
  this.setState({
    NewUserModal:!this.state.NewUserModal
  }
   
  )
}
toggleEditUserModal(){
  this.setState({
    EditUserModal:!this.state.EditUserModal
  }
   
  )
}
AddUser=(e)=>{
  e.preventDefault();
  let users=this.state.users;
  let id = users[users.length -1].id +1
  this.state.newUserData.id = id;
  users.push(this.state.newUserData);

  this.setState({users,NewUserModal:false,newUserData:{
   prénom:'',
   nom:'',
   email:'',
   spécialité:'' 
  }}
  );

   
 
}
updateUser(){
  let{prénom,nom,email,spécialité}=this.state.editUserData;
this.setState(
  {
  EditUserModal:false,
  id:'',
  prénom:'',
  nom:'',
  email:'',
  spécialité:'' 

  })
      
}

editUser(id,prénom,nom,email,spécialité){
  this.setState(
  {
    editUserData:
    {id,prénom,nom,email,spécialité},EditUserModal:!this.state.EditUserModal
  
  })
  

}
onDelete=(e,index)=>{

  const users=Object.assign([],this.state.users);
  users.splice(index,1);
  this.setState({users:users})
  /*return (
  <Popconfirm title="Are you sure？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
    </Popconfirm>
)*/
}

 


    render()
    

    {
     

       let users=this.state.users.map((user,index)=>{
        return (
         
        <tr    key={user.id}>
                           <td>{user.id}</td>
                           <td>{user.prénom}</td>
                           <td>{user.nom}</td>
                           <td>{user.email}</td>
                           <td>{user.spécialité}</td>
                           <td>
                            <Button type="success" size="sm" className="mr-1" 
                            onClick={this.editUser.bind(this,user.id,user.prénom,user.nom,user.email,user.spécialité)}>modifier</Button>{' '}
                          
                             <button className="btn btn-danger"onClick={this.onDelete} >supprimer</button>{' '}

                             </td>
                        
                         </tr>)

      });
        return(
            
        <article   className="mw8 center bg-white shadow-7 br3 pa3 pa4-ns mv3 ba b--black-10">
              <Button  color="primary"className="my-2"   onClick={this.toggleNewUserModal.bind(this)}>Ajouter un nouveau membre</Button>
              <Modal isOpen={this.state.NewUserModal} toggle={this.toggleNewUserModal.bind(this)} >
                <ModalHeader toggle={this.toggleNewUserModal.bind(this)}>Ajouter un nouveau membre</ModalHeader>
                <ModalBody>
             
               <Label for="prénom">prénom</Label>
               <Input type="text"  id="prénom" value={this.state.newUserData.prénom}
                  onChange={(e)=>{
                    let {newUserData}=this.state;
                    newUserData.prénom=e.target.value;
                    this.setState(newUserData)
                  }}/>
               <Label for="nom">nom</Label>
               <Input type="text" id="nom" value={this.state.newUserData.nom} 
                onChange={(e)=>{
                    let {newUserData}=this.state;
                    newUserData.nom=e.target.value;
                    this.setState(newUserData)
                  }} />
               <Label for="Email">Email</Label>
               <Input type="email" name="email" id="email" vale={this.state.newUserData.email}
                onChange={(e)=>{
                  let {newUserData}=this.state;
                  newUserData.email=e.target.value;
                  this.setState(newUserData)
                }} />
               <Label for="spécialité">spécialité</Label>
               <Input type="select"  id="spécialité" value={this.state.newUserData.spécialité}
                onChange={(e)=>{
                  let {newUserData}=this.state;
                  newUserData.spécialité=e.target.value;
                  this.setState(newUserData)
                }}>
                 <option>1</option>
                 <option>2</option>
                 <option>3</option>
                 <option>4</option>
                 <option>5</option>
                 </Input>
              
              </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={this.AddUser.bind(this)}  >Ajouter un nouveau</Button>{' '}
          <Button color="secondary" onClick={this.toggleNewUserModal.bind(this)}>Annuler</Button>
        </ModalFooter>
           </Modal>







           <Modal isOpen={this.state.EditUserModal} toggle={this.toggleEditUserModal.bind(this)} >
                <ModalHeader toggle={this.toggleEditUserModal.bind(this)}>Modifier</ModalHeader>
                <ModalBody>
             
               <Label for="prénom">prénom</Label>
               <Input type="text"  id="prénom" value={this.state.editUserData.prénom}
                  onChange={(e)=>{
                    let {editUserData}=this.state;
                    editUserData.prénom=e.target.value;
                    this.setState(editUserData)
                  }}/>
               <Label for="nom">nom</Label>
               <Input type="text" id="nom" value={this.state.editUserData.nom} 
                onChange={(e)=>{
                    let {editUserData}=this.state;
                    editUserData.nom=e.target.value;
                    this.setState(editUserData)
                  }} />
               <Label for="Email">Email</Label>
               <Input type="email" name="email" id="email" value={this.state.editUserData.email}
                onChange={(e)=>{
                  let {editUserData}=this.state;
                  editUserData.email=e.target.value;
                  this.setState(editUserData)
                }} />
               <Label for="spécialité">spécialité</Label>
               <Input type="select"  id="spécialité" value={this.state.editUserData.spécialité}
                onChange={(e)=>{
                  let {editUserData}=this.state;
                  editUserData.spécialité=e.target.value;
                  this.setState(editUserData)
                }}>
                 <option>1</option>
                 <option>2</option>
                 <option>3</option>
                 <option>4</option>
                 <option>5</option>
                 </Input>
              
              </ModalBody>
          <ModalFooter>
          <Button color="primary" onClick={this.updateUser.bind(this)}  >Modifier</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditUserModal.bind(this)}>Annuler</Button>
        </ModalFooter>
           </Modal>
          
        <Table id="myTable" >

                       <thead>
                         <tr>
                           <th>#</th>
                           <th>prénom</th>
                           <th>nom</th>
                           <th>email</th>
                           <th>spécialité</th>
                          
                           <th>actions</th>
                         </tr>
                       </thead>
                       <tbody>
                         {users}
                       </tbody>
       </Table>

       
          
           
      </article>
            
        )
    }
}
export default Users;