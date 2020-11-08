Feature: Crear encuesta

A short summary of the feature

@tag1
Scenario: El administrador registra un encuesta.
	Given que el usuario se encuentra en la vista "Encuestas".
	When el administrador quiera crear una nueva encuesta.
	Then al seleccionar "Crear Encuesta", se mostrara un formulario con los siguientes campos : titulo , descripcion, fecha de vencimiento y opciones. 
@tag1
Scenario: El administrador verifica que su encuesta se haya creado correctamente.
	Given que el administrador se encuentra en la vista "Encuestas" para verificar el registro. 
	When el usuario quiera visualizar si su encuesta fue registrada correctamente.
	Then se mostrara el listado de la ultima encuesta registrada en la parte superior , ya que estaran ordenadas por fecha de creacion.  
@tag1
Scenario: El administrador no puede registra una encuesta correctamente por error en los campos. 
	Given que el administrador se encuentra en la vista "Encuestas".
	When el usuario quiera visualizar porque su encuesta no fue registrada correctamente.
	Then se mostrara los campos en los cuales se su llenado fue incompleto mostrandole un mensaje diciendo "Porfavor llene los campos solicitados".