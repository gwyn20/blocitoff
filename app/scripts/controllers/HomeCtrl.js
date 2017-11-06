(function() {
    function HomeCtrl(Task, $scope) {
        this.tasks = Task.all;
        this.taskManager = Task;
        this.taskCompleted = function(task) {
            Task.taskCompleted(task);
        };
        this.activeTask = function(task) {
            return task.created > (moment().dayOfYear() - 7) || task.completed == false
        };
    };

    

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
