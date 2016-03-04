searchPage.controller('searchController',['$scope','$log','searchService',function($scope,$log,searchService){
  $scope.searchTerm = null;
  $scope.searchReults = null;

  $scope.sendSearch = function(){

    searchService.getSearchResults($scope.searchTerm).then(function(data){
      $scope.searchResults = data;
    })
  }
}]);