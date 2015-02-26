/*jslint node:true plusplus:true  white:true */
'use strict';

function getShortMessages (messages) {
  return messages.filter(function (message) {
    return (message.message.length < 50);
  }).map(function (message) {
    return message.message;
  });
}

module.exports = getShortMessages;