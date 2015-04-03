angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope, $cordovaSocialSharing) {
    // Share via native share sheet
    $scope.shareAnywhere = function() {
        $cordovaSocialSharing
        .share(message, subject, file, link)
        .then(function(result) {
          // Success!
        }, function(err) {
            $cordovaToast.showLongBottom("Cannot share via share sheet").then(function(success) {
                // success
            }, function (error) {
                // error
            });
        });
    }

    // Share via SMS
    $scope.shareViaSMS = function (message, number){
        $cordovaSocialSharing
        .shareViaSMS(message, number)
        .then(function(result) {
          // Success!
        }, function(err) {
            $cordovaToast.showLongBottom("Cannot send SMS").then(function(success) {
                // success
            }, function (error) {
                // error
            });
        });
    }

    // Share via Twitter
    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing
        .shareViaTwitter(message, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {
            $cordovaToast.showLongBottom("Cannot share on Twitter").then(function(success) {
                // success
            }, function (error) {
                // error
            });
        });
    }

    // Share via Facebook
    $scope.shareViaFacebook = function(message, image, link) {
        $cordovaSocialSharing
        .shareViaFacebook(message, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {
            $cordovaToast.showLongBottom("Cannot share on Facebook").then(function(success) {
                // success
            }, function (error) {
                // error
            });
        });
    }

    // Share via WhatsApp
    $scope.shareViaWhatsApp = function(message, image, link) {
        $cordovaSocialSharing
        .shareViaWhatsApp(message, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {
            $cordovaToast.showLongBottom("Cannot share to WhatsApp").then(function(success) {
                // success
            }, function (error) {
                // error
            });
        });
    }
});