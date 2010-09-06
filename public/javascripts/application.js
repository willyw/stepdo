$(document).ready(function(){
	navControlBinder("#interesting", "#interesting-guides");
	navControlBinder("#login", "#login-form");
	navControlBinder("#register", "#registration-form");
	
	$("ul#steps-container").click(function(e){
		// alert("steps-container is clicked");
		var $target = $(e.target);

		if($target.hasClass("img-detail")){
			// getting all the links
			// alert($target.attr('src'));
			var big_img = []; 
			$("img.img-detail", $target.parent().parent()).each(function(){
				big_img.push( $(this).attr('bigsource') );
			});
			console.log(big_img.length);
			
			for(var i = 0 ; i < big_img.length ; i++){
				console.log( big_img[i] );
			}
		}
		
	});
});


function navControlBinder(nav_id, div_id){
	$(nav_id).click(function(){
		if($(this).hasClass('selected')){
			
		}else{
			$("div.welcome-form").each(function(){
				$(this).removeClass("current_show").hide();
			});
			$("a.nav-welcome").each(function(){
				$(this).removeClass("selected");
			});
			$(div_id).addClass("current_show").show();
			$(this).addClass('selected');
		}
		return false;
	});
}


// somewhere over here, put the fancy box trigger.
