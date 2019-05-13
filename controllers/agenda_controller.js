var app = angular.module("agenda");

app.controller("agendaCtrl", ["$scope", function($scope) {
  $scope.app = "Agenda Telefonica";
  $scope.contacts = [
      {nome: "Marcel Vieira", telefone: "+55 85 9 9999-8888", codigo: 41},
      {nome: "José Marques", telefone: "+55 85 9 9999-8888", codigo: 31},
      {nome: "João Gilberto", telefone: "+55 85 9 9999-8888", codigo: 25},
      {nome: "Guimarães Rosa", telefone: "+55 85 9 9999-8888", codigo: 15},
      {nome: "Jimmy Neutron", telefone: "+55 85 9 9999-8888", codigo: 21}
    ];
  $scope.operadoras = [
      {nome: "Tim", codigo: 41, categoria: "Celular"},
      {nome: "Oi", codigo: 31, categoria: "Celular"},
      {nome: "GVT", codigo: 25, categoria: "Fixo"},
      {nome: "Vivo", codigo: 15, categoria: "Celular"},
      {nome: "Multiplay", codigo: 21, categoria: "Fixo"}
    ];
  $scope.addContact = function(contact) {
    contact.codigo = contact.codigo.codigo;
    $scope.contacts.push(angular.copy(contact));
    delete $scope.contact;
  };
  $scope.ifSelected = function(contacts) {
    return !contacts.some(function(contact) {
      return contact.select;
    });
  };
  $scope.removeContact = function(contacts) {
    $scope.contacts = contacts.filter(function(contact) {
      return !contact.select;
    });
  }; 
  $scope.findOperadora = function(codigo) {
    var operadora = $scope.operadoras.filter(function(operadora) {
        return operadora.codigo === codigo;
    });
    return operadora[0].nome;
  };
}])