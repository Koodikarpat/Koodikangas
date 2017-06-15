

$('#drawlink').click(function(e){  // Muista laittaa napin toiminto aina tähän ylös ennen toolbar-funktiota, muuten ei toimi!!
    e.preventDefault(); 
	var url = $(this).attr('href');
	window.open(url, '_blank');
});


// Eli ennen tätä \/
$(document).ready(function(){
	$('#nappula').toolbar({
		content: '#toolbar-options',
	position: 'bottom',
	event: 'click',
	hideOnClick: true
	});
});

