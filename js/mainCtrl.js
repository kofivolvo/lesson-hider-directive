angular.module('hiderApp').controller('mainCtrl', function($scope, mainSrv){


$scope.test = "Two-way data binding"



$scope.things = ['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];

$scope.announceDay = function(lesson, day){
  alert(lesson + ' is active on ' + day + '.')
}

})
