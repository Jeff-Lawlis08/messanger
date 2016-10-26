import $ from 'jquery';
import moment from 'moment';
import chatRender from './chat';
import renderLogin from './login';

const messageRender = (message, newUser) => {
  let li = $(`<li class="message">${message.sender} : ${message.body} : ${moment(message.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</li>`);
  let delButton = $(`<button class="delete" type="button">Delete</button>`);
  $('.room-messages').append(li);
  if(message.sender === newUser.name) {
  li.append(delButton);
}
};
export default messageRender;
