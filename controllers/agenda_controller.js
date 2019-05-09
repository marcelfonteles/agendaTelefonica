var app = angular.module("agenda");

app.controller("agendaCtrl", ["$scope", function($scope) {
  $scope.app = "Agenda Telefonica";
  $scope.contacts = [
      {nome: "Marcel Vieira", telefone: "+55 85 9 9999-8888", operadora: 41},
      {nome: "José Marques", telefone: "+55 85 9 9999-8888", operadora: 31},
      {nome: "João Gilberto", telefone: "+55 85 9 9999-8888", operadora: 25},
      {nome: "Guimarães Rosa", telefone: "+55 85 9 9999-8888", operadora: 15},
      {nome: "Jimmy Neutron", telefone: "+55 85 9 9999-8888", operadora: 21}
    ];
}])