searchPage.factory('formatService',function($http,$log,$rootScope) {
	var formatService = {

		guardian: function(array) {
			var formatted_array = [];
			for(var i = 0; i < array.length; i++){
				formatted_array.push({
					url: array[i].webUrl,
					title: array[i].webTitle,
					date: array[i].webPublicationDate
				})
			}
			return formatted_array;
		},

		times: function(array){
			var formatted_array = [];
			for(var i = 0; i < array.length; i++){
				formatted_array.push({
					url: array[i].url,
					title: array[i].abstract,
					date: array[i].published_date
				})
			}
			return formatted_array;
		}
	};


	return formatService;
});
