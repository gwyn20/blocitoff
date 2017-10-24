(function() {
    function HomeCtrl(Task, $scope) {
        this.tasks = Task.all;
        this.taskManager = Task;
    };

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
