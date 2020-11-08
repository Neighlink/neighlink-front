Feature: Historial de Pago de Servicios

A short summary of the feature

@tag1
Scenario: El administrador visualiza el historial de pagos de todos los  residentes en la aplicación.
	Given que el usuario se encuentra en la vista "Historial de Pagos". 
	When el adminitrador quiere validar que los pagos se hayan realizado a la fecha esperada.
	Then se mostraran todos los pagos que hayan sido registrados previamente por el administrador. 
@tag2
Scenario: El administrador visualiza el historial de pagos de un residente en especifico.
	Given que el usuario se encuentra en la vista "Historial de Pagos". 
	When el adminitrador quiere visualizar el historial de pagos de un residente.
	Then se mostrara una entrada de texto , donde podra colocar el codigo del residente y se mostrara su historial de pagos. 
@tag3
Scenario: El administrador visualiza el historial de pagos de un residente erroneamente
	Given que el usuario se encuentra en la vista "Historial de Pagos". 
	When el adminitrador quiere visualizar el historial de pagos de un residente.
	Then se mostrara una entrada de texto , donde podra colocar el codigo del residente, el administrador coloca de manera erronea el codigo del residente, mostrandole un mensaje diciendo "Error Vuelva ingresar un codigo valido".
