const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el administrador se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^el  administrador quiera registrar una nueva norma de convivencia.$/, function() {
    return true;
  });
  Then(/^seleccionara la opcion "(.*)" y se mostrara un formulario con los siguientes campos: Detalle de la norma y la fecha de vigencia.$/, function(param1) {
    return true;
  });
  Given(/^que el administrador se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^el  administrador quiera editar una norma de convivencia.$/, function() {
    return true;
  });
  Then(/^se mostraran todas las normas de convivencias existentes dando opcion a seleccionar la opcion "(.*)" en cualquier norma y se mostrara un formulario con los campos ya existentes dandole opcion a modifica.$/, function(param1) {
    return true;
  });
  Given(/^que el administrador se encuentra en la vista donde se muestra la lista de reglas.$/, function() {
    return true;
  });
  When(/^el  administrador quiere eliminar una norma de convivencia existente$/, function() {
    return true;
  });
  Then(/^se mostraran todas las normas de convivencias existentes dando opcion a seleccionar la opcion "(.*)" en cualquier norma.$/, function(param1) {
    return true;
  });
});
