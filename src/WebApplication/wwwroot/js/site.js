var app = angular.module('webApp', []);
/*
app.directive("w3TestDirective", function () {
    return {
        template: "<h1>Made by a directive!</h1>"
    };
});
*/
var appui = angular.module('webApp', ['ui.bootstrap']);

appui.controller('TabsDemoCtrl', function ($scope, $window) {
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

appui.directive("w3TestDirective", function () {
    return {
        template: "<h1>Made by a directive!</h1>"
    };
});
