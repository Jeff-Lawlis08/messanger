import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import router from './router';

import renderLogin from './login';
import renderChat from './chat';
import UserInfo from './session';
import Message from './message';


Backbone.history.start();


// renderChat();
