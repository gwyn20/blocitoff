(function() {
    function HistoryCtrl(Task, $scope) {
        this.tasks = Task.all;
        this.taskReset = function(task) {
            Task.taskIncomplete(task);
        };
        this.completedTask = function(task) {
            return task.completed == true;
        };
        this.expiredTask = function(task) {
            var expiryDate = moment().subtract(7, 'days').format('L');
            return task.created < expiryDate;
        };
    };

    

    

    angular
        .module('blocitoff')
        .controller('HistoryCtrl', ['Task', '$scope', HistoryCtrl]);
})();