import React, { useState } from 'react';


//Components
import SideNav from './SideNav';
import classes from './responsiveHeader.module.scss';
import logo from '../logo.jpg';

const ResponsiveHeader = ({ match }: any) => {
	const [ opened, setOpened ] = useState(false);
	return (
		
		<div className={classes.sidenav}>
				{opened ? (
					<div style={{ height: '700px' }} className=" sidenav animated slideInLeft">
						<SideNav matche={match} setOpen={setOpened} navitems={[ 'Home', 'Contact' ]} />{' '}
					</div>
				) : (
					<div />
				)}
			</div>
	
	);
};

export default ResponsiveHeader;
