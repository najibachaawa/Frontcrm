import React,{ useState , Component } from "react";
import {Card,Avatar,List, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import NavItem from "../components/ui/NavItem";
import  { DropdownMenu,DropdownItem,Badge, DropdownToggle } from "reactstrap";
const TopBarUser = ({ match }) => {
   
    const menu = (
      <Menu >
        <Menu.Item>
          <NavItem content="Profil" path={"/conversations"}  >
      
          </NavItem>
        </Menu.Item>
        <Menu.Item>
        <NavItem content="Notes" path={"/Notes"}  >
      
      </NavItem>
        </Menu.Item>
        <Menu.Item>
        <NavItem content="Logout" path={"/"}  >
      
       </NavItem>
        </Menu.Item>
      </Menu>
    );
    return (
        <Dropdown overlay={menu} > 
          
          <Avatar   style={{width:"40px",marginLeft:"210px"}}  
            size="128" icon={<UserOutlined />}></Avatar>
          </Dropdown>
       )
}
    export default TopBarUser;









  
       
        