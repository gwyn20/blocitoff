(function() {
    function Task($firebaseArray) {
        var ref = firebase.database().ref().child('tasks');
        var tasks = $firebaseArray(ref);

        var taskCompleted = function(task) {
            task.completed = true;
            tasks.$save(task)
        }

        var taskReset = function(task) {
            task.completed = false;
            task.created = moment().dayOfYear();
            tasks.$save(task)
        }
    
        return {
            all: tasks,
            addTask: function(taskDescription, taskPriority) {
                tasks.$add({ description: taskDescription, priority: taskPriority, created: moment().dayOfYear(), completed: false }); 
            }
        }
    };
    
    angular
    .module('blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();
