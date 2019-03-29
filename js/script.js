$( document ).ready(function() {
	// SUBMIT FORM
    $("#skierForm").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
     
    function ajaxPost(){
    	// PREPARE FORM DATA
    	var formData = {
    		skillLevel : $("#skierForm select[name='skillLevel']").val(),
    		ageRange :  $("#skierForm select[name='ageRange']").val(),
    		weightRange :  $("#skierForm select[name='weightRange']").val(),
    		heightRange :  $("#skierForm select[name='heightRange']").val(),
    		shoeSizeRange :  $("#skierForm select[name='shoeSizeRange']").val(),
    	}
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "https://tranquil-scrubland-93040.herokuapp.com/",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(result) {				
				if(result > 0){
					$("#postResult").html(result);
					}else{
					$("#postResult").html("Wynik poza tabelą DIN. Sprawdź poprawność wybranych parametrów.");
				}
			},
			error : function(e) {
				alert("Error!")
			}
		});
     }
})


