import $ from 'jquery';

import renderLogin from './login';
import renderChat from './chat';
import UserInfo from './session';

function Message(sender, body, timestamp) {
  this.sender=sender;
  this.body=body;
  this.timestamp=new Date();
}
Message.prototype.save = function (newMessage) {
  let settings = {
url: 'http://tiny-za-server.herokuapp.com/collections/messanger/',
type: 'POST',
success: function(data, status, xhr) {
  console.log('message sent!');
},
error: function () {
  console.log('the post didnt work');
},
contentType: 'application/json',
data: JSON.stringify(newMessage)
};
};
$.ajax(settings);
};


Message.prototype.delete = function () {};

export default Message;
