angular.module("mainModule", [])
    // Register an object instance as a value and name it "person"
    .value("person", {
        firstName: "",
        lastName: "",

        getFullName: function ()
        {
            return this.firstName + " " + this.lastName;
        }
    })
    .value("hoge", {

    })
    // Get the "person" registered object instance through Dependency Injection
    .controller("mainController", function ($scope, person, hoge)
    {
        console.log("------------------------------------------");
        console.log(hoge);
        console.log("------------------------------------------");
        person.firstName = "John";
        person.lastName = "Doe";

        // Set a variable on the scope to reference the "person" instance
        // from the HTML template.
        $scope.personInstance = person;
    });


angular.module("app", [])
    .controller("simpleController", function($scope) {
        // Initialize the model variables
        $scope.firstName = "John";
        $scope.lastName = "Doe";

        // Define utility functions
        $scope.getFullName = function ()
        {
            return $scope.firstName + " " + $scope.lastName;
        };
});