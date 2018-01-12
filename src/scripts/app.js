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
      })
      .catch( err => {
        console.error(err);
      });
  } // getUser()

  $scope.getComments = ()=> {
    $http.get('/api/comments')
      .then( res => {
        $scope.comments = res.data;
      })
      .catch( err => {
        console.error(err);
      })
  }

  $scope.postComment = ()=> {
    if (!$scope.login && $scope.comment.length > 0) {
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

  $scope.formatDate = date => {
    let day = moment(date).fromNow('minute');
    return day;
  }

  $scope.stageDelete = comment => {
    $scope.deleteQueue = comment;
  }

  $scope.deleteComment = () => {
    if ($scope.deleteQueue && !$scope.login) {
      $http.delete(`/api/comments/${$scope.deleteQueue._id}`)
        .then( res => {
          console.log(res);
          $scope.deleteQueue = undefined;
          $scope.getComments();
        })
        .catch( err => {
          console.error(err);
        });
    } else {
      console.log($scope.deleteQueue, $scope.login);
    }
  } // deleteComment()

}]);
