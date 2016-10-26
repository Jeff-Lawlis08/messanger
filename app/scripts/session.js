import $ from 'jquery';
import renderLogin from './login';
import renderChat from './chat';
import getData from './getRefresh';

function UserInfo(newUser) {
  'use strict';
  this.name = newUser;
  return this;
}
export default UserInfo;
