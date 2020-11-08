Feature: Gestionar Edificio Condominio

A short summary of the feature

@tag1
Scenario: El administrador añade un edificio y/o condominio.
	Given que el administrador se encuentra en la vista "Configuracion"
	When quiera añadir un edificioy/o condominio. 
	Then se aparecera un formulario para el registro con los siguientes campos : nombre y descripcion. 
@tag1
Scenario: El administrador edite un edificio y/o condominio. 
	Given que el administrador se encuentra en la vista "Configuracion"
	When quiera editar un edificioy/o condominio. 
	Then se aparecera un formulario para la edicion con los sus respectivos campos.
@tag1
Scenario:  El administrador elimina un edificio y/o condominio. 
	Given que el administrador se encuentra en la vista "Configuracion"
	When quiera eliminar un edificioy/o condominio. 
	Then se aparecera un formulario para eliminar este podra hacerlo presionando el boton "Eliminar" en el edificio y /o condominio registrado previamente. 
