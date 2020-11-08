Feature: Registro Voucher Pagos

A short summary of the feature

@tag1
Scenario: El residente registra un voucher pago  . 
	Given que el residente se encuentra en la vista "Pagos"
	When el residente quiere registrar un nuevo voucher de pago.
	Then le aparecera un formulario con los siguientes campos : categoria, fecha de pago , monto e imagen. 
@tag2
Scenario: El residente registra un voucher pago erroneamente.
	Given que el residente se encuentra en la vista "Pagos"
	When el residente quiere registrar un nuevo voucher de pago, pero ingresa erroneamente los datos.
	Then el residente ingresa de manera erronea un campo, la apliacion le mostrara un mensaje diciendo : "Ingrese el valor adecuado al campo"
@tag3
Scenario: El residente registra satifactoriamente un voucher de pago
	Given que el residente se encuentra en la vista "Pagos"
	When el residente envia el fomrulario completo
	Then la aplicación le mostrara un mensaje diciendo "Su registro de pago fue exitoso"
