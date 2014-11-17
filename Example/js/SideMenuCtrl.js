rmipControllers.controller('SideMenuCtrl', ['$scope', '$http','$rootScope',
  function ($scope, $http,$rootScope) {
	 $(".cls_highLevel").on("click",function(){
			var showTarget=$(this).attr("data-target");
			$(".displayedChild").slideToggle().removeClass("displayedChild");
			$(showTarget).addClass("displayedChild");
			$(showTarget).slideToggle();
	 })
	 $(".cls_childItems").hide();
}]);