rmipControllers.controller('chatController', ['$scope', '$http','$rootScope',
  function ($scope, $http,$rootScope) {
	$scope.data = {
	  maximize:false,
	  showBadge:false,
	};
	
	$scope.showHideChat=function(showHide){
		$scope.data.maximize= !showHide;
		$scope.data.showBadge=false
	}
	
	setTimeout(
		function(){
			$scope.data.showBadge=true;
		},1000	);
	$( "#chatWindow" ).draggable({ cursor: "move",opacity: 0.5  });
	
}]);