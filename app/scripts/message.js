import $ from 'jquery';

import renderLogin from './login';
import renderChat from './chat';
import UserInfo from './session';
import getData from './getRefresh';

function Message(sender, body) {
  'use strict';
  this.sender=sender;
  this.body=body;
  this.timestamp=new Date();
  return this;
}
Message.prototype.save = function () {
  let settings = {
url: 'http://tiny-za-server.herokuapp.com/collections/messanger/',
type: 'POST',
success: function(data, status, xhr) {
    getData(newUser);
},
error: function () {
  console.log('the post didnt work');
},
contentType: 'application/json',
data: JSON.stringify(this)
};

$.ajax(settings);
};


Message.prototype.delete = function () {
  let delSettings = {
    url: 'http://tiny-za-server.herokuapp.com/collections/messanger/'+id,
    type: 'DELETE',
    success: function (data, status, xhr) {
      $('.message').remove();
    },
    error: function () {
      console.log('delete didn\'t work');
    }
  };
  $.ajax(delSettings);
};

export default Message;
