var home = angular.module('home', [])
    .controller('homeCtrl', homeCtrl);

function homeCtrl($scope, homeService) {
    console.log('homeCtrl');

    $scope.myFct = function () {
        console.log('homeCtrl->myFct');
        homeService.doGetAction();
    }
}
