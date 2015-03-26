angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope, $cordovaSocialSharing) {
    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "http://www.denzildoyle.me");
    }

    $scope.shareViaSMS = function (message, number){
        $cordovaSocialSharing
        .shareViaSMS(message, number)
        .then(function(result) {
          // Success!
        }, function(err) {
            alert("Cannot send SMS");
        });
    }

    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("com.apple.social.twitter", message, image, link).then(function(result) {
        // $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link);
        }, function(error) {
            alert("Cannot share on Twitter");
        });
    }

    $scope.shareViaFacebook = function(message, image, link) {
        $cordovaSocialSharing
        .shareViaFacebook(message, image, link)
        .then(function(result) {
          // Success!
        }, function(err) {
            alert("Cannot share on Facebook");
        });
    }
});