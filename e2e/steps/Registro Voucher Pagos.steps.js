const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el residente se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el residente quiere registrar un nuevo voucher de pago.$/, function() {
    return true;
  });
  Then(/^le aparecera un formulario con los siguientes campos : categoria, fecha de pago , monto e imagen.$/, function() {
    return true;
  });
  Given(/^que el residente se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el residente quiere registrar un nuevo voucher de pago, pero ingresa erroneamente los datos.$/, function() {
    return true;
  });
  Then(/^el residente ingresa de manera erronea un campo, la apliacion le mostrara un mensaje diciendo : "(.*)"$/, function(param1) {
    return true;
  });
  Given(/^que el residente se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el residente envia el fomrulario completo$/, function() {
    return true;
  });
  Then(/^la aplicación le mostrara un mensaje diciendo "(.*)"$/, function(param1) {
    return true;
  });
});
