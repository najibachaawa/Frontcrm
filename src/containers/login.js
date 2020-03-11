 import React  from 'react'
 import { Form, Input,Button, Checkbox,message } from 'antd';
 import classes from "../components/layout/css/header.module.scss";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Footer from '../components/layout/Footer'
import HeaderUser from '../components/layout/HeaderUser'
import {Link} from 'react-router-dom'
import Auth from './auth'

class  Login  extends React.Component{
    handleSubmit =(e)=>{
        e.preventDefault()
       message.success('bien')
            


    }
  render(){
  return (
    <div>
   <HeaderUser></HeaderUser>
     
      <article className="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Taper votre email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'taper votre mot de passe',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Mot de passe"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
         Mot de passe oublié
        </a>
      </Form.Item>

      <Form.Item>
  
        <Button type="primary" htmlType="submit" className="login-form-button"
         onClick={()=>{Auth.login(()=>{
          this.props.history.push('/home')
         })}}>
           Se connecter
          
        </Button>
      
       <Link to="/register">S'inscrire!</Link>
      </Form.Item>
    </Form>
    </article>

     </div>
    
  );
}};
export default Login