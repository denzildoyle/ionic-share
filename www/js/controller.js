angular.module('starter.controllers', [])

.controller('homeCtrl', function($scope, $cordovaSocialSharing) {
    $scope.sendSMS = function (){
        // var number = "18687967004";
        // var message = "This is a test sms";

        // //CONFIGURATION
        // var options = {
        //     replaceLineBreaks: false, // true to replace \n by a new line, false by default
        //     android: {
        //         intent: 'INTENT'  // send SMS with the native android SMS messaging
        //         //intent: '' // send SMS without open any other app
        //     }
        // };

        // var success = function () { alert('Message sent successfully'); };
        // var error = function (e) { alert('Message Failed:' + e); };
        // sms.send(number, message, options, success, error);
    }

    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "http://blog.nraboy.com");
    }

    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link);
        }, function(error) {
            alert("Cannot share on Twitter");
        });
    }
});