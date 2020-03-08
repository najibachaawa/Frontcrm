import React from 'react';
import classes from './css/footer.module.scss';
import logo from './../../img/logo.svg';
import { Link } from 'react-router-dom';
import Button from './../../components/ui/Button';

;

const Footer = () => {
	return (
		<div className={classes.wrapper}>
			<hr />
			<div className={classes.row1}>
				<div className={classes.colmun}>
				<p className={classes.title}>Adresse  </p>
				  <p>Cherguia2</p>
				

				</div>

				<div className={classes.contactsection}>
					<p className={classes.title}>Contact  </p>
					<p>Email: vneuron@...</p>
					<p>Phone: 333333</p>
				</div>
			</div>

			<hr />
			<div className={classes.copyrigth}>
				<p>Vneuron 2020</p>
			</div>
		</div>
	);
};
export default Footer;
