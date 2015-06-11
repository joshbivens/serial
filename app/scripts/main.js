'use strict';

var app = angular.module('myApp', []);

app.controller("BookController", function($scope, $http) {

  $scope.submit = function(){

    $http.get('books/books.json', $scope.query).
      success(function(data) {
        $scope.books = data;
        console.log(data, $scope.query);
      }).
      error(function(data) {
       console.log('$http.get error');
      });
    }

});
