Feature: Editar Eliminar Residentes

A short summary of the feature

@tag1
Scenario: El administrador actualiza residentes del condominio.
	Given que el administrador se encuentra en la vista "Residentes" 
	When el administrador quiera actualizar un residente.  
	Then  para editar un residente se le mostrara un formulario con los siguientes campos: nombres , apellidos , email , password y codigo.
@tag1
Scenario: El administrador elimina residentes del condominio.
	Given que el administrador se encuentra en la vista "Residentes" 
	When el administrador quiera eliminar a un residente.   
	Then para eliminarlo podra presionar el boton "Eliminar" respecto al residente seleccionado.
@tag1
Scenario: El administrador desea saber si se elimino correctamente a un residentes del condominio.
	Given que el administrador se encuentra en la vista "Residentes" 
	When el administrador quiera saber si se elimino correctamentea un residente.  
	Then una vez dado click en eliminar se le mostrara un mensaje "Residente -Nombre, Apellido Codigo eliminado sastifactoriamente"
