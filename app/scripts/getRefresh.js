import Backbone from 'backbone';
import $ from 'jquery';
import renderLogin from './login';
import renderChat from './chat';
import messageRender from './messageRender';
import UserInfo from './session';


function getData(newUser){
const getSettings = {
url: 'http://tiny-za-server.herokuapp.com/collections/messanger/',
type: 'GET',
success: function(data, status, xhr) {
  data.forEach((message) => {
    messageRender(message, newUser);
  });
}
};
$.ajax(getSettings);
}

export default getData;
