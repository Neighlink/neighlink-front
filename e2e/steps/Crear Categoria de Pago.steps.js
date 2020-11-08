const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el usuario se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el usuario quiere registrar una nueva categoria de pago.$/, function() {
    return true;
  });
  Then(/^seleccionara la opcion "(.*)" , se mostrara un formulario con los siguientes campos : nombre , monto y periodo de pago .$/, function(param1) {
    return true;
  });
  Given(/^que el usuario se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el usuario registra los campos del formulario$/, function() {
    return true;
  });
  Then(/^el usuario ingresa de manera erronea un campo, la apliacion le mostrara un mensaje diciendo : "(.*)"$/, function(param1) {
    return true;
  });
  Given(/^que el usuario se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el usuario quiere registrar una nueva categoria de pago.$/, function() {
    return true;
  });
  Then(/^la aplicación le mostrara un mensaje diciendo "(.*)"$/, function(param1) {
    return true;
  });
});
