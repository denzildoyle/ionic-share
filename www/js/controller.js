angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope, $cordovaSocialSharing) {
    // Share via native share sheet
    $scope.shareAnywhere = function(message, subject, file, link) {
        $cordovaSocialSharing
        .share(message, subject, file, link)
        .then(function(result) {
          // Success!
        }, function(err) {
            alert("Something happened");
        });
    }

    // Share via SMS
    $scope.shareViaSMS = function (message, number){
        $cordovaSocialSharing
        .shareViaSMS(message, number)
        .then(function(result) {
          // Success!
        }, function(err) {
            alert("Cannot send SMS");
        });
    }

    // Share via Twitter
    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing
        .shareViaTwitter(message, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {
            alert("Cannot share on Twitter");
        });
    }

    // Share via Facebook
    $scope.shareViaFacebook = function(message, image, link) {
        $cordovaSocialSharing
        .shareViaFacebook(message, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {
            alert("Cannot share on Facebook");
        });
    }

    // Share via WhatsApp
    $scope.shareViaWhatsApp = function(message, image, link) {
        $cordovaSocialSharing
        .shareViaWhatsApp(message, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {
            alert("Cannot share on WhatsApp");
        });
    }

    // Share via Email
    $scope.shareViaEmail = function(message, subject, toArr, bccArr, file){
        $cordovaSocialSharing
        .shareViaEmail(message, subject, toArr, bccArr, file)
        .then(function(result) {
          // Success!
        }, function(err) {
            alert("Cannot share Email");
        });
    }
});