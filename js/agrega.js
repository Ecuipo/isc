$(document).ready( function () {
	$("#ag").on('click', function(event) {
		event.preventDefault();
		alert("Agregar registro");	
		agregar();

});


function agregar(){

	var nombre = $("#nombre").val();
	var paterno = $("#paterno").val();
	var materno = $("#materno").val();	

	if (nombre == "" || paterno == "" || materno == "" ){
			alert("mal")
			window.location.href = "registro.php";	
	}

	else{
		window.location.href = "registro.php";	
	}

	
	


	


   };

		
});	