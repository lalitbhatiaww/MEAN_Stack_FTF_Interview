searchPage.factory('searchService',function($http,$log,$rootScope) {
  var searchService = {
    getSearchResults: function(term){
      return $http({
          method : 'GET',
          url : '/search/'+ term
        }
      )
        .then(function(resp){
          return resp.data.results;
        })
    }
  };

  return searchService;
});
