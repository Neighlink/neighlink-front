Feature: Crear Categoria de Pago

A short summary of the feature

@tag1
Scenario: El administradir ha creado una categoria de pago del condominion en la aplicacion.
	Given que el usuario se encuentra en la vista "Configuracion" 
	When el usuario quiere registrar una nueva categoria de pago.
	Then seleccionara la opcion "agregar nueva categoria" , se mostrara un formulario con los siguientes campos : nombre , monto y periodo de pago . 
@tag1
Scenario: El administrador ha creado de manera erronea una categoria de pago del condominio en la aplicación
	Given que el usuario se encuentra en la vista "Configuracion" 
	When el usuario registra los campos del formulario
	Then el usuario ingresa de manera erronea un campo, la apliacion le mostrara un mensaje diciendo : "Ingrese el valor adecuado al campo"
@tag1
Scenario: El administrador crea de manera sastifactoria la categoria de pago del condominio
	Given que el usuario se encuentra en la vista "Configuracion" 
	When el usuario quiere registrar una nueva categoria de pago.
	Then la aplicación le mostrara un mensaje diciendo "Su registro de categoria de pago fue exitoso"
