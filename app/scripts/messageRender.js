import $ from 'jquery';
function messageRender(message, i, arr) {
  let li = $(`<li class="message">${newMessage}</li>`);
  let delButton = $(`<button class="delete" type="button">Delete</button>`);
  $('.container').append(li);
  $('.message').append(delButton);
}
