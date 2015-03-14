//Home_Login controllers.js

var myAppModule = angular.module('myApp', ['ngRoute']);

myAppModule.controller('navbarCtr',
function($scope,$rootScope) {  
	$rootScope.$on('$routeChangeSuccess', function(){
        if(arguments[1]&&arguments[1].$$route&&arguments[1].$$route.controller)
            $scope.ctrName=arguments[1].$$route.controller;
    }); 
    });
myAppModule.controller('newsCtr',
function($scope) {

	$scope.competition_stage_map={"not_start":"报名中","ongoing":"进行中","finished":"作品评选中","result":"结果揭晓"}
	
	$scope.followed_competition=[{
		name:"超级码力程序设计竞赛",
		competition_id:"123213",
		stage:"not_start",
		host:"Avazu",
		type:"程序开发",
		district:"不限",
		reward:"iPhone6，实习机会",
		sign_due:"12月12日",	
		submit_due:"1月20日",
		img:"images/d.jpg",
		team_num:12
	},
	{
		name:"超级码力程序设计竞赛",
		competition_id:"123213",
		host:"Avazu",
		type:"程序开发",		
		stage:"ongoing",		
		img:"images/d.jpg",
		submit_due:"1月20日",
		team_num:12
	},
	{
		name:"超级码力程序设计竞赛",
		competition_id:"123213",
		host:"Avazu",
		type:"程序开发",		
		stage:"finished",		
		img:"images/d.jpg",
		submit_due:"1月20日",
		team_num:12
	},
	{
		name:"超级码力程序设计竞赛",
		competition_id:"123213",
		host:"Avazu",
		type:"程序开发",
		win_teams:["猪八戒背媳妇","好想吃粽子","高铁侠"],
		stage:"result",		
		img:"images/d.jpg",
		
	}];
	
	$scope.friend_news=[
	{
		friend:"萝卜",
		img:"images/d.jpg",
		time:"2014-2-16 23:11:12",
		type:"friend_win_prize",
		competition:"超级码力程序设计竞赛",
		prize:"一等奖"
	},
	{
		friend:"周小胖",
		img:"images/e.jpg",
		time:"2014-2-16 23:11:12",
		type:"friend_join_team",
		team:"猪八戒背媳妇",
		competition:"超级码力程序设计竞赛",
	},
	{
		friend:"赵信",
		img:"images/f.jpg",
		time:"2014-2-16 23:11:12",
		type:"friend_create_team",
		team:"猪八戒背媳妇",
		competition:"超级码力程序设计竞赛"
	},
	
	{
		friend:"周小胖",
		img:"images/e.jpg",
		time:"2014-2-16 23:11:12",
		type:"friend_follow_competition",
		competition:"超级码力程序设计竞赛"
	}
	];
	$scope.recommed_competition=[
	{
		name:"超级码力程序设计竞赛",
		competition_id:"123213",
		host:"Avazu",
		type:"程序开发",
		district:"不限",
		reward:"iPhone6，实习机会",
		sign_due:"12月12日",
		submit_due:"1月20日"
	},	
		];
	$scope.recommed_team=[{
		name:"梦之队",
		competition:"AVAZU Holding 程序猿的崛起",		
		members:["郭冬临","冯巩","周杰伦","东尼大木"],
		skills:["PHP","JavaScript","MySql"],
		require_skills:["Web Design","Project Manage","HTML5"],		
		requier_members:1,
		signature:"观众朋友们,我想死你们了!",
		img:"images/e.jpg"
	}];
	$scope.recommed_friend=[
	{
		name:"周小胖",
		district:"上海",
		skills:["PHP","Dota","WoW"],
		signature:"Without a sense of identity, there can be no real struggle.",
		img:"images/e.jpg"
	}
	];
	$scope.recommed_course=[
		{title:"JavaScript 教程",url:"http://www.w3school.com.cn/js/"},
		{title:"HTML 系列教程",url:"http://www.w3school.com.cn/h.asp"},
		{title:"XML 系列教程",url:"http://www.w3school.com.cn/x.asp"},
	]
});

myAppModule.controller('mineCtr',
function($scope) {
	$scope.competition_stage_map={"not_start":"报名中","ongoing":"进行中","finished":"作品评选中","result":"结果揭晓"};
	$scope.my_competition=[{
		name:"超级码力程序设计竞赛",
		competition_id:"123213",
		stage:"not_start",
		host:"Avazu",
		type:"程序开发",
		district:"不限",
		reward:"iPhone6，实习机会",
		sign_due:"12月12日",	
		submit_due:"1月20日",
		img:"images/d.jpg",
		team_num:12,
		my_team:{
			name:"梦之队",
			competition:"超级码力程序设计竞赛",		
			members:["郭冬临","冯巩","周杰伦","东尼大木"],
			skills:["PHP","JavaScript","MySql"],
			require_skills:["Web Design","Project Manage","HTML5"],		
			requier_members:1,
			signature:"观众朋友们,我想死你们了!",
			img:"images/e.jpg"
		}
	},
	{
		name:"超级码力程序设计竞赛",
		competition_id:"123213",
		stage:"not_start",
		host:"Avazu",
		type:"程序开发",
		district:"不限",
		reward:"iPhone6，实习机会",
		sign_due:"12月12日",	
		submit_due:"1月20日",
		img:"images/d.jpg",
		team_num:12,
		my_team:{
			name:"梦之队",
			competition:"AVAZU Holding 程序猿的崛起",		
			members:["郭冬临","冯巩","周杰伦","东尼大木"],
			skills:["PHP","JavaScript","MySql"],
			require_skills:["Web Design","Project Manage","HTML5"],		
			requier_members:1,
			signature:"观众朋友们,我想死你们了!",
			img:"images/e.jpg"
		}
	},
	{
		name:"超级码力程序设计竞赛",
		competition_id:"123213",
		stage:"not_start",
		host:"Avazu",
		type:"程序开发",
		district:"不限",
		reward:"iPhone6，实习机会",
		sign_due:"12月12日",	
		submit_due:"1月20日",
		img:"images/d.jpg",
		team_num:12,
		my_team:{
			name:"梦之队",
			competition:"AVAZU Holding 程序猿的崛起",		
			members:["郭冬临","冯巩","周杰伦","东尼大木"],
			skills:["PHP","JavaScript","MySql"],
			require_skills:["Web Design","Project Manage","HTML5"],		
			requier_members:1,
			signature:"观众朋友们,我想死你们了!",
			img:"images/e.jpg"
		}
	}];

});
myAppModule.controller('discoverCtr',
function($scope) {
	$scope.currentTab=0;
	$scope.selectSource={
		skillList:["JavaScript","PHP","MySQL","AngularJS","CSS","SilverLight",".Net"],
		districtList:["北京","上海","杭州","武汉"],
		competitionList:["12123","23123"]
	};	
	$scope.clearAllForms=function(){	
		$scope.competitionSearch_name="";
		$scope.competitionSearch_selectedDistrict=[];
		$scope.competitionSearch_selectedType=[];
		$scope.competitionSearch_selectedTime="不限";
		$scope.teamSearch_name="";
		$scope.teamSearch_selectedCompetition=[];
		$scope.teamSearch_selectedDistrict=[];
		$scope.teamSearch_selectedSkill=[];
		$scope.peopleSearch_name=[];
		$scope.peopleSearch_selectedCompetition=[];
		$scope.peopleSearch_selectedDistrict=[];
		$scope.peopleSearch_selectedSkill=[];
	}

	$scope.clearAllForms();
	$scope.addLabel=function (model,labels) {
		if(!labels||labels.length<1){
			return
		}
		for (var idx=0;idx<labels.length;idx++){
			var label=labels[idx];
			if(!label||model.indexOf(label)>-1){
				continue;
			}
			model.push(label);
		}		
	}
	$scope.removeLabel=function(model,label){
		var idx = model.indexOf(label);
		if(!label||idx<0){
			return;
		}
		model.splice(idx,1);
	}

	 
});
myAppModule.controller('usercenter_profile',
function($scope) {
	$scope.removePfRecord=function(model,index){confirm("删除此记录?")?model.splice(index,1):0};
	$scope.selectSource={
		skillList:["JavaScript","PHP","Dota","WoW","MySQL","AngularJS","CSS","SilverLight",".Net"],
		interestsList:["数据分析","python","ML"],
		districtList:["上海","北京","广州"],
		universityList:["上海交大","复旦大学","华东师大"]
	};	
	$scope.myprofile={
            "user_id":"1111",
            "name":"周小胖",
            "district":"上海",
            "university":"上海交大",
            "skills":["PHP","Dota","WoW"],
            "interests":["数据分析","python"],
            "bref_intro":"Without a sense of identity, there can be no real struggle.",
            "current_competition":"Avazu编程大赛",
            "last_online":"一天前",
            "reply_rate":"90%",
            "avg_reply_time":"24小时",
            "img":"images/e.jpg",    
            "competitions_exps":[{
				    "start_date":"2014-01-02",
				    "end_date":"2014-02-04",
					"competition_name":"美国数学建模大赛",
					"award":"一等奖",
				    "project_url":"www.baidu.com",
				    "kesci_competition":"True",
				},{
				    "start_date":"2014-01-02",
				    "end_date":"2014-02-04",
					"competition_name":"美国数学建模大赛",
					"award":"二等奖",
				    "project_url":"www.baidu.com",
				    "kesci_competition":"True",
				},{
				    "start_date":"2014-01-02",
				    "end_date":"2014-02-04",
					"competition_name":"美国数学建模大赛",
					"award":"三等奖",
				    "project_url":"www.baidu.com",
				    "kesci_competition":"True",
				}],
			"edu_exps":[{
			    "start_date":"2014-01-02",
			    "end_date":"2014-02-04",
			    "university":"上海交通大学",
			    "department":"数学系",
			    "major":"应用统计",
			    "level":"研究生"    
				},
				{
			    "start_date":"2014-01-02",
			    "end_date":"2014-02-04",
			    "university":"上海交通大学",
			    "department":"数学系",
			    "major":"应用统计",
			    "level":"研究生"    
			}],
			"practice_exps":[{
	            "id":"111",
	            "start_date":"2014-01-02",
	            "end_date":"2014-02-04",
	            "organzition":"中国银联信用卡中心",
	            "job":"数据分析实习生",
	            "description":"数据分析和建模"
            },
            {
	            "id":"111",
	            "start_date":"2014-01-02",
	            "end_date":"2014-02-04",
	            "organzition":"中国银联信用卡中心",
	            "job":"数据分析实习生",
	            "description":"数据分析和建模"
            }]                   
};
});

myAppModule.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'newsCtr'
        })  
     	.when('/mine', {
            templateUrl: 'views/mine.html',
            controller: 'mineCtr'
        })  
        .when('/discover', {
            templateUrl: 'views/discover.html',
            controller: 'discoverCtr'
        }) 
        .when('/usercenter/profile', {
            templateUrl: 'views/usercenter/profile.html',
            controller: 'usercenter_profile'
        })       
        .otherwise({
            redirectTo: '/news'
        });
}]);