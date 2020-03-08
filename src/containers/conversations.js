import React, { Component } from 'react';
import './css/Team.css'
import {Button} from 'reactstrap'
import {Badge}from 'antd'
class conversation extends React.Component{

    state={
      Conversations:[ {
        id: 1,
        client: "Natarajah",
      topic:"topic1",
        status:"actif",
        image: "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
      },
      {
        id: 2,
        client: "Krot",
        topic:"topic1",
        status:"inactif",
        image:
          "http://forums.animeboston.com/download/file.php?avatar=11355_1455595397.png"
      },
      {
        id: 3,
        client: "Mandala",
       topic:"topic3",
        image: "http://avatars-cdn.9gag.com/avatar/erickson8903_14899765_100.jpg"
      },
      {
        id: 4,
        name: "Shiva",
        phoneNumber: "0638546385",
        image:
          "https://38.media.tumblr.com/4249a67e76729e9126ef3f70e741c323/tumblr_inline_mixcyvIPd81qz4rgp.jpg"
      }]}
      
      searchHandler =(event)=> {
        let searcjQery = event.target.value.toLowerCase()
        this.setState({
        Conversations:this.state.Conversations.
        filter(el => {
                let searchValue = el.client.toLowerCase();
                return searchValue.indexOf(searcjQery) !== -1;
              })
        }
            )
      
      }
    render() {
        let Conversations=this.state.Conversations.map((conversation,index)=>{
        return(
           
            <ul    key={conversation.id}>
            {conversation.client}
            <img src={conversation.image} className="img" />
            {conversation.topic}
            <Button type="success" size="sm" className="mr-1" >Voir conversation</Button>
      
           
             
         
         
            
            
         
          </ul>)})
        
              return(
                <div className="holder">
        <input type="text" classNAme="search" onChange={this.searchHandler} />
       {Conversations}

          
          </div>
        )
    
}
}
export default conversation