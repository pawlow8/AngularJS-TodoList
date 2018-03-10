angular.module('todoApp', [])
 .controller('TodoListController', function($scope) {
 $scope.list = [
 {title: 'Stworzyć listę ', done: true},
 {title: 'Dodać zadania ', done: false},
 ];
 
$scope.remaining = function() {
 var count = 0;
 angular.forEach($scope.list, function(todo) {
 count += todo.done ? 0 : 1;
 });
 return count;
 };
 
$scope.archive = function() {
 var oldTodos = $scope.list;
 $scope.list = [];
 angular.forEach(oldTodos, function(todo) {
 if (!todo.done) $scope.list.push(todo);
 });
 };
 
$scope.add = function(){
 $scope.list.push({title: $scope.newTodo, done: false});
 $scope.newTodo = '';
 };
 });