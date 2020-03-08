import React, { Fragment } from 'react';
import notfound from './../../img/404.svg';

const NotFound = () => (
	<Fragment>
        <h1>Not found !!</h1>
        
		<img src={notfound} alt="notfound" style={{ width: '500px', position:"absolute",top:"100px",left:"400px" }} />
	</Fragment>
);

export default NotFound;
