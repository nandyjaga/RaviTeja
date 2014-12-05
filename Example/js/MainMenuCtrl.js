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
		//Created ajax sample here
		$.ajax({url:"data/searchData.JSON",success:function(result){
			alert(JSON.stringify(result));
		},error:function(error){
			alert("Error Occured" + JSON.stringify(error));
		}});
		
		$("#recentlyViewed").hide();
		$("#highLevelMenyDB").hide();
		$("#searchAll").show();
		$("#searchMenu").show();
		$("#view_portal_rep").hide();
		$(".cls_all").show();
	});
	$(".cls_search_btn").on("click",function(){
		$(".cls_all").hide();
		$($(this).attr("data-target")).show();
	});
	
	$("#li_feedback").on("click",function(){
		$("#feedBack_frm").modal('show');
	});
	$("#btn_submit_fb").on("click",function(){
		$("#feedBack_frm").modal('hide');
		setTimeout(function(){$("#feedBack_msg").modal('show');},400);
	});
	
	$("#li_portalReports").on("click",function(){
		$("#recentlyViewed").hide();
		$("#highLevelMenyDB").hide();
		$("#searchAll").hide();
		$("#searchMenu").hide();
		$(".cls_all").hide();
		$("#view_portal_rep").show();
	});
	
	
	 $(function () {
                $('#datetimepicker1').datetimepicker();
				$('#datetimepicker2').datetimepicker();
            });
	
	
}]);