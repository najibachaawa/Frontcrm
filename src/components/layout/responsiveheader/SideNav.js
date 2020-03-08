import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
/*import { Icon } from 'antd';*/

import classes from './sidenav.module.scss';
import Button from '../../ui/Button';


const SideNav = ({ navitems, matche, setOpen }) => {
	const navlinks = navitems.map((item) => {
		let path = item === 'Home' ? '/' : item.charAt(0).toLowerCase() + item.substring(1);
		return matche.path === `/${path}` || (matche.path === '/' && item === 'Home') ? (
			<Link
				className={classes.navitem}
				style={{
					color: '#4285F4',
					textDecoration: 'none',
					backgroundColor: '#d3f0ec',
					borderRadius: '5px'
				}}
				to={path}
			>
				{item}
			</Link>
		) : (
			<Link
				className={classes.navitem}
				style={{
					color: 'black',
					textDecoration: 'none'
				}}
				to={path}
			>
				{item}
			</Link>
		);
	});
	return (
		<div className={classes.wrapper}>
			
			{navlinks}

			<div>
				<hr />
				<span
					style={{
						color: '#4285F4',
						position: 'relative',
						bottom: '0px',
						textAlign: 'center'
					}}
				>
					Always updating this
				</span>
				<div style={{padding:"10px"}}>
					<Button path="/contact" content="Hire me" width="100px" height="40px"  executed={false} />
				</div>
				
			</div>
		</div>
	);
};
export default withRouter(SideNav);
