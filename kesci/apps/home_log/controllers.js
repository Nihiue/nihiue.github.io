//Home_Login controllers.js

var myAppModule = angular.module('myApp', ['ngRoute']);

myAppModule.controller('newsCtr',
function($scope) {

	$scope.match_stage_map={"not_start":"报名中","ongoing":"进行中","finished":"作品评选中","result":"结果揭晓"}
	
	$scope.followed_match=[{
		name:"超级码力程序设计竞赛",
		match_id:"123213",
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
		match_id:"123213",
		host:"Avazu",
		type:"程序开发",		
		stage:"ongoing",		
		img:"images/d.jpg",
		submit_due:"1月20日",
		team_num:12
	},
	{
		name:"超级码力程序设计竞赛",
		match_id:"123213",
		host:"Avazu",
		type:"程序开发",		
		stage:"finished",		
		img:"images/d.jpg",
		submit_due:"1月20日",
		team_num:12
	},
	{
		name:"超级码力程序设计竞赛",
		match_id:"123213",
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
		match:"超级码力程序设计竞赛",
		prize:"一等奖"
	},
	{
		friend:"周小胖",
		img:"images/e.jpg",
		time:"2014-2-16 23:11:12",
		type:"friend_join_team",
		team:"猪八戒背媳妇",
		match:"超级码力程序设计竞赛",
	},
	{
		friend:"赵信",
		img:"images/f.jpg",
		time:"2014-2-16 23:11:12",
		type:"friend_create_team",
		team:"猪八戒背媳妇",
		match:"超级码力程序设计竞赛"
	},
	
	{
		friend:"周小胖",
		img:"images/e.jpg",
		time:"2014-2-16 23:11:12",
		type:"friend_follow_match",
		match:"超级码力程序设计竞赛"
	}
	];
	$scope.recommed_match=[
	{
		name:"超级码力程序设计竞赛",
		match_id:"123213",
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
		match:"AVAZU Holding 程序猿的崛起",		
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

myAppModule.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'newsCtr'
        })        
        .otherwise({
            redirectTo: '/news'
        });
}]);