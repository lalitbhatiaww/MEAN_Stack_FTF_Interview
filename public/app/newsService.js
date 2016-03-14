searchPage.factory('newsService',function($http,$log,$rootScope) {
  var newsService = {

    getGuardianNews: function(term){
      return $http({
            method : 'GET',
            url : '/news/guardian'
          }
      )
          .then(function(resp){
            return resp.data.results.response.results;
          })
    },

    getTimesNews: function(term){
      return $http({
            method : 'GET',
            url : 'news/nytimes/'
          }
      )
          .then(function(resp){
            return resp.data.results.results;
          })
    }
  };


  return newsService;
});
