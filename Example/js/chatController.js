rmipControllers.controller('chatController', ['$scope', '$http','$rootScope','$timeout',
  function ($scope, $http,$rootScope,$timeout) {
    $scope.data = {
	  maximize:false,
	  latest:true,
	  showBadge:false,
	  status:'',
	  currMsg : "",
	  chatArray:[
		{
			userName : "James",
			msg : "Hi",
			dateTime : Date(),
			show :false
		},
		{
			userName : "Richard",
			msg : "Hi, How can  help you ?",
			dateTime : Date(),
			show :true
		}
	  ]
	};
	$scope.showHideChat=function(showHide){
		$scope.data.maximize= !showHide;
		$scope.data.showBadge=false
	}
	
	$scope.sendMsg=function(){
		 var L_msgObj = {
			userName : "James",
			msg :$scope.data.currMsg,
			dateTime : Date(),
			show :$scope.data.latest=!$scope.data.latest
		}
		$scope.data.currMsg="";
		$scope.data.chatArray.push(L_msgObj);
		
		$timeout(function(){$scope.data.status=" Richard is typing..";},500);
		$timeout(function(){$scope.data.status="";},1500);
		$timeout(function(){$scope.data.status=" Richard is typing..";},2500);
		$timeout(function(){$scope.data.status="";},3500);
		$timeout(function(){$scope.data.status=" Richard is typing..";},5500);
		$timeout(
			function(){
				var L_msgObj2 = {
					userName : "Richard",
					msg :" Hi the support applications are down due to system upgradation. We will get back you in another 2 hours. Thanks for contacting us.",
					dateTime : Date(),
					show :$scope.data.latest=!$scope.data.latest
				}
				$scope.data.chatArray.push(L_msgObj2);
				$scope.data.status=""
			},6000
		);
		
		
	}
	setTimeout(
		function(){
			$scope.data.showBadge=true;
		},1000	);
	$( "#chatWindow" ).draggable({ cursor: "move",opacity: 0.5  });
	
		$("#btn_beginChat").on("click",function(){
			$("#qWindow").hide();
			$("#chatWindowC").show();
		})
		
	
}]);