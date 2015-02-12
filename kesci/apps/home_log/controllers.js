//Home_Login controllers.js

var myAppModule = angular.module('myApp', ['ngRoute']);

myAppModule.controller('newsCtr',
function($scope) {
	
});

myAppModule.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'newsCtr'
        })        
        .otherwise({
            redirectTo: '/news'
        });
}]);