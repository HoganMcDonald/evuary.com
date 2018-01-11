let app = angular.module('myApp', []);

app.controller('evuary', ['$scope', '$http' ,function($scope, $http) {

  // console.log('ng');
  $scope.login = true;
  $scope.user = {};
  $scope.comment = "Happy Birthday Evi!";
  $scope.comments = [];

  $scope.getUser = ()=> {
    $http.get('/api/profile')
      .then( res => {
        if (res.data) {
          $scope.login = false;
          $scope.user = res.data;
        }
        console.log(res.data);
      })
      .catch( err => {
        console.error(err);
      });
  } // getUser()

  $scope.getComments = ()=> {
    $http.get('/api/comments')
      .then( res => {
        $scope.comments = res.data;
        console.log($scope.comments);
      })
      .catch( err => {
        console.error(err);
      })
  }

  $scope.postComment = ()=> {
    if ($scope.user.name && $scope.comment.length > 0) {
      $http.post('/api/comments', {
        content: $scope.comment
      })
        .then( res => {
          $scope.comment = "";
          $scope.getComments();
        })
        .catch( err => {
          console.error(err);
        });
    }
  } // postComment()

}]);
