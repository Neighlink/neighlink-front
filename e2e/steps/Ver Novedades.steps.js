const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el usuario esta en la seccion de "(.*)".$/, function(param1) {
    return true;
  });
  When(/^El usuario quiera informarse sobre actividades desarrolladas tiempo atras en el condominio/edificio$/, function() {
    return true;
  });
  Then(/^al seleccionar esta opcion , la aplicación mostrara toda la informacion detallada y ordernada por fecha de publicacion, que haya sido registrada por el administrador.$/, function() {
    return true;
  });
  Given(/^que el usuario esta en la seccion de "(.*)".$/, function(param1) {
    return true;
  });
  When(/^el usuario quiera informarse sobre las actividades que se realizaran en tiempo atras en el condominio/edificio.$/, function() {
    return true;
  });
  Then(/^al seleccionar la fecha, la aplicación mostrara toda la informacion detallada y ordernada por fecha de publicacion, que haya sido registrada por el administrador.$/, function() {
    return true;
  });
  Given(/^que el usuario esta en la seccion de "(.*)".$/, function(param1) {
    return true;
  });
  When(/^El usuario quiera informarse de manera detallada sobre las actividades del condominio/edificio$/, function() {
    return true;
  });
  Then(/^al seleccionar esta opcion , la aplicación mostrara nombre y foto del administrador del condominio.$/, function() {
    return true;
  });
});
