const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
  Given(/^el usuario esta en la pantalla Registrate$/, function() {
    return true;
  });
  When(/^el usuarioingrese el código de su condominio o edificio, la aplicación verificasi es válidoo no el código ingresado$/, function() {
    return true;
  });
  Then(/^si es válido, la aplicación redirige al usuarioal siguiente pasopara que éstecoloque sus credenciales;caso contrario le mostrará un mensajea dicho usuario diciendoque el código no es válido.$/, function() {
    return true;
  });
  Given(/^que el usuario está en el segundo paso de la sección “Regístrate”.$/, function() {
    return true;
  });
  When(/^el usuario ingresa sus credenciales (email y password).$/, function() {
    return true;
  });
  Then(/^la aplicación validará que el email sea nuevo, es decir, que no exista un email igual ya registrado en la aplicación; si es así, se redirecciona a la vista principal, caso contrario se muestra un mensaje al usuario diciéndole que ya existe ese email.$/, function() {
    return true;
  });
  Given(/^que el usuario esta en el primer paso de la sección “Regístrate”.$/, function() {
    return true;
  });
  When(/^el usuario ingresa sus credenciales pero este esta incompleto.$/, function() {
    return true;
  });
  Then(/^la aplicación le mostrara un mensaje a dicho usuario diciendo “Error de Registro complete los campos”$/, function() {
    return true;
  });
});
