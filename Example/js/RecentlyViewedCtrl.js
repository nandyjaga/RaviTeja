rmipControllers.controller('RecentlyViewedCtrl', ['$scope',
  function ($scope, $http,$rootScope) {
		$scope.data={
			searchRecentlyViewed:"",
			recentlyViewedList :[
					{
						link : "PDRR ACL LOAN LEVEL SUMMARY  RG",
						linkType : "Dashboard",
						title : "Pace",
						dateTime : "2 Aug 2013",
						bookmarked : true,
						more:false,
						showRow :true,
					},
					{
						link : "PDRR ACL LOAN LEVEL SUMMARY  RG",
						linkType : "Dashboard",
						title : "Pace",
						dateTime : "2 Aug 2013",
						bookmarked : true,
						more:false,
						showRow :true
					},
					{
						link : "ACL DAILY TO MONTHLY FACTOR COMPARISON",
						linkType : "Dashboard",
						title : "Dharma",
						dateTime : "1 Aug 2013",
						bookmarked : false,
						more:false,
						showRow :true
					}
			],
			recentlyViewedList2 :[
					{
						link : "PDRR ACL LOAN LEVEL SUMMARY  RG",
						linkType : "Dashboard",
						title : "Pace",
						dateTime : "2 Aug 2013",
						bookmarked : true,
						more:false,
						showRow :true,
					},
					{
						link : "PDRR ACL LOAN LEVEL SUMMARY  RG",
						linkType : "Dashboard",
						title : "Pace",
						dateTime : "2 Aug 2013",
						bookmarked : true,
						more:false,
						showRow :true
					},
					{
						link : "ACL DAILY TO MONTHLY FACTOR COMPARISON",
						linkType : "Dashboard",
						title : "Dharma",
						dateTime : "1 Aug 2013",
						bookmarked : false,
						more:false,
						showRow :true
					}
			]
		}
		$scope.loadMore=function(){
			for(var i=0;i<3;i++){
				var L_obj1 = {
						link : "ACL DAILY TO MONTHLY FACTOR COMPARISON",
						linkType : "Dashboard",
						title : "Dharma",
						dateTime : "1 Aug 2013",
						bookmarked : false,
						more:false,
						showRow :true
					}
					var L_obj2 = {
						link : "ACL DAILY TO MONTHLY FACTOR COMPARISON",
						linkType : "Dashboard",
						title : "Dharma",
						dateTime : "1 Aug 2013",
						bookmarked : false,
						more:false,
						showRow :true
					}
					$scope.data.recentlyViewedList.push(L_obj1);
					$scope.data.recentlyViewedList2.push(L_obj2);
			}
			
		}
		
		$scope.IamActive=false;
		$scope.IamActiveObj=null;
		
		
		$scope.addToBookMark=function(arrayItem){
			$scope.IamActive=true;
			$scope.IamActiveObj=arrayItem;
			//arrayItem.bookmarked=true;
			$('#test1').modal('show');
		}
		
		$('body').bind('commonbookmarkevt', function(e){
			  if($scope.IamActive){
				$scope.IamActive=false;
				$scope.IamActiveObj.bookmarked=true;
				//$('#test1').modal('hide');
			  }
		});

		}]);