
var stage;
var codes;

  function init() {
    stage = new createjs.Stage("codeCanvas");
		
	$.ajax({
		method: "GET",
		url: "/load",
		data: {token: localStorage.getItem('rToken')}	
		
	})
	.done( function ( data ) {
		console.log(data);
		var codes = data.codes;
		var mycode = data.mycode;
		if (mycode) {
			editor.setValue(mycode);
		}
		/* evaluoi koodi, joka on liittyneenä rTokeniin*/
		for (var i = 0; i < codes.length; i++) {
			eval(codes[i]);
			
		}
		stage.update();
	});
  }

watch(codes, function(){
	console.log("Joku tallensi jotain :D");
});

var test = "WHIII";

console.log("JEEJEE");

watch(test, function(){
	console.log("HIHEHI");
});

setTimeout(function(){
	test = "JEEJEJEE";
	console.log("JAAJAA");
}, 1000);
