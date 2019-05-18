var app = angular.module("agenda");

app.config(function(
  $routeProvider,
  $locationProvider
  ) {
    $locationProvider.html5Mode({
      enabled: true
    })
    $routeProvider.
      when("/", {
        //template: "<h1>Hello World</h1>"
        templateUrl: "templates/inicio.html"
      }).
      when("/helloworld", {
        template: "<h1>Hello World!</h1>"
      }).
      otherwise({
        template:"<h1>Not Found</h1>"
      });
  });