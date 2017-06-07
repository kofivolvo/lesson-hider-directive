angular.module('hiderApp').service('mainSrv', function($http){

this.getSchedule = function(){
  return $http.get('schedule.json')
}

});
