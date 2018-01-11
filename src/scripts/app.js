let app = angular.module('myApp', []);

app.controller('evuary', ['$scope', '$http' ,function($scope, $http) {

  // console.log('ng');
  $scope.login = true;
  $scope.user = {};

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
      })
  } // getUser()

}]);
