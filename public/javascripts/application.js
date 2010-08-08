$(document).ready(function(){
	$("#main").click(function(e){
		var $target = $(e.target);
		
		if(  $target.attr('id') == "post-title" ) {
			$target.hide();
			$("form.form-hidden", $target.parent() ).show();
		}
		
		

		
	});
	
});