$(document).ready(function(){
	$("#main").click(function(e){
		var $target = $(e.target);
		
		if(  $target.attr('id') == "post-title" ) {
			$target.hide();
			$("form.form-hidden", $target.parent() ).show();
			$("form.form-hidden input[type='text']", $target.parent() ).focus();
			$("form.form-hidden input[type='text']", $target.parent() ).blur( function(){
				if(this.value == this.defaultValue){
				  // alert("The value didn't change... no ajax");
					$target.show();
					$("form.form-hidden", $target.parent() ).hide();
				}else{
					// alert("The value changed! Send ajax");
					$("form.form-hidden input[type='text']", $target.parent() ).unbind('blur');
					var formdata = $("form.form-hidden", $target.parent() ).serialize();
					var destination = $("form.form-hidden", $target.parent() ).attr('action');
					$.ajax({
						type: "POST",
						url: destination,
						data: formdata,
						datatype : 'script',
						success: function(response){
							// console.log(response);
							$target.text( title );
							$target.show();
							$("form.form-hidden", $target.parent() ).hide();
						}
					});
				}
				
			});
		}
	});
	
	$("input, textarea").focus(function(){
		this.select();
		// if(this.value == this.defaultValue)
		//   {
		//    this.select();
		//   }
	});
	
});