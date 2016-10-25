import $ from 'jquery';

import renderLogin from './login';
import Message from './message';

function renderChat(newUser) {

  $('.container').empty();
  let messageBlock = $(`
  <div class="room-messages">
    <li></li>
  </div>
  <div class="send-message">
    <textarea class="write" type="text" placeholder="Type Message Here" value=""></textarea>
    <button type="submit" class="submit-message">Send</button>
  </div>`);
  let container = $('.container');
  container.append(messageBlock);
  let send = $('.submit-message');

  send.on('click', function(e) {
    e.preventDefault();
    console.log('hello');
    let msgContent = $('.write');
    let newMessage = new Message(newUser, msgContent.val());
  });
  newMessage.save(newMessage);


    //send post to server

  //get posts from server
let getSettings = {
  url: 'http://tiny-za-server.herokuapp.com/collections/messanger/',
  type: 'GET',
  success: function(data, status, xhr) {
    data.forEach(messageRender);
  }
};
  $.ajax(getSettings);
}



export default renderChat;
