"use strict";

var app = angular.module("App", []);

app.controller("AppCtrl", function ($scope, $http) {
    $scope.formSubmit = () => {
        var form = $("#Form").serialize();
        $http.post("/api/AngularForm", form).then(console.log(JSON.stringify(form)));
        event.preventDefault();
    };
});