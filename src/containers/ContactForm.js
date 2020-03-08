import { Input } from 'antd';
import React, { useEffect } from 'react';
import classes from './css/contactform.module.scss';
import ButtonMine from '../components/ui/Button';
import form from './../hoc/form';
//import withApis from '../hoc/withApi';
//import { CreateNewContact } from './../requests/requests';
import axios, { AxiosResponse } from 'axios';
import { Button, notification } from 'antd';
const { TextArea } = Input;

const ContactForm = () => {
	
	
	
	return (
		<div>
			<div className={classes.input}>
				<Input
					
					name="Votre nom"
					placeholder="Votre Nom"
					
				/>
			</div>
			<div className={classes.input}>
				<Input
					name="email"
					placeholder="Email"
					
				/>
			</div>
			<div>
				<TextArea
				
					name="message"
					placeholder="Your message"
					rows={4}
				
				/>
			</div>
			<div
				
				className={classes.button}
			>
				<ButtonMine content="Envoyer" width="120px" height="50px" path={'/'} executed={true} />
			</div>
		</div>
	);
};

export default ContactForm;

