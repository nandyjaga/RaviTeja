rmipControllers.controller('NewsCtrl', ['$scope','$rootScope', '$http',
  function ($scope, $http,$rootScope) {
		$scope.data={
			news:{
				filter:"",
				newsList :[
					{
						label : "Title 1",
						msg : "Message 1 Goes here",
						show : true,
						showInputs : false,
					},
					{
						label : "Title 2",
						msg : "Message 2 Goes here",
						show : true,
						showInputs : false
					}
				]
			}
		}
		
		$scope.addNewsUpdate=function(){
			var L_newsObj = {
						label : "",
						msg : "",
						show : true,
						showInputs : true
				}
				$scope.data.news.newsList.push(L_newsObj)
		}
		
}]);

