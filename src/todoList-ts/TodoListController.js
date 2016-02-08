/**
 * a controller for the todo list: we're going to use controllerAs syntax
 */
TodoListController.$inject = ["TodoListService"];
function TodoListController(todoListService) {

    var _todoListService = todoListService;

    this.todos = _todoListService.todos;

    this.addTodo = function (task) {
        _todoListService.addTodo(task);
    }

    this.removeTodo = function (id) {
        // ask for confirmation
        if (confirm("Do you really want to delete task: " + id + "?")) {
            _todoListService.removeTodo(id);
        }
    }
}

angular.module("app")
	.controller("TodoListController", TodoListController)