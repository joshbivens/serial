var app = angular.module('myApp', []);

app.controller('BookController', function($scope) {
  $scope.books = bookList;
});

var bookList = [
  {
    title: 'Foundation and Empire',
    pageNum: 245,
    publisher: 'Avon',
    description: 'Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor.',
  },
  {
    title: 'The Dispossessed',
    pageNum: 305,
    publisher: 'Bantam',
    description: 'Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
  },
  {
    title: 'Downbellow Station',
    pageNum: 456,
    publisher: 'Baen',
    description: 'Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus.',
  }
];
