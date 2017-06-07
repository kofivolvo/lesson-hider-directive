angular.module('hiderApp')
.directive('timeDirective', function(){
  return {

   templateUrl: 'html/lessonHider.html',
   restrict: 'E',

   scope: {
    lesson: '=lesson',
    dayAlert: '&',
   },

   controller: function($scope, mainSrv){
   $scope.getSchedule = mainSrv.getSchedule();

   },

   link: function(scope, element, attributes){


     scope.checkBoxClicked = function(lesson){
       if(scope.check){
         element.css('text-decoration', 'line-through');
       }
       else{
         element.css('text-decoration', 'none');
       }
     };


     scope.getSchedule.then(function(response){
      scope.schedule = response.data;
      //console.log(response.data);


     scope.schedule.forEach(function( scheduleDay ) {
       if (scheduleDay.lesson === scope.lesson) {

         scope.lessonDay = scheduleDay.weekday;
         element.css('text-decoration', 'line-through');
         return;
       }
     })
   })


}




}






})
