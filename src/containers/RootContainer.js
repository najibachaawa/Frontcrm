import React from 'react';
import { Switch, Route, RouteComponentProps, matchPath, match } from 'react-router-dom';
import WithLayoutRouter from '../components/layout/WithLayoutRoute';

//Containers
import HomeContainer from './HomeContainer';
import HomeUser from './HomeUser';
import WorkContainer from './WorkContainer';
import ContactContainer from './ContactContainer';
import Login from './login';
import Register from './register';
import Users from './usersContainer';
import TeamContainer from './teamContainer';
import Conversation from './conversations';
import Chat  from './pages/Chat';
import All from './AllUsers';
import NotFound from '../components/layout/404';
import HeaderChat from './ConversationWindow/HeaderChat'
import ProtectedRoute from './ProtectedRoute'
import Notes from './Notes'


const RootContainer = () => {
	 let role="admin"
	return (
		<Switch>
			<WithLayoutRouter path={'/'} exact component={HomeContainer} />
			<Route exact path={'/home'}  component={HomeUser} />
			<ProtectedRoute exact path={'/Notes'}  component={Notes} />
			<Route exact  path={'/login'}  component={Login} />
			<Route path={'/chat'} exact component={Chat} />
			<Route path={'/register'} exact component={Register} />
			
			<ProtectedRoute path={'/all'} exact component={All} />
			<WithLayoutRouter path={'/work'} component={WorkContainer} />
			{role=="admin"?<WithLayoutRouter path={'/users'} component={Users} /> :""}
			<ProtectedRoute path={'/conversations'} component={Conversation} />
			<ProtectedRoute path={'/team'} component={TeamContainer} />
			
			<ProtectedRoute  path={'/conversation'} component={HeaderChat} />
			
			/*<WithLayoutRouter path={'/contact'} component={ContactContainer} />*/
			<Route path="*" component={NotFound} />
		</Switch>
	);
};
export default RootContainer;
