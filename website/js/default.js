$(document).ready(function(){
	//code here...
	var code = $(".codemirror-textarea")[0];
	var editor = CodeMirror.fromTextArea(code, {
		lineNumbers : true,
		theme: "monokai"
	});
$( "#preview" ).click(function() {
	var value = editor.getValue();
	eval(value);
	stage.update();
});
});