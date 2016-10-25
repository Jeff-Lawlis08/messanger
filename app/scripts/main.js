import $ from 'jquery';
import _ from 'underscore';

import renderLogin from './login';
import renderChat from './chat';
import UserInfo from './session';

let newUser = new UserInfo();

renderLogin(newUser);
// renderChat();
