const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el administrador se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^el administrador quiera realizar el registro de un pago que haya realizado algun residente del condominio.$/, function() {
    return true;
  });
  Then(/^se mostrara un listado ordenado por fecha de envio de los voucher subidos por los residentes.Al presionar alguno de los vouchers se mostrar el detalle de este y al presionar "(.*)" se registrara automaticamente en el aplicación.$/, function(param1) {
    return true;
  });
  Given(/^que el administrador se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^El administrador quiere visualizar si el estado de su pago es correctamente.$/, function() {
    return true;
  });
  Then(/^mostrara un listado de los pagos , donde los que hayan sido validado estaran sombreados.$/, function() {
    return true;
  });
  Given(/^que el administrador se encuentra en la vista "(.*)"$/, function(param1) {
    return true;
  });
  When(/^El administrador quiere visualizar si el estado de su pago incorrecto$/, function() {
    return true;
  });
  Then(/^Mostrara un listado de los pagos, donde los que no hayan sido validado estarán sombreados de color rojo$/, function() {
    return true;
  });
});
