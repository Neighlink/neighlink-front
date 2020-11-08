Feature: Registrar Regla de Convivencia

A short summary of the feature

@tag1
Scenario: El administrador registra una nueva norma de convivencia
	Given que el administrador se encuentra en la vista "Reglas". 
	When el  administrador quiera registrar una nueva norma de convivencia.
	Then seleccionara la opcion "Agregar" y se mostrara un formulario con los siguientes campos: Detalle de la norma y la fecha de vigencia. 

@tag1
Scenario: El administrador edita una norma de convivencia
	Given que el administrador se encuentra en la vista "Reglas". 
	When el  administrador quiera editar una norma de convivencia.
	Then se mostraran todas las normas de convivencias existentes dando opcion a seleccionar la opcion "Editar" en cualquier norma y se mostrara un formulario con los campos ya existentes dandole opcion a modifica.  

@tag1
Scenario:  El administrador elimina una norma de convivencia existente.
	Given que el administrador se encuentra en la vista donde se muestra la lista de reglas. 
	When el  administrador quiere eliminar una norma de convivencia existente
	Then se mostraran todas las normas de convivencias existentes dando opcion a seleccionar la opcion "Eliminar" en cualquier norma. 
