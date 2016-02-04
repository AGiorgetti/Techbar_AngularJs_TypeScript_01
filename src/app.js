(function() {

	function ShellController() {
		this.title = "Angular + TypeScript";
	}

	angular.module("app", ["ngRoute"])
		.controller("ShellController", ShellController)

		.config(["$routeProvider", function($routeProvider) {
			$routeProvider
				.when("/todolistController", { templateUrl: "todoList/todoListController.html" })
				.when("/todolistDirective", { templateUrl: "todoList/todoListDirective.html" })

				.when("/todolistJsController", { templateUrl: "todoList-js/todoListController.html" })
				.when("/todolistJsDirective", { templateUrl: "todoList-js/todoListDirective.html" })
				
				.otherwise({ templateUrl: "home.html" });
		}]);

})();