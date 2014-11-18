rmipControllers.controller('MainMenuCtrl', ['$scope', '$http','$rootScope',
  function ($scope, $http,$rootScope) {
	$scope.data = {
		showBookMark:false
	};
	$scope.showBookMarks=function(){
		$scope.data.showBookMark=!$scope.data.showBookMark;
		$(document).trigger( "evtShowBookMark", [ {showBookMark:$scope.data.showBookMark} ] )
	}
	$("#GblSearchBtn").on("click",function(){
		$("#recentlyViewed").hide();
		$("#highLevelMenyDB").hide();
		$("#searchAll").show();
		$("#searchMenu").show();
		$(".cls_all").show();
	});
	$(".cls_search_btn").on("click",function(){
		$(".cls_all").hide();
		$($(this).attr("data-target")).show();
	});
	
}]);