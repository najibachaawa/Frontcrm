import React, { Component } from 'react';

  export default class SingleMember extends React.Component{
      constructor(props){
          super(props)
          
      }
render(){

    return(
        <div>
              {this.props.name}
        </div>
      
    )
}




}
