const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el usuario se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^el administrador quiera crear una nueva encuesta.$/, function() {
    return true;
  });
  Then(/^al seleccionar "(.*)", se mostrara un formulario con los siguientes campos : titulo , descripcion, fecha de vencimiento y opciones.$/, function(param1) {
    return true;
  });
  Given(/^que el administrador se encuentra en la vista "(.*)" para verificar el registro.$/, function(param1) {
    return true;
  });
  When(/^el usuario quiera visualizar si su encuesta fue registrada correctamente.$/, function() {
    return true;
  });
  Then(/^se mostrara el listado de la ultima encuesta registrada en la parte superior , ya que estaran ordenadas por fecha de creacion.$/, function() {
    return true;
  });
  Given(/^que el administrador se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^el usuario quiera visualizar porque su encuesta no fue registrada correctamente.$/, function() {
    return true;
  });
  Then(/^se mostrara los campos en los cuales se su llenado fue incompleto mostrandole un mensaje diciendo "(.*)".$/, function(param1) {
    return true;
  });
});
