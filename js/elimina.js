$(document).ready( function () {
	$("button").on('click', function(event) {
		var id="t"+this.id;		
		elimina();


function elimina(){

		if (id.indexOf("e") !=-1) {
			var id_eliminar = document.getElementById(id).value;
			if(confirm("Eliminar el registro"))
			{	
				$.ajax({
	        	type: "POST",
	       	 	url: "eliminar.php",
	        	success : function(){
	                window.location.href = "eliminar.php?id="+id_eliminar;
	        		}
	    		});
			}
		}

}



	});	
});	
