/*jslint node:true plusplus:true  white:true */
'use strict';

function userCheck (validUsers) {
  return function validateUsers(users) {
    return users.every(function (userA) {
      return (validUsers.some(function (userB) {
        return userB.id === userA.id;
      }));
    });
  };
}

module.exports = userCheck;