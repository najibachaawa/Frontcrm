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
    firstName: "Benjamin",
    lastName: "Jacobi",
    email:"email@gmail.com",  speciality: "abc"
   
   
  }, {
    id: 2,
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg",
    firstName: "Clementina",
    lastName: "Hahn",
    email:"email@gmail.com",
    speciality: "abc",
   
  }],
  NewUserModal:false,
  EditUserModal:false,
  newUserData:{
firstName:'',
lastName:'',
email:'',
speciality:'',
current:'',id:''

  },
  editUserData:{
id:'',
firstName:'',
lastName:'',
email:'',
speciality:''

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
   firstName:'',
   lastName:'',
   email:'',
   speciality:'' 
  }}
  );

   
 
}
updateUser(){
  let{firstName,lastName,email,speciality}=this.state.editUserData;
this.setState(
  {
  EditUserModal:false,
  id:'',
  firstName:'',
  lastName:'',
  email:'',
  speciality:'' 

  })
      
}

editUser(id,firstName,lastName,email,speciality){
  this.setState(
  {
    editUserData:
    {id,firstName,lastName,email,speciality},EditUserModal:!this.state.EditUserModal
  
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

 myFunction=() =>{
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}


    render()
    

    {
     

       let users=this.state.users.map((user,index)=>{
        return (
         
        <tr    key={user.id}>
                           <td>{user.id}</td>
                           <td>{user.firstName}</td>
                           <td>{user.lastName}</td>
                           <td>{user.email}</td>
                           <td>{user.speciality}</td>
                           <td>
                            <Button type="success" size="sm" className="mr-1" 
                            onClick={this.editUser.bind(this,user.id,user.firstName,user.lastName,user.email,user.speciality)}>edit</Button>{' '}
                          
                             <button className="btn btn-danger"onClick={this.onDelete} >delete</button>{' '}

                             </td>
                        
                         </tr>)

      });
        return(
            
        <article   className="mw8 center bg-white shadow-7 br3 pa3 pa4-ns mv3 ba b--black-10">
              <Button className="my-2" color="success" onClick={this.toggleNewUserModal.bind(this)}>Add Member</Button>
              <Modal isOpen={this.state.NewUserModal} toggle={this.toggleNewUserModal.bind(this)} >
                <ModalHeader toggle={this.toggleNewUserModal.bind(this)}>Add new Member</ModalHeader>
                <ModalBody>
             
               <Label for="firstName">firstName</Label>
               <Input type="text"  id="firstName" value={this.state.newUserData.firstName}
                  onChange={(e)=>{
                    let {newUserData}=this.state;
                    newUserData.firstName=e.target.value;
                    this.setState(newUserData)
                  }}/>
               <Label for="lastName">lastName</Label>
               <Input type="text" id="lastName" value={this.state.newUserData.lastName} 
                onChange={(e)=>{
                    let {newUserData}=this.state;
                    newUserData.lastName=e.target.value;
                    this.setState(newUserData)
                  }} />
               <Label for="Email">Email</Label>
               <Input type="email" name="email" id="email" vale={this.state.newUserData.email}
                onChange={(e)=>{
                  let {newUserData}=this.state;
                  newUserData.email=e.target.value;
                  this.setState(newUserData)
                }} />
               <Label for="Speciality">Speciality</Label>
               <Input type="select"  id="Speciality" value={this.state.newUserData.speciality}
                onChange={(e)=>{
                  let {newUserData}=this.state;
                  newUserData.speciality=e.target.value;
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
          <Button color="primary" onClick={this.AddUser.bind(this)}  >Add New User</Button>{' '}
          <Button color="secondary" onClick={this.toggleNewUserModal.bind(this)}>Cancel</Button>
        </ModalFooter>
           </Modal>







           <Modal isOpen={this.state.EditUserModal} toggle={this.toggleEditUserModal.bind(this)} >
                <ModalHeader toggle={this.toggleEditUserModal.bind(this)}>Edit</ModalHeader>
                <ModalBody>
             
               <Label for="firstName">firstName</Label>
               <Input type="text"  id="firstName" value={this.state.editUserData.firstName}
                  onChange={(e)=>{
                    let {editUserData}=this.state;
                    editUserData.firstName=e.target.value;
                    this.setState(editUserData)
                  }}/>
               <Label for="lastName">lastName</Label>
               <Input type="text" id="lastName" value={this.state.editUserData.lastName} 
                onChange={(e)=>{
                    let {editUserData}=this.state;
                    editUserData.lastName=e.target.value;
                    this.setState(editUserData)
                  }} />
               <Label for="Email">Email</Label>
               <Input type="email" name="email" id="email" value={this.state.editUserData.email}
                onChange={(e)=>{
                  let {editUserData}=this.state;
                  editUserData.email=e.target.value;
                  this.setState(editUserData)
                }} />
               <Label for="Speciality">Speciality</Label>
               <Input type="select"  id="Speciality" value={this.state.editUserData.speciality}
                onChange={(e)=>{
                  let {editUserData}=this.state;
                  editUserData.speciality=e.target.value;
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
          <Button color="primary" onClick={this.updateUser.bind(this)}  >Edit</Button>{' '}
          <Button color="secondary" onClick={this.toggleEditUserModal.bind(this)}>Cancel</Button>
        </ModalFooter>
           </Modal>
           <input type="text" id="myInput" onkeyup={this.myFunction} placeholder="Search for names.."/>
        <Table id="myTable" >

                       <thead>
                         <tr>
                           <th>#</th>
                           <th>firstName</th>
                           <th>lastName</th>
                           <th>email</th>
                           <th>speciality</th>
                          
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