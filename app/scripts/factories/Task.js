(function() {
    function Task($firebaseArray) {
        var ref = firebase.database().ref().child('tasks');
        var tasks = $firebaseArray(ref);

        var completeTask = function(task) {
            task.completed = true;
            tasks.$save(task)
        }

        var incompleteTask = function(task) {
            task.completed = false;
            task.created = moment().format('L');
            task.expires = moment().add(7, 'days').format('L');
            tasks.$save(task)
        }
    
        return {
            all: tasks,
            addTask: function(taskDescription, taskPriority) {
                tasks.$add({ description: taskDescription, priority: taskPriority, created: moment().format('L'), completed: false, expires: moment().add(7, 'days').format('L') }); 
            },
            taskComplete: completeTask,
            taskIncomplete: incompleteTask
        }
    };
    
    angular
    .module('blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();
