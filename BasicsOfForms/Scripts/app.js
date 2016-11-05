"use strict";

var app = angular.module("App", []);

app.controller("AppCtrl", function ($scope, $http) {
    $scope.formSubmit = (user) => {

        $http.post("/api/AngularApi", user)
            .then(function (response) {
                console.log("Posted successfully.")
            }, function (error) {
                console.log("That definitely didn't work.")
            });
        console.log(user);
        event.preventDefault();
    };
});