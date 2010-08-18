$(document).ready(function(){
	navControlBinder("#interesting", "#interesting-guides");
	navControlBinder("#login", "#login-form");
	navControlBinder("#register", "#registration-form");
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
