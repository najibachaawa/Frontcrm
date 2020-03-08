import React, { useState } from 'react';


//Components
import SideNav from './SideNav';
import classes from './responsiveHeader.module.scss';
//import logo from '../logo.jpg';

const ResponsiveHeader = ({ match }) => {
	const [ opened, setOpened ] = useState(false);
	return (
		<div>
		<div className={classes.nav}>
			
			
			{/* <img
        src={"logo"}
        style={{
          width: "70px",
          position: "relative",
          right: "0",
          margin: "5px"
        }}
        alt="Logo"
      /> */}

			
		</div>
		<div className={classes.sidenav}>
				{opened ? (
					<div style={{ height: '700px' }} className=" sidenav animated slideInLeft">
						<SideNav matche={match} setOpen={setOpened} navitems={[ 'Home', 'Contact' ]} />{' '}
					</div>
				) : (
					<div />
				)}
			</div>
		</div>
	);
};

export default ResponsiveHeader;
