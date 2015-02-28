/*jslint node:true plusplus:true  white:true */
'use strict';

/*
 * once again, the prescribed solution is much simpler than the 
 * code i constructed. i don't actually understand why their code
 * works. i need sleep before i can finish comprehending it.
 *
 */

function loadUsers(userIds, load, done) {
  var users = [];
  var userCount = 0;
  
  function loadedUser (userIndex, userObj) {
    users[userIndex] = userObj;
    userCount++;
    if (userCount === userIds.length) {
      done(users);
    }
  }

  userIds.forEach(function (userId, index) {
    load(userId, (function (userIndex) {
      return function () {
        loadedUser.apply(null, [userIndex].concat(Array.prototype.slice.call(arguments)));
      };
    })(index));
  });
}

module.exports = loadUsers;
