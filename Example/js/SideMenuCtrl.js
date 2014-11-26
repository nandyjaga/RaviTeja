rmipControllers.controller('SideMenuCtrl', ['$scope', '$http','$rootScope',
  function ($scope, $http,$rootScope) {
	 $(".cls_highLevel").on("click",function(evt){
				var showTarget=$(this).attr("data-target");
				$(".displayedChild").hide().removeClass("displayedChild");
				$(showTarget).addClass("displayedChild");
				$(showTarget).slideToggle();
	 })
	 $(".cls_childItems").hide();
	 
	 $("#openChat").on("click",function(evt){
		window.open("chat1.html",'Chat','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=400,height=700');
	 });
	 $("#openChatAdmin").on("click",function(evt){
		window.open("chat2.html",'Chat','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=550,height=700');
	 });
	 
	 
	 
}]);