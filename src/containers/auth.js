import React from 'react'


class Auth extends React.Component {
    constructor(props){
        super(props)
        this.authenticated=false;
    }
    login(cb){
        this.authenticated=true;
        cb()
    }
    logout(cb){
        this.authenticated=false;
        cb()
    }
    isAuthenticated(){
        return this.authenticated;
    }


}
export default new Auth();