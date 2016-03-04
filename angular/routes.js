(function(){
	"use strict";

	angular.module('app.routes').config(function($stateProvider, $urlRouterProvider){

		var getView = function(viewName){
			return './views/app/' + viewName + '/' + viewName + '.html';
		};

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('app', {
				abstract: true,
				views: {
					header: {
						templateUrl: getView('header')
					},
					footer: {
						templateUrl: getView('footer')
					},
					main: {}
				}
			})
			.state('app.landing', {
				url: '/',
				data: {},
				views: {
					'main@': {
						templateUrl: getView('landing')
					}
				}
			})
			.state('app.create_post',{
				url:'/create-post',
				views: {
					'main@':{
						templateUrl: getView('create_post')
					}
				}
			});

	});
})();
