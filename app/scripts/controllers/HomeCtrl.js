(function() {
    function HomeCtrl(Task, $scope) {
        this.tasks = Task.all;
        this.taskManager = Task;
        this.taskCompleted = function(task) {
            Task.taskStatus(task);
        };
        this.activeTask = function(task) {
            var expiryDate = moment().subtract(7, 'days').format('MMM Do YY');
            return task.completed == false && task.created < expiryDate;
        };
    };

    

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
