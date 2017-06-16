$(document).ready(function(){
	//code here...
	var code = $(".codemirror-textarea")[0];
	editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true,
		theme: "monokai",
	});
	
	createjs.Ticker.addEventListener("tick", tick);
		
	function tick(event){
		deltaTime = event.delta;

		if(typeof update == "function")
			update();
			stage.update();
	}
	
	$( "#preview" ).click(function() {
		var value = editor.getValue();
		stage.removeAllChildren();
		turtle.reset();
		eval(value);
		
	});
	$( "#save" ).click(function() {
		var savetext = editor.getValue();
		$.ajax({
		  method: "POST",
		  url: "/save",
		  data: { code: savetext, token: localStorage.getItem('rToken')}
		})
	  .done(function( token ) {
		localStorage.setItem('rToken', token);
	  });
	});
});

function myFunction() {
	var count = document.getElementById("valikko");
	if (count.style.display === "none") {
		count.style.display = "initial";
	} else {
		count.style.display = "none";
	}
}