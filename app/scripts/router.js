import Backbone from 'backbone';
import $ from 'jquery';
import renderLogin from './login';
import renderChat from './chat';
import messageRender from './messageRender';
import UserInfo from './session';
import getData from './getRefresh';

let newUser = new UserInfo();

const routerSettings = {
	routes: {
		''			    : 'renderLogin',
		'chat'      : 'renderChat',
		'*anything' : 'render404'
	},
	renderLogin: () => {
		$('.container').empty();
		renderLogin(newUser);
	},
	renderChat: () => {
		$('.container').empty();
		renderChat(newUser);
    getData(newUser);
    console.log('rendered chat');
	},
	render404: () => {
		$('.container').html('sorry, did not find that');
	}
};

const Router = Backbone.Router.extend(routerSettings);


var router = new Router();

export default router;
