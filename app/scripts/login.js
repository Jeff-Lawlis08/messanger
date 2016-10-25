import $ from 'jquery';

import UserInfo from './session';
import renderChat from './chat';

function renderLogin(newUser) {
  let userLogin = $(`
  <form>
    <input class="login" type="text" placeholder="username" value="">
    </input>
    <button class="button" type="button">Login</button>
  </form>`);
  let container = $('.container');
  container.append(userLogin);

  let button = $('.button');



  $('.button').on('click', function(e) {
  let user = $('.login').val();
  newUser.name = user;
  renderChat(newUser);
  });

}



export default renderLogin;
