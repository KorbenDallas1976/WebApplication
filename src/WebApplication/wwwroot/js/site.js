// Write your Javascript code.
angular.module('webApp', ['ui.bootstrap']);
angular.module('webApp', [])
.run(function () {
    console.log('Hello, world, from webApp!');
})
.directive('psCurrentTime', function () {
    return {
        template: '<h2 class="text-center">{{vm.currentTime}}</div>',
        controllerAs: 'vm',
        controller: function () {
            var vm = this;
            vm.currentTime = new Date().toLocaleTimeString();
        }
    }
});
angular.module('webApp', ['ui.bootstrap'])
.controller('TabsDemoCtrl', function ($scope, $window) {
    $scope.tabs = [
      { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
      { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function () {
        setTimeout(function () {
            $window.alert('You\'ve selected the alert tab!');
        });
    };

    $scope.model = {
        name: 'Tabs'
    };
});