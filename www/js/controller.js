angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope) {
    $scope.sendSMS = function (){
    	alert("Button Clicked");
    }
});