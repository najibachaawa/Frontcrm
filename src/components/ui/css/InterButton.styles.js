import React from "react";

import styled, { css, keyframes } from "styled-components";

const MoveAnimation = keyframes`
from{
right:146px;
}

to{
right:-14px;
}
`
export const Button = styled.button`
margin:20px;
  background-color: #ffffff; /* Green */
  border: 2px #2A878F solid;
  color: #2A878F;
  display:flex;
  padding: 15px 32px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  cursor:pointer;
  overflow:hidden;
  width:130px;
  transition: 1.3s;
  img{
    padding-left:50px:
  }
  &&:hover{
    width: 160px;
    img{
        right:-14px;
        padding:10px;
    }
  }
`

export const Arrow = styled.img`
background-color: #2A878F;
padding:10px;
width:50px;
padding:100px;
position:relative;
top:-15px;
right: 300px;
transition: 1.3s;
&&:hover{

}
`