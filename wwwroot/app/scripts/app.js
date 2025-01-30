'use strict';
angular.module('todoApp', ['ngRoute'])
.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {

    // disable IE ajax request caching
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }

    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

    // Prevent AngularJS from handling the root URL except for Swagger
    if (window.location.pathname !== '/Swagger' && window.location.pathname !== '/swagger') {
        $routeProvider.when("/Home", {
            controller: "todoListCtrl",
            templateUrl: "/App/Views/TodoList.html",
        }).otherwise({ redirectTo: "/" });
    }
}]);