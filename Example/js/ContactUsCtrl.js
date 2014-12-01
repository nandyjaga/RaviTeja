rmipControllers.controller('ContactUsCtrl', ['$scope',
  function ($scope, $http,$rootScope) {
		$scope.data={
			searchFAQ:"",
			contactGroups :[
						{
							groupName : "Administration Team",
							grpSearch:"",
							groupNameList :[
								{ name : "Scott Stevens",address:"5842 Hillcrest Rd",phone:"(870) 288-4149",email:"scott.stevens@example.com" },
								{ name : "James",address:"5842 Hillcrest Rd",phone:"(870) 288-4249",email:"james@example.com" },
								{ name : "Lambros",address:"5842 Hillcrest Rd",phone:"(870) 288-3149",email:"lambros@example.com" },
								{ name : "Badri Mahabashya",address:"5842 Hillcrest Rd",phone:"(870) 288-3249",email:"badri.mahabashya@example.com" },
								{ name : "Vishal Chickmane",address:"5842 Hillcrest Rd",phone:"(870) 288-3549",email:"vishal.chickmane@example.com" },
								{ name : "Mahesh Pujari",address:"5842 Hillcrest Rd",phone:"(870) 288-3235",email:"mahesh.pujari@example.com" }
							]
						},
						{
							groupName : "Risk Analysis",
							grpSearch:"",
							groupNameList :[
								{ name : "Scott Stevens",address:"5842 Hillcrest Rd",phone:"(870) 288-4149",email:"scott.stevens@example.com" },
								{ name : "James",address:"5842 Hillcrest Rd",phone:"(870) 288-4249",email:"james@example.com" },
								{ name : "Lambros",address:"5842 Hillcrest Rd",phone:"(870) 288-3149",email:"lambros@example.com" },
								{ name : "Badri Mahabashya",address:"5842 Hillcrest Rd",phone:"(870) 288-3249",email:"badri.mahabashya@example.com" },
								{ name : "Vishal Chickmane",address:"5842 Hillcrest Rd",phone:"(870) 288-3549",email:"vishal.chickmane@example.com" },
								{ name : "Mahesh Pujari",address:"5842 Hillcrest Rd",phone:"(870) 288-3235",email:"mahesh.pujari@example.com" }
							]
						},
						{
							groupName : "Incident Management Team",
							grpSearch:"",
							groupNameList :[
								{ name : "Scott Stevens",address:"5842 Hillcrest Rd",phone:"(870) 288-4149",email:"scott.stevens@example.com" },
								{ name : "James",address:"5842 Hillcrest Rd",phone:"(870) 288-4249",email:"james@example.com" },
								{ name : "Lambros",address:"5842 Hillcrest Rd",phone:"(870) 288-3149",email:"lambros@example.com" },
								{ name : "Badri Mahabashya",address:"5842 Hillcrest Rd",phone:"(870) 288-3249",email:"badri.mahabashya@example.com" },
								{ name : "Vishal Chickmane",address:"5842 Hillcrest Rd",phone:"(870) 288-3549",email:"vishal.chickmane@example.com" },
								{ name : "Mahesh Pujari",address:"5842 Hillcrest Rd",phone:"(870) 288-3235",email:"mahesh.pujari@example.com" }
							]
						},
						{
							groupName : "Customer Support",
							grpSearch:"",
							groupNameList :[
								{ name : "Scott Stevens",address:"5842 Hillcrest Rd",phone:"(870) 288-4149",email:"scott.stevens@example.com" },
								{ name : "James",address:"5842 Hillcrest Rd",phone:"(870) 288-4249",email:"james@example.com" },
								{ name : "Lambros",address:"5842 Hillcrest Rd",phone:"(870) 288-3149",email:"lambros@example.com" },
								{ name : "Badri Mahabashya",address:"5842 Hillcrest Rd",phone:"(870) 288-3249",email:"badri.mahabashya@example.com" },
								{ name : "Vishal Chickmane",address:"5842 Hillcrest Rd",phone:"(870) 288-3549",email:"vishal.chickmane@example.com" },
								{ name : "Mahesh Pujari",address:"5842 Hillcrest Rd",phone:"(870) 288-3235",email:"mahesh.pujari@example.com" }
							]
						}
			]
		}
		
		$scope.showBodyPanelContactUs=function(index){
			$("#contactUs_pannel_"+index).slideToggle();
			$("#contactUs_plus_"+index).toggle();
			$("#contactUs_minus_"+index).toggle();
		}
		
		/*$scope.showParaFaq=function(parentIndex,index){
			$("#faq_para_"+parentIndex+"_"+index).slideToggle();
		}*/
		
}]);