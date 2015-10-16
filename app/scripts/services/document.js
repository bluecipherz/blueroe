'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.Document
 * @description
 * # Document
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Document', function (TokenHandler, $resource, Hoster) {
    // Service logic
    // ...

    var Document = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/projects/:projectid/documents'),
      ['query', 'save', 'delete']
    );

    // Public API here
    return {
      uploadFile: function (data) {
        return Document.save(data);
      }
    };
  });
