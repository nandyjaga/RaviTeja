rmipControllers.controller('MainMenuCtrl', ['$scope', '$http','$rootScope',
  function ($scope, $http,$rootScope) {
	$scope.data = {
		showBookMark:false
	};
	$scope.showBookMarks=function(){
		$scope.data.showBookMark=!$scope.data.showBookMark;
		$(document).trigger( "evtShowBookMark", [ {showBookMark:$scope.data.showBookMark} ] )
	}
}]);