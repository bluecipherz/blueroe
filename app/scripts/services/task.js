
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
      $resource(Hoster.getHost() + '/projects/:project/tasks/:task',
        {},
        {'update': { method: 'PUT' }}),
      ['save','update']
    );

    var TaskList = TokenHandler.wrapActions(
      $resource(Hoster.getHost() + '/projects/:project/tasklists'),
      ['save']
    );


    var MeTask = TokenHandler.wrapActions(
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
            task.owner = task.users.filter(function(user) {
              return user.pivot.type == 'owner';
            })[0];
            tasklist.tasks.push(task);
        });
        // console.log(tasklists)
        return tasklists;
    }

    var fetchTasks = function() {
      console.log('fetching tasks');
      MeTask.query().$promise.then(function(results) {
        console.log('tasks fetched ' + results.tasks.length)
        tasks = results.tasks;
        tasklists = makeTaskLists(results.tasks, results.tasklists);
        notifyObservers();
      });
    }



    // Public API here
    return {
      onFetch: function(callback) {
        if(!callbackSet) {
          observers.push(callback);
          callbackSet = true;
          console.log('pushing observer')
        }
        if(TokenHandler.isTempLogged()) {
          console.log('already logged, fetching tasks');
          fetchTasks();
        } else {
          console.log('waiting for login, tasks')
          TokenHandler.onTempLogin(fetchTasks);
        }
      },
      getTasks: function() {
        return tasks;
      },
      getTaskLists: function() {
        return tasklists;
      },
      fetchTasks: fetchTasks,
      createTask: function(data) {
        if(data.taskListAct == true) {
          return TaskList.save({
            name:data.name,
            project:data.project.id
          });
        } else {
          var user_list = [];
          for(var user in data.users) {
            user_list.push(data.users[user].id);
          }
          var task_data = {
            name:data.name,
            project:data.project.id,
            task_list_id:data.tasklist,
            users:user_list,
            start_date:data.start_date,
            end_date:data.end_date,
            priority:data.priority
          }
          return Task.save(task_data);
        }
      },
      updateTask: function(data) {
        return Task.update(data);
      }
    };
  });
