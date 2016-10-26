import $ from 'jquery';

import renderLogin from './login';
import Message from './message';
import messageRender from './messageRender';
import UserInfo from './session';
import getData from './getRefresh';

function renderChat(newUser) {

  let messageBlock = $(`
  <div class="room-messages">
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
    const newMessage = new Message(newUser.name, msgContent.val());
    newMessage.save();

  });
  let deleteButton = $('.delete');
  deleteButton.on('click', function (e) {
    Message.delete(newMessage);
  });
}


    //send post to server

  //get posts from server



export default renderChat;
