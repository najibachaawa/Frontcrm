import React, { Fragment, useState } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import HeaderUser from './../components/layout/HeaderUser';
import Footer from './../components/layout/Footer';
import classes from './../components/layout/css/withlayoutroute.module.scss';
import Services from './Services';
import DevProccess from './DevProccess';
//import ResponsiveHeader from './responsiveheader/ResponsiveHeader';
//import { useDidMount } from './../../hooks/useLifeCycle';
//import Logo from './Logo';


const  HomeUser = ({ ...props }) => {
	const [ state, setState ] = useState(1800);
	const resize = () => {
		if (window.innerWidth < 700) {
			setState(600);
		} else {
			setState(1800);
		}
	};
	window.addEventListener('resize', resize);
;
	return (
		<Fragment>
		 <HeaderUser />
		 <br></br>
		 <br></br>
		 <br></br>
         <div className={classes.services} style={{marginLeft:"100px"}}>
				<Services />
			</div>
            <hr></hr>
			<div className={classes.process} style={{marginLeft:"100px"}}>
				<DevProccess />
			</div>
       
			
			<div className={classes.footer}>
				<Footer />
			</div>
		</Fragment>
	);
};
export default  HomeUser