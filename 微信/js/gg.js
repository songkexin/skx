//var vue =require('./vue.min.js');
$(function() {
		var args = 'communication';
		$.ajax({
			type: "get",
			url: "http://127.0.0.1:3000/" + args,
			success: function(obj) {
				var datas = obj.posts;
				//console.log(datas)
				var myvue = new Vue({
					el: "#myvue",
					data: {
						items: datas,

					}
				});
					
					
					
					var open=true;
					var cell=1;
					var spetach="span";
					var timer=null;
				$(document).on("click", ".mlcr_b1", function() {
					clearInterval(timer);
//					console.log(this);
					//alert(4 )
					var _this=$(this);
					
					if(open==true){
						  _this.children('span').children("audio").attr('src','./1.mp3');
					timer=setInterval(function(){
						cell+=1;
						if(cell>3){
							cell=1;
						}
						//console.log(cell)
						_this.children("span").removeClass().addClass(spetach+cell);
//						console.log(spetach+cell)
						open=false;
					},500)
					}else{
						_this.children("span").removeClass().addClass("span1");
						$(this).children("span").children("audio").attr("src","");
						open=true;
					}
					
				})

			}
		});

	})