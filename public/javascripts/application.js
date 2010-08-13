$(document).ready(function(){
	start_highlight();
	var total_script = $("script").length;
	// alert("Total number of scripts is " + total_script);
	$("script").each(function(){
		var source = $(this).attr('src');
		console.log(source);
	});
});

