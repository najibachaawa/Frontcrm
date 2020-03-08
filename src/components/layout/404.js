import React, { Fragment } from 'react';
import notfound from './../../img/rob.png';

const NotFound = () => (
	<Fragment>
        <h1>Not found !!</h1>
        
		<img src={notfound} alt="notfound" style={{ height:'100%',width:'30%', position:"absolute",top:"100px",left:"400px" }} />
	</Fragment>
);

export default NotFound;