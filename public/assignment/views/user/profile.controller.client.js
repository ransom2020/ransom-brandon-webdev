(function() {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        var uid = $routeParams.uid;

        function init() {
            var user = UserService.findUserById(uid);
            vm.user = user;
        }
        init();


    }

})();