searchPage.factory('testsService',function($http,$log,$rootScope) {
  return {
    runTests: function(suite){
      return $http({
          method : 'POST',
          url : '/tests/'+ suite
        }
      )
        .then(function(resp){
          return resp.data.results;
        })
    }
  };


});