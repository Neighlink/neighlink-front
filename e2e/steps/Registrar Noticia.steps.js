const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el administrador se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^quiera registrar una nueva noticia o novedad respecto al condominio.$/, function() {
    return true;
  });
  Then(/^se le mostrar un formulario con los siguientes campos : titulo, descripcion , fecha y hora.$/, function() {
    return true;
  });
  Given(/^que el administrador se encuentre en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el administrador haya registrado erroneamente algun campo respecto a una noticia o novedad del condominio$/, function() {
    return true;
  });
  Then(/^la aplicación le mostrara un mensaje diciendo "(.*)".$/, function(param1) {
    return true;
  });
  Given(/^que el administrador se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^el administrador haya registrado previamente una noticia o novedad  respecto al condominio$/, function() {
    return true;
  });
  Then(/^la aplicación le mostrara un mensaje diciendo "(.*)"$/, function(param1) {
    return true;
  });
});
