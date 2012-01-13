function box(){
		function bulbs(){
			$('#bulbs').click(function(){
				$('#content').append('hello');
				alert('bulbs fired');
			
			})
		}
bulbs();
}