rmipControllers.controller('SearchResultsCtrl', ['$scope','$rootScope', '$http',
  function ($scope, $http,$rootScope) {
		$scope.data={
			searchResults :[]
		}
		$('body').on("searchEvent",function(evt,param){
			alert(param.data);
		});
}]);

