'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.story
 * @description
 * # story
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Story', function ($resource, TokenHandler, Hoster) {
    // Service logic
    // ...

    var createStory = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/project/:project/stories'),
      ['save']
    ); 

    var Story = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/stories/:story', {}, {'update': { method: 'PUT' }}),
      ['update','delete']
    );

    var Sprint = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/sprint/:sprint/stories/:stories', {}, {'update': { method: 'PUT' }}),
      ['update','delete']
    );

    // Public API here
    return {
      createStory:function(data,success,failure) {
        createStory.save(data).$promise.then(success,failure);
      },
      deleteStory:function(data,success,failure) {
        Story.delete(data).$promise.then(success,failure);
      },
      updateStory:function(data,success,failure) {
        Story.update(data).$promise.then(success,failure);
      },
      addToSprint:function(data,success,failure) {
        Sprint.update(data).$promise.then(success,failure);
      },
      deleteFromSprint:function(data,success,failure) {
        Sprint.delete(data).$promise.then(success,failure);
      },
    };
  });
