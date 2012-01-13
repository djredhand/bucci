function box(){
		function init(){
			$('div .plants').click(function(){
				var b = document.createElement('div');
				var x = document.createElement("div");
				var over = document.createElement('div');
				b.id = "box"
				x.id = "close"
				$(x).append("X")
				over.id = "over";
				$('#content').append(over);
				$('#over').append(b);
				$("#box").append(x);
				$("#box").css({display : "block"}).animate({
						opacity	: 1,
						width	: "600px",
						height	: "400px"
					}, 200);
				
				$('#close').click(function(){
					$('#over').remove();	
				});
				$('#over').click(function(){
					$('#over').remove();	
				});
			
			})
			
		}//end init()
init();
	
}