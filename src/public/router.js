app
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise("/404/");

  $stateProvider
	.state('404',{
    url: '/404/',
		views: {
	  	'main': {
				templateUrl: 'app/views/404.html'
	  	}
		}
	})
  .state('callList',{
    url: '/calls',
		views: {
	  	'main': {
				templateUrl: 'app/views/callList.html',
				controller: 'CallListController'
	  	}
		}
	})
	.state('conferenceList',{
    url: '/conferences',
		views: {
	  	'main': {
				templateUrl: 'app/views/conferenceList.html',
				controller: 'ConferenceListController'
	  	}
		}
	})
	.state('users',{
    url: '/users',
		views: {
	  	'main': {
				templateUrl: 'app/views/users.html',
				controller: 'UsersController'
	  	}
		}
	})
	.state('user',{
    url: '/user/:user',
		views: {
	  	'main': {
				templateUrl: 'app/views/userList.html',
				controller: 'userListController'
	  	}
		}
	})
	.state('resetUsers',{
    url: '/resetUsers',
		views: {
	  	'main': {
				templateUrl: 'app/views/resetUsers.html',
				controller: 'ResetUsersController'
	  	}
		}
	})
	.state('manager',{
    url: '/manager',
		views: {
	  	'main': {
				templateUrl: 'app/views/manager.html'
	  	}
		}
	})
	.state('home',{
    url: '/',
		views: {
	  	'main': {
				templateUrl: 'app/views/home.html'
	  	}
		}
	});

	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
});