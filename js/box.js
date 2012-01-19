function box(){
			$('.plants').click(function(){
				var list = $(this).children().children();
				var pic = $(this).children().children().children('img');
				var b = document.createElement('div');
				var x = document.createElement("div");
				var over = document.createElement('div');
				b.id = "box"
				x.id = "close"
				$(x).append("close - X")
				over.id = "over";
				$('#content').append(over);
				$('#over').append(b);
				$("#box").append(x);
				var clone = $(list).clone();
				$(clone[1]).children().each(function(){
					if (this.tagName == "IMG"){
						$("#box").append(this);
						this.className = 'window';
					}else{
						return;
					}
				});
				
				
				
				$("#box").css({width: "600px",opacity: "0",display : "block"}).animate({
						width		: "600px",
						opacity	: 1}, 500);
				$('#over').css({height: $(document).height()});				
				$('#close').click(function(){
					$('#over').remove();
				});
				$('#over').click(function(){
					//$('#over').remove();	
				});
			
			})
}