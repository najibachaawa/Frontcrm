import React ,{Component} from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import {Card}from 'reactstrap' 
class ConversationWindow extends React.Component{
    render(){
        return(
            <Card style={{marginTop:'10px',width:'300px'}}>
             <Header></Header>
            <Content></Content>
            <Footer></Footer>

            </Card>
            
        )
        
    }

}
    

export default ConversationWindow