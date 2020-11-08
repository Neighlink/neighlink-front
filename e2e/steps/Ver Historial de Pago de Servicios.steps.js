const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el usuario se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el usuario quiere visualizar su historial de pagos.$/, function() {
    return true;
  });
  Then(/^se mostrara la informacion detallada de los pagos realizados$/, function() {
    return true;
  });
  Given(/^que el usuario se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el usuario quiere visualizar su historial de pagos.$/, function() {
    return true;
  });
  Then(/^se mostraran la informacion detallada de los pagos pendientes.$/, function() {
    return true;
  });
  Given(/^que el usuario se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el usuario quiere regresar a la ventana anterior.$/, function() {
    return true;
  });
  Then(/^dentro de la vista de pagos el usuario podra retornar de manera instanea a la ventana anterior.$/, function() {
    return true;
  });
});
