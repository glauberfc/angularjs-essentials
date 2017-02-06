// Registering the parkingCtrl to the parking module
parking.controller("parkingCtrl", function ($scope, $filter) {
	$scope.appTitle = $filter("uppercase")("[Packt] Parking");
	// Binding the car's array to the scope
	$scope.cars = [];

	$scope.colors = ["White", "Black", "Blue", "Red", "Silver"];

	$scope.alertTopic = "Something went wrong!";
	$scope.descriptionTopic = "You must inform the plate and the color of the car!";

	// Binding the park function to the scope
	$scope.park = function (car) {
		$scope.cars.push(angular.copy(car));
		delete $scope.car;
	}
});