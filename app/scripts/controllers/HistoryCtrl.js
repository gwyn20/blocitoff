(function() {
    function HistoryCtrl(Task, $scope) {
        this.tasks = Task.all;
    };

    angular
        .module('blocitoff')
        .controller('HistoryCtrl', ['Task', '$scope', HistoryCtrl]);
})();