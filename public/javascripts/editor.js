$(document).ready(function(){

	$("#add_step").click(function(){
		// code to add step
		var $step = $('div.step').last().clone();
		var stepCounter  = $('div.step').length;
		$step.attr('id', "step-" + (stepCounter + 1) ); 
		$step.appendTo("#main ul");
		$("h2", $step).text("New Step of Your Guide");
		$("input.order", $step).each(function(){
			$(this).attr('value', (stepCounter + 1) );
		});
		return false;
	});
	
	$("#main").keypress(function(e){
		if(e.keyCode == '13'){
			// alert("enter is pressend");
			return false;
		}
	});
	
	$("#main").click(function(e){
		var $target = $(e.target);
		
		// for pic upload
		if( $target.hasClass("upload-image")){
			// set up the uploadify 
			
	
			// $("div.content-pic-wrapper", $(this).parent() ).show();
			// $("input.uploadify", $(this).parent() ).show();
			
			var destination = $("form.add_detail_pic", $(this).parent() ).attr('action');
			console.log("destination is "  + destination);
			var session_key_name = $("#session_key_name").attr('value');
			console.log("session_key_name is " + session_key_name);
			var session_key_value = $("#session_key_value").attr('value');
			console.log("session_key_value is " + session_key_value);
			var auth_token  = $("#uploadify_auth_token").attr('value');
			console.log("auth_token is " + auth_token);
			
			
			$("input.uploadify", $(this).parent() ).uploadify({
				'uploader'       : '/javascripts/uploadify.swf',
				'script'         : destination,
				'cancelImg'      : '/images/cancel.png',
				'fileDataName'    : 'detail[photo]',
				'folder'         : 'uploads',
				'queueID'        : 'fileQueue', // if you specify this, need to provide script with <div id="fileQueue"></div>
				'auto'           : true,
				'multi'          : true,
				'scriptAccess'   : 'always',
				'scriptData' 		: {
					'from_uploadify' : 'yes',
	        session_key_name : session_key_value,
	        'authenticity_token'  : encodeURIComponent(auth_token)
	      }
			});
			
			
			
			var content = $("div.content-pic-wrapper", $(this).parent() ).html();
			
			$.fancybox(
					content,
					{
			      'autoDimensions'	: false,
						'width'         		: 500,
						'height'        		: 200,
						'transitionIn'		: 'fade',
						'transitionOut'		: 'fade',
						'padding' : 20,
						'onStart' : function(e){
							console.log("we are in the onStart");
							console.log( $("#fancybox-inner").html() );
						}
					}
				);
		}
		
		
		if(  $target.attr('id') == "post-title" ) {
			$target.hide();
			$("form.post_title", $target.parent() ).show();
			$("form.post_title input[type='text']", $target.parent() ).focus();
			$("form.post_title input[type='text']", $target.parent() ).blur( function(){
				if(this.value == this.defaultValue){
					$target.show();
					$("form.post_title", $target.parent() ).hide();
				}else{
					$("form.post_title input[type='text']", $target.parent() ).unbind('blur');
					var formdata = $("form.post_title", $target.parent() ).serialize();
					var destination = $("form.post_title", $target.parent() ).attr('action');
					
					
					var new_text = $("form.post_title input[type='text']", $target.parent() ).attr('value');
					$target.text( new_text );
					
					$("form.post_title", $target.parent() ).hide();
					$target.show();
					$.ajax({
						type: "POST",
						url: destination,
						data: formdata,
						dataType : 'script',
						success: function(response){
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
					if(this.value == this.defaultValue){
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
				$target.hide();
				$("form.new_step_description textarea", $target.parent() ).show();
				$("form.new_step_description textarea", $target.parent() ).focus();

				$("form.new_step_description textarea", $target.parent() ).blur( function(){
					if(this.value == this.defaultValue){
						$target.show();
						$("form.new_step_description textarea", $target.parent() ).hide();
					}else{
						var new_text = $("form.new_step_description textarea", $target.parent() ).attr('value');
						$("form.new_step_description textarea", $target.parent() ).unbind('blur');
						$target.text( new_text );
						$target.show();
						$("form.new_step_description", $target.parent() ).hide();
						
						var formdata = $("form.new_step_description", $target.parent() ).serialize();
						var destination = $("form.new_step_description", $target.parent() ).attr('action');
						$.ajax({
							type: "POST",
							url: destination,
							data: formdata,
							datatype : 'script',
							success: function(response){
								// $target.text( title );
								$("form.new_step_description", $target.parent() ).replaceWith(new_form);
							}
						});
					}
				});
			}
		}	
	});
	

	$("#main").focus(function(e){
		var $target_focus = $(e.target);
		if( $target_focus.is("input[type='text']") || $target_focus.is('textarea')){
			e.target.select();
		}
	});
	
});