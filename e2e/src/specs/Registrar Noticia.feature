Feature: Registrar Noticia

A short summary of the feature

@tag1
Scenario: El administrador registra una noticia o novedad sobre el condominio en la aplicacion. 
	Given que el administrador se encuentra en la vista "Inicio". 
	When quiera registrar una nueva noticia o novedad respecto al condominio. 
	Then  se le mostrar un formulario con los siguientes campos : titulo, descripcion , fecha y hora. 
@tag1
Scenario: El administrador registra erroneamente una noticia o novedad sobre el condominio en la aplicación
	Given  que el administrador se encuentre en la vista "Inicio"
	When el administrador haya registrado erroneamente algun campo respecto a una noticia o novedad del condominio
	Then   la aplicación le mostrara un mensaje diciendo "Porfavor ingrese correctamente los campos".
@tag1
Scenario: El administrador registra sastifactoriamente una noticia o novedad sobre el condominio en la aplicación
	Given que el administrador se encuentra en la vista "Inicio". 
	When  el administrador haya registrado previamente una noticia o novedad  respecto al condominio
	Then   la aplicación le mostrara un mensaje diciendo "Su registro de pago fue exitoso" 
