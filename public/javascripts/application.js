$(document).ready(function(){
	$("#main").click(function(e){
		var $target = $(e.target);
		
		if(  $target.attr('id') == "post-title" ) {
			$target.hide();
			$("form.post_title", $target.parent() ).show();
			$("form.post_title input[type='text']", $target.parent() ).focus();
			// $("form.post_title input[type='text']", $target.parent() ).attr('value', $target.text());
			$("form.post_title input[type='text']", $target.parent() ).blur( function(){
				if(this.value == this.defaultValue){
				  // // alert("The value didn't change... no ajax");
					$target.show();
					$("form.post_title", $target.parent() ).hide();
				}else{
					// // alert("The value changed! Send ajax");
					$("form.post_title input[type='text']", $target.parent() ).unbind('blur');
					var formdata = $("form.post_title", $target.parent() ).serialize();
					var destination = $("form.post_title", $target.parent() ).attr('action');
					var newTitle = $("form.post_title input[type='text']", $target.parent() ).attr('value');
					$.ajax({
						type: "POST",
						url: destination,
						data: formdata,
						dataType : 'script',
						success: function(response){
							$("form.post_title", $target.parent() ).hide();
							$target.text( title );
							$target.show();
							$("form.post_title", $target.parent() ).replaceWith(new_form);
							
						}
					});
				}
				
			});
		}
		
		if( $target.parent().hasClass('step') ){
			if( $target.is('h2') ){
				$target.hide();
				$("form.new_step_title input[type='text']", $target.parent() ).show();
				$("form.new_step_title input[type='text']", $target.parent() ).focus();
				$("form.new_step_title input[type='text']", $target.parent() ).blur( function(){
					// // alert("blurred");
					if(this.value == this.defaultValue){
						// alert("value doesn't change");
						$target.show();
						$("form.new_step_title input[type='text']", $target.parent() ).hide();
					}else{
						var new_text = $("form.new_step_title input[type='text']", $target.parent() ).attr('value');
						$("form.new_step_title input[type='text']", $target.parent() ).unbind('blur');
						$target.text( new_text );
						$target.show();
						$("form.new_step_title", $target.parent() ).hide();
						
						var formdata = $("form.new_step_title", $target.parent() ).serialize();
						var destination = $("form.new_step_title", $target.parent() ).attr('action');
						$.ajax({
							type: "POST",
							url: destination,
							data: formdata,
							datatype : 'script',
							success: function(response){
								// $target.text( title );
								$("form.new_step_title", $target.parent() ).replaceWith(new_form);
							}
						});
					}

				});
				
				
			}
			
			if( $target.is('p') ){
				// // alert("yeah, this is p");
			}
		}
		
		
		
		
	});
	
	// $("input, textarea").focus(function(){
	// 	// alert("boom boom, focused");
	// 	this.select();
	// });
	
	$("#main").focus(function(e){
		var $target_focus = $(e.target);
		if( $target_focus.is("input[type='text']") || $target_focus.is('textarea')){
			e.target.select();
		}
	});
	
});