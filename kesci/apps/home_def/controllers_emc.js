//Home_Default controllers.js

var myAppModule = angular.module('myApp', []);

myAppModule.controller('headerCtr',
function($scope) {
	$scope.isReg=false;
	$scope.showPinDiv=false;
});
