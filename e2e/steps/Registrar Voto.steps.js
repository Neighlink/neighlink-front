const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el usuario se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^el usuario quiera registrar su voto.$/, function() {
    return true;
  });
  Then(/^al seleccionar una opcion como respuesta a alguna encuesta , y luego presionar enviar , la aplicación registrara el voto.$/, function() {
    return true;
  });
  Given(/^que el usuario se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^quiera ver si su voto se registro con exito.$/, function() {
    return true;
  });
  Then(/^la aplicación mostrar la opcion registrada como respuesta de manera sombreada.$/, function() {
    return true;
  });
  Given(/^que el usuario se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^quiera cambiar su voto.$/, function() {
    return true;
  });
  Then(/^la aplicación mostrar una ventana donde permitira editar la respuesta dada por el usuario.La aplicación registrara su nuevo voto.$/, function() {
    return true;
  });
});
