// animate easing control
function invertedEasingFunction(x) {
    return (--x) * x * x + 1;
}
// 背包客暫時拿掉
var app = angular.module('myApp', ['duScroll'])
    .value('duScrollDuration', 1000)
    .value('duScrollEasing', invertedEasingFunction);
app.controller('mainController', ['$scope', function($scope) {
    // 控制餐廳頁面與背包客頁面 預設餐廳show
    $scope.isRestaurantShow = true;
    $scope.showBackpackers = function() {
        $scope.isRestaurantShow = false;
    }
    $scope.showRestaurant = function() {
        $scope.isRestaurantShow = true;
    }
}]);