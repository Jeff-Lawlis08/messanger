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
  const container = $('.container');
  container.append(userLogin);

  const button = $('.button');



  $('.button').on('click', function(e) {
  newUser.name = $('.login').val();
  location.hash='chat';
  });

}



export default renderLogin;
