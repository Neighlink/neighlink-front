Feature: Ver Historial de Pago de Servicios

A short summary of the feature

@R6
Scenario: El usuario visualiza sus pagos realizados en la aplicacion. 
	Given que el usuario se encuentra en la vista "Pagos"
	When el usuario quiere visualizar su historial de pagos.
	Then se mostrara la informacion detallada de los pagos realizados
@R7
Scenario: El usuario visualiza sus pagos pendientes en la aplicacion. 
	Given que el usuario se encuentra en la vista "Pagos"
	When el usuario quiere visualizar su historial de pagos.
	Then se mostraran la informacion detallada de los pagos pendientes. 
@R8
Scenario: El usuario visualiza sus pagos pendientes y realizados en la aplicacion.
	Given que el usuario se encuentra en la vista "Pagos"
	When el usuario quiere regresar a la ventana anterior.
	Then dentro de la vista de pagos el usuario podra retornar de manera instanea a la ventana anterior.