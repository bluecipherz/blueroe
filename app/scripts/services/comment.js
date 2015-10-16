'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.Comment
 * @description
 * # Comment
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Comment', function ($resource, TokenHandler, Hoster) {
    // Service logic
    // ...

    var Comment = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/feeds/:feedid/comments/:commentid'),
      ['save', 'delete']
    );

    // Public API here
    return {
      postComment: function (data) {
        console.log(data);
        return Comment.save(data);
      },
      deleteComment: function(data) {
        return Comment.delete(data);
      }
    };
  });
