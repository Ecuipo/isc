$(document).ready( function () {
	$("button").on('click', function(event) {
		var id="t"+this.id;		
		modifica();


function modifica(){

		if (id.indexOf("m") !=-1) {
			var id_modificar = document.getElementById(id).value;
			if(confirm("Modificar el registro"))
				  window.location.href = "modi.php";

			{	
				$.ajax({
	        	type: "POST",
	       	 	url: "modificar.php",
	        	success : function(){
	                window.location.href = "modi.php";
	        		}
	    		});
			}
		}

}



	});	
});	