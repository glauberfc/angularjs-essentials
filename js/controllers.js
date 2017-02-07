// Registering the parkingCtrl to the parking module
parking.controller("parkingCtrl", function ($scope, parkingService) {
	$scope.appTitle = "[Packt] Parking";
	// Binding the car's array to the scope
	$scope.cars = [];

	$scope.colors = ["Gray", "Black", "Blue", "Red", "Silver"];

	// Binding the park function to the scope
	$scope.park = function (car) {
		$scope.entrance = new Date();
		$scope.cars.push(angular.copy(car));
		delete $scope.car;
	};

	$scope.calculateTicket = function (car) {
		$scope.ticket = parkingService.calculateTicket(car);
	};
});