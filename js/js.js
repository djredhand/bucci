jQuery(document).ready(function($) {
function init(){	
		$('.plants').click(function(){
			alert('this')
		});
				   
	var hash = window.location.hash.substr(1);
	var href = $('#nav li a').each(function(){
		var href = $(this).attr('href');
		if(hash==href.substr(0,href.length-5)){
			var toLoad = hash+'.html #content';
			$('#content').load(toLoad);
			$.getScript('js/box.js', function() {
           box();
        });
		}											
	});

	$('#nav li').click(function(){		  
		var toLoad = $(this).children('a').attr('href')+' #content';
		$('#content').fadeOut('fast',loadContent);
		window.location.hash = $(this).children('a').attr('href').substr(0,$(this).children('a').attr('href').length-5);
		
		function loadContent() {
			$('#content').load(toLoad,'',showNewContent() );
			$.getScript('js/box.js', function() {
            box();
        });
				
		}
		
		function showNewContent() {
			$('#content').fadeIn('normal',hideLoader());
		}
		
		function hideLoader() {
			//$('#load').fadeOut('normal');
		}
		
		return false;
		
	});
	$('#bulbs').click(function(){
		alert('hey')
	});
	console.log('nope')
}

init();
});
