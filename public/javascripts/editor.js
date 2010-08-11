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
			// alert("enter is pressed");
			return false;
		}
	});
	
	$("#main").click(function(e){
		var $target = $(e.target);
		
		// for pic upload
		if( $target.hasClass("upload-image")){			
			var destination = $("form.add_detail_pic", $target.parent() ).attr('action');
			console.log("destination is "  + destination);
			var session_key_name = $("#session_key_name").attr('value');
			console.log("session_key_name is " + session_key_name);
			var session_key_value = $("#session_key_value").attr('value');
			console.log("session_key_value is " + session_key_value);
			var auth_token  = $("#uploadify_auth_token").attr('value');
			console.log("auth_token is " + auth_token);
			var step_order = $("form.new_step_description input.order", $target.parent().parent()).attr('value');
			var uuid   = $("form.new_step_description input.secret_key", $target.parent().parent()).attr('value');
			var post_owner = $("form.new_step_description input.post_owner", $target.parent().parent()).attr('value');
			
			var loading_bar = $("div.loading-bar", $target.parent() ).attr('id');
			console.log("The loading bar is " + loading_bar);
			var dataSend = {};
			dataSend['from_uploadify'] = "yes";
			dataSend[session_key_name] = session_key_value;
			dataSend['authenticity_token'] = encodeURIComponent(auth_token);
			dataSend['step_order'] = step_order;
			dataSend['uuid']  = uuid;
			dataSend['post_owner']  = post_owner;
			
			$("input.uploadify", $target.parent() ).uploadify({
				'uploader'       : '/javascripts/uploadify.swf',
				'script'         : destination,
				'cancelImg'      : '/images/cancel.png',
				'fileDataName'    : 'detail[photo]',
				'folder'         : 'uploads',
				'queueID'        : 'pic-loader-step_1', // if you specify this, need to provide script with <div id="fileQueue"></div>
				'auto'           : true,
				'multi'          : true,
				'scriptAccess'   : 'always',
				'scriptData'  : dataSend,
				// onComplete		: function(event, queueID, fileObj, response, data ){
				// 	alert("OMG, saved");
				// 	// console.log(response);
				// 	// 			// alert(response);
				// 	// 			alert("boom boom done");
				// 	// 			var obj= $.parseJSON( response );
				// 	// 			
				// 	// 			// create_img_on_the_fly;
				// 	// 			var $image = $("<img src='" +obj.source+ "' />");
				// 	// 			// wrap_the_img_with_li;
				// 	// 			var $list = $image.wrap("<li id='product-image-" + obj.id +"' />");
				// 	// 			// append_the_li_into_the_corresponding_ul;
				// 	// 			$list.appendTo("ul.uploaded_pic_wrapper", $target.parent() );
				// 	// 			// alert(obj.id);
				// 	// 			// var $new_loader = $("#loader").clone().attr('id', '').show();
				// 	// 			// $new_loader.prependTo("#container");
				// 	// 			// $new_loader.wrap("<li id='product-image-" + obj.id +"' />");
				// 	// 			// getImageReady(obj.id, obj.destination);
				// }
				onComplete : function(event, queueID, fileObj, response, data ){
					alert("ZOMG... ");
				}
			});
			
			
			
			// var content = $("div.content-pic-wrapper", $(this).parent() ).html();
			// 
			// $.fancybox(
			// 		content,
			// 		{
			//       'autoDimensions'	: false,
			// 			'width'         		: 500,
			// 			'height'        		: 200,
			// 			'transitionIn'		: 'fade',
			// 			'transitionOut'		: 'fade',
			// 			'padding' : 20,
			// 			'onStart' : function(e){
			// 				console.log("we are in the onStart");
			// 				console.log( $("#fancybox-inner").html() );
			// 			}
			// 		}
			// 	);
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


