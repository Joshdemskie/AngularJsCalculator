// Joshua Demskie Midterm web dev 2
var myApp = angular.module('myApp', [])
    myApp.controller('myCtrl', function($scope) 
	{
        // Initalize result variable
        $scope.result = '';

        // Addition function
        $scope.add = function() 
		{
            $scope.result = Number($scope.firstNumber) + Number($scope.secondNumber);
        };

        // Subtraction function
        $scope.subtract = function() 
		{
            $scope.result = ($scope.firstNumber) - ($scope.secondNumber);
        };

        // Multiplication function
        $scope.multiply = function() 
		{
            $scope.result = ($scope.firstNumber) * ($scope.secondNumber);
        };

        // Division function
        $scope.divide = function() 
		{
            // makes sure the divisor in this case is not 0 to avoid a divide by 0 error
            if ($scope.secondNumber != 0) 
			{
                $scope.result = ($scope.firstNumber) / ($scope.secondNumber);
            } else {
                // If divisor is zero, display an error message
                $scope.result = "Cannot divide by zero. Please change the second number and try again.";
            }
        };
		// modulus function
		$scope.modulus = function()
		{
			
			$scope.result = ($scope.firstNumber) % ($scope.secondNumber);
		}
		
		
    }
	);
