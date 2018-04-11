$(document).ready( function () {
	$("#btnAdd").on('click', function(event) {
		event.preventDefault();
		alert("Estas seguro de trbajar");	
		valida();


	

		function valida(){

		var usuario = $("#usuario").val();
		var password = $("#password").val();
	
	if (usuario == "samuel" && password == "1234"){

			window.location.href = "principal.html";
		} 

		else {
			window.location.href = "principal.html";	

	    }

	}







		if (id.indexOf("m") !=-1) {
    			alert('modificar');



			var id_modificar = document.getElementById(id).value;
			alert(id_modificar);
		}
		if (id.indexOf("e") !=-1) {
    			alert('eliminar');
			var id_eliminar = document.getElementById(id).value;
			alert(id_eliminar);
		}		
	});
});



  

	
