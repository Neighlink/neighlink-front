const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el administrador se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^quiera añadir un edificioy/o condominio.$/, function() {
    return true;
  });
  Then(/^se aparecera un formulario para el registro con los siguientes campos : nombre y descripcion.$/, function() {
    return true;
  });
  Given(/^que el administrador se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^quiera editar un edificioy/o condominio.$/, function() {
    return true;
  });
  Then(/^se aparecera un formulario para la edicion con los sus respectivos campos.$/, function() {
    return true;
  });
  Given(/^que el administrador se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^quiera eliminar un edificioy/o condominio.$/, function() {
    return true;
  });
  Then(/^se aparecera un formulario para eliminar este podra hacerlo presionando el boton "(.*)" en el edificio y /o condominio registrado previamente.$/, function(param1) {
    return true;
  });
});
