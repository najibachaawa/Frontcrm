import React  from 'react'
import { Form, Input,Button, Checkbox,message } from 'antd';
import classes from "../components/layout/css/header.module.scss";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import {Link} from 'react-router-dom'
import { vnueron} from '../img/vnueron.jpg'

class  Register extends React.Component{
   handleSubmit =(e)=>{
       e.preventDefault()
      message.success('bien')
           


   }
 render(){
 return (
   <div>
    <Header></Header>

     <article className="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
     <div class="tc">
     <img src={vnueron} class="br-100 h4 w4 dib ba b--black-05 pa2" /></div>
   <Form
     name="normal_login"
     className="login-form"
     initialValues={{
       remember: true,
     }}
     
   >
     <Form.Item
       name="username"
       rules={[
         {
           required: true,
           message: 'Please input your Username!',
         },
       ]}
     >
       <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
     </Form.Item>
     <Form.Item
       name="email"
       rules={[
         {
           required: true,
           message: 'Please input your Email!',
         },
       ]}
     >
       <Input  type="email" placeholder="Email" />
     </Form.Item>
     <Form.Item
       name="password"
       rules={[
         {
           required: true,
           message: 'Please input your Password!',
         },
       ]}
     >
       <Input
         prefix={<LockOutlined className="site-form-item-icon" />}
         type="password"
         placeholder="Password"
       />
     </Form.Item>
    

     <Form.Item>
 
       <Button type="primary" htmlType="submit" className="login-form-button"
        onClick={this.handleSubmit}>
         Register
       </Button>
     
       Or <Link to="/login">login</Link>
     </Form.Item>
   </Form>
   </article>
   <Footer></Footer>
    </div>
   
 );
}};
export default Register