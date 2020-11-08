Feature: Registrar Voto

A short summary of the feature

@tag1
Scenario: El usuario ha registrado su voto para una encuesta determinada. 
	Given que el usuario se encuentra en la vista "Encuestas".
	When el usuario quiera registrar su voto.
	Then al seleccionar una opcion como respuesta a alguna encuesta , y luego presionar enviar , la aplicación registrara el voto.
@tag1
Scenario: El usuario ha visualizado si su voto ha sido registrado en la aplicación
	Given que el usuario se encuentra en la vista "Encuestas".
	When quiera ver si su voto se registro con exito. 
	Then la aplicación mostrar la opcion registrada como respuesta de manera sombreada. 
@tag1
Scenario: El usuario desea cambiar su voto para una encuesta determinada. 
	Given que el usuario se encuentra en la vista "Encuestas".
	When quiera cambiar su voto.
	Then la aplicación mostrar una ventana donde permitira editar la respuesta dada por el usuario.La aplicación registrara su nuevo voto.
