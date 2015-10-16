'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.Status
 * @description
 * # Status
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Status', function ($resource, TokenHandler, Hoster) {
    // Service logic
    // ...

    var Status = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/statuses/:statusid'),
      ['all', 'save', 'delete', 'update']
    );
    
    var ProjectStatus = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/projects/:projectid/statuses/:statusid'),
      ['all', 'save', 'delete', 'update']
    );

    // Public API here
    return {
      postStatus: function (data) {
        if(data['projectid']) {
          console.log('poststatus projectid specified');
          return ProjectStatus.save(data);
        } else {
          console.log('poststatus projectid not specified');
          return Status.save(data);
        }
          return Status.save(data);
      },
      deleteStatus: function(data) {
        if(data['projectid']) {
          return ProjectStatus.delete(data);
        } else {
          return Status.delete(data);
        }
      }
    };
  });
