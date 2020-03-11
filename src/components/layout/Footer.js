import React from 'react';
import classes from './css/footer.module.scss';
import logo from './../../img/logo.svg';
import { Link } from 'react-router-dom';
import Button from './../../components/ui/Button';


;

const Footer = () => {
	return (
		<div className={classes.wrapper}>
			

			
			<div className={classes.copyrigth}>
				<p>Vneuron 2020</p>
			</div>
		</div>
	);
};
export default Footer;
