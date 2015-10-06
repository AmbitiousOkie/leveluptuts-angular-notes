angular.module('directoryApp', ['ngAnimate','ui.router'])
	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {

				url: '/home',
				templateUrl: 'static/home.html',
				controller: "directoryController as dirList"
			})
			.state('about', {

				url: '/about',
				templateUrl: 'static/about.html'
			});

	})
	.controller('directoryController', function() {
		
		var dirList = this;

		dirList.toggle = true;

		dirList.list = [
			{name:'Scott', age: 29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg'},
			{name:'Ross', age: 31, img:'https://s3.amazonaws.com/uifaces/faces/twitter/mantia/128.jpg'},
			{name:'Ben', age: 32, img:'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'},
			{name:'Courtney', age: 29, img:'https://s3.amazonaws.com/uifaces/faces/twitter/sauro/128.jpg'}
		];

		dirList.addPerson = function() {
			dirList.list.push({name:dirList.name, age: dirList.age});
			dirList.name = '';
			dirList.age = 0;
		};
	})
	.directive('helloWorld', function(){
		return {
			template: 'Hello World'
		}
	});