(function() {
    function HistoryCtrl(Task, $scope) {
        this.tasks = Task.all;
        this.taskReset = function(task) {
            Task.taskReset(task);
        };
        this.completedTask = function(task) {
            return task.completed == true
        };
        this.expiredTask = function(task) {
            return task.created < (moment().dayOfYear() - 7)
        };
    };

    

    

    angular
        .module('blocitoff')
        .controller('HistoryCtrl', ['Task', '$scope', HistoryCtrl]);
})();