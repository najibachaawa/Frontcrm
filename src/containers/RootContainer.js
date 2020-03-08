import React from 'react';
import { Switch, Route, RouteComponentProps, matchPath, match } from 'react-router-dom';
import WithLayoutRouter from '../components/layout/WithLayoutRoute';

//Containers
import HomeContainer from './HomeContainer';
import WorkContainer from './WorkContainer';
import ContactContainer from './ContactContainer';
import Login from './login';
import Register from './register';
import Users from './usersContainer';
import List from './teamContainer';
import Conversation from './conversations';
import All from './AllUsers';
import NotFound from '../components/layout/404';

const RootContainer = () => {
	 let role="user"
	return (
		<Switch>
			<WithLayoutRouter path={'/'} exact component={HomeContainer} />
			<Route path={'/login'} exact component={Login} />
			<Route path={'/register'} exact component={Register} />
			<WithLayoutRouter path={'/all'} exact component={All} />
			<WithLayoutRouter path={'/work'} component={WorkContainer} />
			{role=="admin"?<WithLayoutRouter path={'/users'} component={Users} /> :""}
			<WithLayoutRouter path={'/conversations'} component={Conversation} />
			<Route path={'/team'} component={List} />
			/*<WithLayoutRouter path={'/contact'} component={ContactContainer} />*/
			<Route path="*" component={NotFound} />
		</Switch>
	);
};
export default RootContainer;
