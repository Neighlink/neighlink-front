const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el usuario se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^el adminitrador quiere validar que los pagos se hayan realizado a la fecha esperada.$/, function() {
    return true;
  });
  Then(/^se mostraran todos los pagos que hayan sido registrados previamente por el administrador.$/, function() {
    return true;
  });
  Given(/^que el usuario se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^el adminitrador quiere visualizar el historial de pagos de un residente.$/, function() {
    return true;
  });
  Then(/^se mostrara una entrada de texto , donde podra colocar el codigo del residente y se mostrara su historial de pagos.$/, function() {
    return true;
  });
  Given(/^que el usuario se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^el adminitrador quiere visualizar el historial de pagos de un residente.$/, function() {
    return true;
  });
  Then(/^se mostrara una entrada de texto , donde podra colocar el codigo del residente, el administrador coloca de manera erronea el codigo del residente, mostrandole un mensaje diciendo "(.*)".$/, function(param1) {
    return true;
  });
});
