searchPage.controller('testsController',['$scope','$log','testsService',function($scope,$log,testsService){
  $scope.suite = null;
  $scope.testReults = null;
  $scope.socket = io.connect();

  $scope.messages = [];
  $scope.message='';
  $scope.startMessage = '';


  $scope.runTests = function(){

    $scope.socket.emit('runtests','testing');
    console.log('Starting test run');
    testsService.runTests($scope.suite).then(function(data){
      $scope.testResults = data;
    });
    $scope.socket.on('startMessage', function (data) {
      console.log('Data : ',data);
      $scope.startMessage = data.startMessage;
    });
  };


  //$scope.socket.on('message', function (data) {
  //
  //  if(data.message) {
  //    $scope.$apply(function(){
  //      $scope.message =data.message;
  //    });
  //
  //  } else {
  //    console.log("There is a problem:", data);
  //  }
  //  //console.log($scope.messages);
  //});


}]);