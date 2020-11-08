Feature: Registro Pago de Servicios

A short summary of the feature

@tag1
Scenario: El administrador registra el pago de algun tipo de servicio por parte de un residente. 
	Given que el administrador se encuentra en la vista "Pagos"
	When el administrador quiera realizar el registro de un pago que haya realizado algun residente del condominio.
	Then  se mostrara un listado ordenado por fecha de envio de los voucher subidos por los residentes.Al presionar alguno de los vouchers se mostrar el detalle de este y al presionar "validado" se registrara automaticamente en el aplicación. 

@tag1
Scenario: El administrador visualiza si se ha validado correctamente un pago.
	Given que el administrador se encuentra en la vista "Pagos"
	When  El administrador quiere visualizar si el estado de su pago es correctamente.
	Then  mostrara un listado de los pagos , donde los que hayan sido validado estaran sombreados. 

@tag1
Scenario: El administrador visualiza si se ha validado incorrectamente un pago.
	Given que el administrador se encuentra en la vista "Pagos"
	When  El administrador quiere visualizar si el estado de su pago incorrecto
	Then  Mostrara un listado de los pagos, donde los que no hayan sido validado estarán sombreados de color rojo
