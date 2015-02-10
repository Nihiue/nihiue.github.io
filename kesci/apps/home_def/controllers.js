//Home_Default controllers.js

var myAppModule = angular.module('myApp', []);

myAppModule.controller('matchCtr',
function($scope) {
	$scope.match=[
	{
		name:"AVAZU Holding 程序猿的崛起",
		host:"Avazu",
		type:"程序开发",
		district:"不限",
		reward:"iPhone6，实习机会",
		sign_due:"12月12日",
		submit_due:"1月20日",
		img:"images/d.jpg"
	},
	{
		name:"AVAZU Holding 程序猿的崛起",
		host:"Avazu",
		district:"不限",
		type:"程序开发",
		reward:"iPhone6，实习机会",
		sign_due:"12月12日",
		submit_due:"1月20日",
		img:"images/d.jpg"
	},
	{
		name:"AVAZU Holding 程序猿的崛起",
		host:"Avazu",
		type:"程序开发",
		district:"不限",
		reward:"iPhone6，实习机会",
		sign_due:"12月12日",
		submit_due:"1月20日",
		img:"images/d.jpg"
	}];	
});

myAppModule.controller('teamCtr',
function($scope) {
	
	$scope.team=[
	{
		name:"梦之队",
		match:"AVAZU Holding 程序猿的崛起",		
		members:["郭冬临","冯巩","周杰伦","东尼大木"],
		skills:["PHP","JavaScript","MySql"],
		require_skills:["Web Design","Project Manage","HTML5"],		
		requier_members:1,
		signature:"观众朋友们,我想死你们了!",
		img:"images/e.jpg"
	},
	{
		name:"梦之队",
		match:"AVAZU Holding 程序猿的崛起",		
		members:["郭冬临","冯巩","周杰伦","东尼大木"],
		skills:["PHP","JavaScript","MySql"],
		require_skills:["Web Design","Project Manage","HTML5"],		
		requier_members:1,
		signature:"观众朋友们,我想死你们了!",
		img:"images/e.jpg"
	},
	{
		name:"梦之队",
		match:"AVAZU Holding 程序猿的崛起",		
		members:["郭冬临","冯巩","周杰伦","东尼大木"],
		skills:["PHP","JavaScript","MySql"],
		require_skills:["Web Design","Project Manage","HTML5"],		
		requier_members:1,
		signature:"观众朋友们,我想死你们了!",
		img:"images/e.jpg"
	}
];
});

myAppModule.controller('worksCtr',
function($scope) {	
	$scope.works=[
	{
		name:"HTML5 Boilerplate",
		match:"AVAZU Holding 程序猿的崛起",		
		team_members:["李小华","周大胖","王小明"],
		comment:"HTML5 Boilerplate 是一套专业的前端模版，用以开发快速、健壮、适应性强的app或网站。",
		img:"images/f.jpg"
	},
	{
		name:"HTML5 Boilerplate",
		match:"AVAZU Holding 程序猿的崛起",		
		team_members:["李小华","周大胖","王小明"],
		comment:"HTML5 Boilerplate 是一套专业的前端模版，用以开发快速、健壮、适应性强的app或网站。",
		img:"images/f.jpg"
	},
	{
		name:"HTML5 Boilerplate",
		match:"AVAZU Holding 程序猿的崛起",		
		team_members:["李小华","周大胖","王小明"],
		comment:"HTML5 Boilerplate 是一套专业的前端模版，用以开发快速、健壮、适应性强的app或网站。",
		img:"images/f.jpg"
	}];
});
myAppModule.controller('headerCtr',
function($scope) {
	$scope.isReg=false;
	$scope.showPinDiv=false;
});
