const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el administrador se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el administrador quiera actualizar un residente.$/, function() {
    return true;
  });
  Then(/^para editar un residente se le mostrara un formulario con los siguientes campos: nombres , apellidos , email , password y codigo.$/, function() {
    return true;
  });
  Given(/^que el administrador se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el administrador quiera eliminar a un residente.$/, function() {
    return true;
  });
  Then(/^para eliminarlo podra presionar el boton "(.*)" respecto al residente seleccionado.$/, function(param1) {
    return true;
  });
  Given(/^que el administrador se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el administrador quiera saber si se elimino correctamentea un residente.$/, function() {
    return true;
  });
  Then(/^una vez dado click en eliminar se le mostrara un mensaje "(.*)"$/, function(param1) {
    return true;
  });
});
