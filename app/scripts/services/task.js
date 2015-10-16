'use strict';

/**
 * @ngdoc service
 * @name bluroeApp.Task
 * @description
 * # Task
 * Factory in the bluroeApp.
 */
angular.module('bluroeApp')
  .factory('Task', function (TokenHandler, Hoster, $resource) {
    // Service logic
    // ...

    var observers = [];

    var callbackSet = false;

    var tasks = [];

    var tasklists = [];

    function notifyObservers() {
      angular.forEach(observers, function(callback) {
        callback();
      })
    }

    var Task = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/me/tasks',
        {method:'getTask',q:'*'},
        {'query': { method: 'GET' }}
      ),
      ['query']
    );

    function makeTaskLists(tasks, tasklists) {
        tasklists.push({id:0,name:'General',tasks:[]});
        angular.forEach(tasks, function(task) {
            // console.log(tasklists);
            console.log('finding tasklist' + task.task_list_id);
            var tasklist = tasklists.filter(function(tasklist) {
                return tasklist.id === task.task_list_id;
            })[0];
            tasklist.tasks.push(task);
        });
        // console.log(tasklists)
        return tasklists;
    }

    var fetchTasks = function() {
      console.log('fetching tasks');
      Task.query().$promise.then(function(results) {
        console.log('tasks fetched ' + results.tasks.length)
        tasks = results.tasks;
        tasklists = makeTaskLists(results.tasks, results.tasklists);
        notifyObservers();
      });
    }



    // if(TokenHandler.ifTempLogged()) {
    //   fetchTaskList();
    // } else {
    //   TokenHandler.onTempLogin(fetchTaskList);
    // }

    // Public API here
    return {
      onFetch: function(callback) {
        if(!callbackSet) {
          observers.push(callback);
          callbackSet = true;
          console.log('pushing observer')
        }
        if(TokenHandler.isTempLogged()) {
          fetchTasks();
        } else {
          console.log('waiting for login')
          TokenHandler.onTempLogin(fetchTasks);
        }
      },
      getTasks: function() {
        return tasks;
      },
      getTaskLists: function() {
        return tasklists;
      },
      fetchTasks: fetchTasks
    };
  });
