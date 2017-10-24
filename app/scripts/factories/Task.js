(function() {
    function Task($firebaseArray) {
        var ref = firebase.database().ref().child('tasks');
        var tasks = $firebaseArray(ref);
    
        return {
            all: tasks,
            addTask: function(taskDescription, taskPriority) {
                tasks.$add({ description: taskDescription, priority: taskPriority }); 
            }
        }
    };
    
    angular
    .module('blocitoff')
    .factory('Task', ['$firebaseArray', Task]);
})();
