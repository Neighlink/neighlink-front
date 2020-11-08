Feature: Ver Novedades

A short summary of the feature

@R5
Scenario: El usuario revisa el  mural de noticias en la aplicacion. 
	Given que el usuario esta en la seccion de "Inicio". 
	When El usuario quiera informarse sobre actividades desarrolladas tiempo atras en el condominio/edificio
	Then  al seleccionar esta opcion , la aplicación mostrara toda la informacion detallada y ordernada por fecha de publicacion, que haya sido registrada por el administrador. 

@R5
Scenario: El usuario revisa el mural de noticias pasadas en la aplicacion. 
	Given que el usuario esta en la seccion de "Inicio". 
	When el usuario quiera informarse sobre las actividades que se realizaran en tiempo atras en el condominio/edificio. 
	Then  al seleccionar la fecha, la aplicación mostrara toda la informacion detallada y ordernada por fecha de publicacion, que haya sido registrada por el administrador.
@R5
Scenario: El usuario revisa de manera quien publico la noticia el muro de la aplicacion. 
	Given que el usuario esta en la seccion de "Inicio". 
	When El usuario quiera informarse de manera detallada sobre las actividades del condominio/edificio
	Then   al seleccionar esta opcion , la aplicación mostrara nombre y foto del administrador del condominio.
