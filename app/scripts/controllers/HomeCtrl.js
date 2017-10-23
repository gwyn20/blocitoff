(function() {
    function HomeCtrl(Task, $scope) {
        this.tasks = Task.all;
    };

    angular
        .module('blocitoff')
        .controller('HomeCtrl', ['Task', '$scope', HomeCtrl]);
})();
