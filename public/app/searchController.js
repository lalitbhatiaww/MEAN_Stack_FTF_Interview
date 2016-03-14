searchPage.controller('searchController',['$scope','$log','newsService','formatService','$q',function($scope,$log,newsService,formatService,$q){
  // Here the goal is to show the candidate`s understanding of promises, we are waiting for all the promises to be resolved us $q.all before binding data
  // on node side we have two different news services, NewYork Times and Guardian, we are not passing any parameters from angular to Node, just pure get.
  // this is also to test candidate`s ability to process simple Json and formatting Json responses, the key value pairs in the two responses are different
  // this means that the candidate should combine the results in one array that has the same key value pairs then iterate it.

  var promises = [];

  var guardianPromise = newsService.getGuardianNews();
  var timesPromise = newsService.getTimesNews();

  promises.push(guardianPromise);
  promises.push(timesPromise);

  return $q.all(promises).then(function(data) {
    // promises are complete.
    $scope.news = formatService.guardian(data[0]).concat(formatService.times(data[1]));
  });

}]);