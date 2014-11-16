var rmipControllers = angular.module('rmipControllers', []);

rmipControllers.controller('loginCtrl', ['$scope','$rootScope', '$http',
  function ($scope, $http,$rootScope) {
    $scope.data = {
		userName : "",
		password :"",
		validationError:"",
		authFail:false
	}
	
	$scope.validateForm = function(){
	  var valadtionStatus = true;
	  
	  if($scope.data.userName==""){
			$scope.data.validationError="Please enter user id";
			valadtionStatus=false;
	  }
	  if($scope.data.password==""){
			$scope.data.validationError= ($scope.data.validationError=="")?"Please enter password":$scope.data.validationError+" and password.";
			valadtionStatus=false;
	  }
	  return valadtionStatus;
	}
	$scope.login=function(){
	  var valadtionStatus = $scope.validateForm();
	  /*if(valadtionStatus){
		 $http({method: 'POST', url:"app/data/login.json",data:{userName:$scope.data.userName,password:$scope.data.password}})
			   .success(function(data, status, headers, config) {
					$scope.data.loadingPercent=100;
					if(data.success){
						$scope.data.authFail=false;
						$rootScope.global.loggedIn=true;
						window.location.hash="/home";
					}else{
						$scope.data.showLoginScreen=true;
						$scope.data.authFail=true;
					}
				}).error(function(data, status, headers, config) {
					
				}
			);
	  }*/
	}
	
	$scope.autoLogin=function(){
		if($rootScope.global.loggedIn){
			window.location.hash="/home";
		}
		$scope.data.loadingPercent=70;
		var rememberMe = localStorage.getItem("rememberMe");
		if(rememberMe=="true"){
			$scope.data.userName=localStorage.getItem("userName");
			$scope.data.password=localStorage.getItem("password");
			$scope.data.rememberMe=true;
			setInterval(function(){
					if($scope.data.loadingPercent>=100){
						return;
					}
					$scope.data.loadingPercent=$scope.data.loadingPercent+10;
					if($scope.data.loadingPercent==90){
						$scope.login();
					}
				},500);
		}else{
			$scope.data.showLoginScreen=true;
		}
	}
	//$scope.autoLogin();
}]);

