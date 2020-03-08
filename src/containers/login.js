 import React  from 'react'
 import { Form, Input,Button, Checkbox,message } from 'antd';
 import classes from "../components/layout/css/header.module.scss";
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import {Link} from 'react-router-dom'

class  Login  extends React.Component{
    handleSubmit =(e)=>{
        e.preventDefault()
       message.success('bien')
            


    }
  render(){
  return (
    <div>
     <Header></Header>

      <article className="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
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
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
  
        <Button type="primary" htmlType="submit" className="login-form-button"
         onClick={this.handleSubmit}>
          Log in
        </Button>
      
        Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
    </article>
    <Footer></Footer>
     </div>
    
  );
}};
export default Login