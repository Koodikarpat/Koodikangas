$(document).ready(function(){
	//code here...
	var code = $(".codemirror-textarea")[0];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true,
		theme: "monokai",
	});
	
	$( "#preview" ).click(function() {
		var value = editor.getValue();
		stage.removeAllChildren();
		eval(value);
		createjs.Ticker.addEventListener("tick", tick);
		
		function tick(event){
			deltaTime = event.delta;
			
			if(typeof update == "function")
				update();
				
			stage.update();
		}
		stage.update();
	});
	$( "#save" ).click(function() {
		var savetext = editor.getValue();
		$.ajax({
		  method: "GET",
		  url: "/save",
		  data: { code: savetext}
		})
	  .done(function( msg ) {
		alert( "Data Saved: " + msg );
	  });
	});
});