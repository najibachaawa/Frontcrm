import React, { useState } from "react";
import classes from "./css/header.module.scss";
import logo from "./../../img/logo.svg";
import { Link } from "react-router-dom";
import vnueron from '../../img/vnueron.PNG'
import { UserOutlined } from '@ant-design/icons';
//Components
import NavItem from "../ui/NavItem";
import Button from "../ui/Button";
import Logo from "./Logo";
import vneuron from '../../img/vneuron.PNG'
import TopBarUser from './../../containers/TopBarUser'
import { Menu, Dropdown ,Avatar} from 'antd';
import { DownOutlined } from '@ant-design/icons';
const HeaderUser = ({ match }) => {
  const [state, changestate] = useState(true);
  // console.log(match);
  let home = false;
  let work = false;
  let contact = false;
  let team=false;
  let messages=false;
  const menu = (
    <Menu >
      <Menu.Item>
        <NavItem content="Assignements" path={"/conversations"}  >
    
        </NavItem>
      </Menu.Item>
      <Menu.Item>
      <NavItem content="Mes conversations" path={"/chat"}  >
    
    </NavItem>
      </Menu.Item>
      <Menu.Item>
      <NavItem content="tous" path={"/chat"}  >
    
     </NavItem>
      </Menu.Item>
    </Menu>
  );

  
  return (
    <div>
      <div className={classes.wrapper}>
        
        <div className={classes.navigation}>
          <NavItem content="Acceuil" path={"/"} activated={home} />
          {/* <NavItem content="Work" path={"/work"} activated={work} /> */}
          <NavItem content="Contact" path={"/contact"} activated={contact} />
          
        </div>
   
        <div className={classes.logo}>
        <img
           alt="..."
           className="rounded-circle"
          src={vnueron} style={{width:"150px",border:'red',marginLeft:"200px",marginTop:"-5px"}}></img> 
        </div>
        <div className={classes.navigation}>
          <NavItem content="Equipe" path={"/team"} activated={team} />
          {/* <NavItem content="Work" path={"/work"} activated={work} /> */}

          <Dropdown overlay={menu} > 
          
        
           <a  onClick={e => e.preventDefault()}    style={{  color:"gray", marginLeft: "60px",marginTop:"-4px" }}>
           Messages
          </a>
          </Dropdown>
         
          <TopBarUser></TopBarUser>
        </div>
       
      </div> 
    </div>
  );
};
export default HeaderUser;
