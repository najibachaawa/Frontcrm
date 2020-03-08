import React, { Fragment, useState } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Header from './Header';
import Footer from './Footer';
import classes from './css/withlayoutroute.module.scss';
import ResponsiveHeader from './responsiveheader/ResponsiveHeader';
import { useDidMount } from './../../hooks/useLifeCycle';
import Logo from './Logo';


const WithLayoutRouter = ({ ...props }) => {
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
		 <Header />
			<div className={classes.body}>
				<Route {...props} />
			</div>
			<div className={classes.footer}>
				<Footer />
			</div>
		</Fragment>
	);
};
export default WithLayoutRouter;
