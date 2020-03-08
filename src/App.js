import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
//import { store, persistor } from './store';
import 'antd/dist/antd.css';
import RootContainer from './containers/RootContainer';
import './App.css';
import AOS from 'aos';
//import AOS from "./node_modules/aos/dist/aos.esm.js";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const App= () => {
	return (
		
					<BrowserRouter basename={process.env.PUBLIC_URL}>
						<Route path="/" component={RootContainer} />
					</BrowserRouter>
			
	);
};

export default App;
