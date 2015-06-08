'use strict';

var app = angular.module('myApp', []);

app.controller("BookController", function($scope, $http) {
  $http.get('books/books.json').
    success(function(data) {
      $scope.books = data;
    }).
    error(function(data, status, headers, config) {
     console.log('Aaaaa!');
    });
});
