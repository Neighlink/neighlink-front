const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^que el usuario se encuentra en la vista "(.*)".$/, function(param1) {
    return true;
  });
  When(/^el usuario usuario seleccione la opcion "(.*)".$/, function(param1) {
    return true;
  });
  Then(/^se mostraran todas las reglas de convivencia descritas de forma detallada.$/, function() {
    return true;
  });
});
