function restart_highlight(brush_location){
	var found = 0;
	var regex =  new RegExp(brush_location);
	
	$("script").each(function(){
		var source = $(this).attr('src');
		console.log(source);
	});
	
	
	// // is there similar script that has been loaded? 
	// 
	// // if not, create it
	// var script = document.createElement('script'),
	// 	done = false
	// 	;
	// script.src = script_object.url;
	// script.type = 'text/javascript';
	// script.language = 'javascript';
	// script.onload = script.onreadystatechange = function()
	// {
	// 	if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete'))
	// 	{
	// 		done = true;
	// 		// Handle memory leak in IE
	// 		script.onload = script.onreadystatechange = null;
	// 		script.parentNode.removeChild(script);
	// 	}
	// };
	// 
	// // sync way of adding script tags to the page
	// document.body.appendChild(script);
	SyntaxHighlighter.defaults['tab-size'] = 2;
	SyntaxHighlighter.all();
}



function start_highlight(){
	// alert( "I am called in start_higlight");
	SyntaxHighlighter.autoloader.apply(null, path(
	  'applescript            @shBrushAppleScript.js',
	  'actionscript3 as3      @shBrushAS3.js',
	  'bash shell             @shBrushBash.js',
	  'coldfusion cf          @shBrushColdFusion.js',
	  'cpp c                  @shBrushCpp.js',
	  'c# c-sharp csharp      @shBrushCSharp.js',
	  'css                    @shBrushCss.js',
	  'delphi pascal          @shBrushDelphi.js',
	  'diff patch pas         @shBrushDiff.js',
	  'erl erlang             @shBrushErlang.js',
	  'groovy                 @shBrushGroovy.js',
	  'java                   @shBrushJava.js',
	  'jfx javafx             @shBrushJavaFX.js',
	  'js jscript javascript  @shBrushJScript.js',
	  'perl pl                @shBrushPerl.js',
	  'php                    @shBrushPhp.js',
	  'text plain             @shBrushPlain.js',
	  'py python              @shBrushPython.js',
	  'ruby rails ror rb      @shBrushRuby.js',
	  'sass scss              @shBrushSass.js',
	  'scala                  @shBrushScala.js',
	  'sql                    @shBrushSql.js',
	  'vb vbnet               @shBrushVb.js',
	  'xml xhtml xslt html    @shBrushXml.js'
	));
	SyntaxHighlighter.defaults['tab-size'] = 2;
	SyntaxHighlighter.all();
}

function path()
{
	// alert("i am calledin the path");
  var args = arguments,
      result = []
      ;

  for(var i = 0; i < args.length; i++)
      result.push(args[i].replace('@', '/javascripts/SyntaxHighlighter/scripts/'));

  return result
};