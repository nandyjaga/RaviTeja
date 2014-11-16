rmipControllers.controller('BookMarkCtrl', ['$scope','$rootScope', '$http',
  function ($scope, $http,$rootScope) {
		$scope.data={
			showBookMark : false,
			bookmarkItems :[],
			linkEditDetls :{
				parentIndex:null,
				linkIndex : null,
				id: null,
				name: null,
				url: null
			},
			linkIdMax :2016,
			GroupIdMax :1004
		}
		
		
		$.ajax({url:"data/bookmarks.json",
			success:function(result){
				for(var i=0;i<result.length;i++){
					var bookmarkgroup = {
						 "id": result[i].id,
						 "remove":true,
						 "confirm":false,
						 "edit" : false,
						 "BmGroupName": result[i].BmGroupName,
						 "grpItems":[]
					}
					
					for(j=0;j<result[i].grpItems.length;j++){
						var linkItem = {
						  "id": result[i].grpItems[j].id,
						  "name": result[i].grpItems[j].name,
						  "url": result[i].grpItems[j].url,
						  "remove":true,
						  "confirm":false
						}
						bookmarkgroup.grpItems.push(linkItem);
					}
					$scope.data.bookmarkItems.push(bookmarkgroup);
				}
			},
			error:function(result){
				//---------To do----------
			},
		});
		
		$scope.deleteGroup=function(index){
			var group = $scope.data.bookmarkItems[index];
			if(group.confirm){
				   $scope.data.bookmarkItems.splice(index,1);
			}else{
				group.confirm=true;
				group.remove = false;
			}
		}
		
		$scope.editGroupName=function(index,editStatus){
			var group = $scope.data.bookmarkItems[index];
			group.edit=editStatus;
		}
		
		$scope.openURL=function(url){
			window.open(url);
			//window.open(url,"_self");
		}
		
		$scope.editLink=function(Parentindex,LinkIndex){
			$scope.data.linkEditDetls.parentIndex=Parentindex;
			$scope.data.linkEditDetls.linkIndex=LinkIndex;
			var linkItem = $scope.data.bookmarkItems[Parentindex].grpItems[LinkIndex];
			$scope.data.linkEditDetls.id=linkItem.id;
			$scope.data.linkEditDetls.name=linkItem.name;
			$scope.data.linkEditDetls.url=linkItem.url;
			$('#test').modal('show');
		}
		
		$scope.addLink=function(parentIndex){
			$scope.data.linkEditDetls.parentIndex=parentIndex;
			$scope.data.linkEditDetls.linkIndex=null;
			$scope.data.linkEditDetls.id=null;
			$scope.data.linkEditDetls.name="";
			$scope.data.linkEditDetls.url="";
			$('#test').modal('show');
		}
		
		$scope.addGroup=function(){
			var bookmarkgroup = {
				 "id": $scope.data.GroupIdMax=($scope.data.GroupIdMax+1),
				 "remove":true,
				 "confirm":false,
				 "edit" : false,
				 "BmGroupName": "New Group",
				 "grpItems":[]
			}
			$scope.data.bookmarkItems.push(bookmarkgroup);
		}
		
		$scope.saveLink=function(){
		    if($scope.data.linkEditDetls.id != null){
				$scope.data.bookmarkItems[$scope.data.linkEditDetls.parentIndex].grpItems[$scope.data.linkEditDetls.linkIndex].name=$scope.data.linkEditDetls.name;
				$scope.data.bookmarkItems[$scope.data.linkEditDetls.parentIndex].grpItems[$scope.data.linkEditDetls.linkIndex].url=$scope.data.linkEditDetls.url;
				$scope.data.linkEditDetls.parentIndex=null;
				$scope.data.linkEditDetls.linkIndex=null;
				$scope.data.linkEditDetls.id=null;
				$scope.data.linkEditDetls.name=null;
				$scope.data.linkEditDetls.url=null;
			}else{
				var linkItem = {
					  "id": $scope.data.linkIdMax=($scope.data.linkIdMax+1),
					  "name": $scope.data.linkEditDetls.name,
					  "url": $scope.data.linkEditDetls.url,
					  "remove":true,
					  "confirm":false
				}
				$scope.data.bookmarkItems[$scope.data.linkEditDetls.parentIndex].grpItems.push(linkItem);
			}
			$('#test').modal('hide');
		}
		$scope.deleteLink=function(Parentindex,LinkIndex){
			var linkItem = $scope.data.bookmarkItems[Parentindex].grpItems[LinkIndex];
			if(linkItem.confirm){
				   $scope.data.bookmarkItems[Parentindex].grpItems.splice(LinkIndex,1);
			}else{
				linkItem.confirm=true;
				linkItem.remove = false;
			}
		}
		
		$(document).on( "evtShowBookMark",
			function( event,data) {
				$scope.data.showBookMark = data.showBookMark;
				$("#divBookMarkPage").slideToggle();
		});
		$("#divBookMarkPage").hide();
}]);