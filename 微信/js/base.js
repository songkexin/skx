// 适配屏幕
var autoScreen=function(){
	var x=$("html").width();
	$("html").css("font-size",20*(x/375)+"px");
}

autoScreen()
// tab 选择
function tabSwitch(obj){
	var thetab=$(obj.idn);
		thetab.find("li").click(function(){
			$(this).addClass("cur").siblings().removeClass();
			$(this).parents(".tab-title").next(".tab-cbox").find(".one-tabc").eq($(this).index()).show().siblings().hide();
		})

}

$(function(){
	autoScreen();
	var sidH=function(){
		var wh=$(window).height();
		var hh=$(".header").height();
		var sh=$(".sub-index").height();
		if(wh>(sh+hh)){
			$(".sub-index").css("height",(wh-hh)+"px")
		}
	}
	if($(".sub-index").length>0){
		sidH();
	}

	// 筛选下拉
	var filteract=function(){
		$(".filter-bar .the-item a").click(function(){
			var wh=$(window).outerHeight();
			var bh=$(".obox").outerHeight();
			var hh=$(".header").outerHeight();
			var theheight=function(){
				var b;
				if (wh>bh) {
					b=wh-hh;
				}else{
					b=bh-hh;
				}
				return b;
			}
			if($(this).hasClass("cur")){
				$(this).removeClass("cur");
				$(".drop-menu").hide();
			}else{
				$(this).addClass("cur").siblings().removeClass("cur");
				$(".drop-menu").show();
				$(".drop-menu .one-dm").hide();
				$(".drop-menu .one-dm").eq($(this).index()).slideDown(200)
				$(".drop-menu .cover").css("height",theheight()+"px");
			}
		})
		$(".drop-menu .cover").click(function(){
			$(".filter-bar .the-item a").removeClass("cur");
			$(".drop-menu").hide()
		})
	}
	filteract();

	function fixft(){
		if($(".fix-ft").length>0){
			$(".p-wrap").css("padding-bottom",$(".fix-ft").outerHeight()+"px")
		}
	}
	fixft();



	// 购物车
	(function(){
		var cv=1;

		$(".buyit-ft .to-sc").click(function(){
			if($(this).hasClass("hd-sc")){
				$(this).removeClass("hd-sc")
			}else{
				$(this).addClass("hd-sc")
			}
		})


		function totalPrice(){
			var pdprice=$("#pd-pirce").html();
			pdprice=Number(pdprice.slice(1)).toFixed(2);
			$("#pd-qc-total").html((pdprice*cv).toFixed(2))
		}
		
		$("#buy-quick-cart").click(function(){
			$(".quick-cart").show();
			$(".pcover").show();
			totalPrice()
		})
		$(".pcover").click(function(){
			$(".quick-cart").hide();
			$(".share-box").hide();
			$(this).hide()
		})

		$(".quick-cart .num-act .to-reduce").click(function(){
			cv=Number($(this).next().val());
			if(cv>1){
				cv--;
				$(this).next().val(cv)
			}
			$(".quick-cart .icon-cart em").html(cv);
			totalPrice();
		})
		$(".quick-cart .num-act .to-add").click(function(){
			cv=Number($(this).prev().val());
			cv++;
			$(this).prev().val(cv);
			totalPrice();
			$(".quick-cart .icon-cart em").html(cv);
		})


		$("#page-to-share").click(function(){
			$(".share-box").show();
			$(".pcover").show()
		})

	})();


	tabSwitch({
		idn:".tab-title"
	})

	
	// 屏幕尺寸变动时保持适配
	$(window).resize(function(){
		autoScreen();
		fixft()
	});
	
	/* 目录展开关闭 */
	$('.cata-list>li>span').click(function(){
		if($(this).parent().hasClass('open')){
			$(this).parent().removeClass('open');
			$(this).siblings().hide();
		} else{
			$(this).parent().addClass('open').siblings().removeClass('open');
			$(this).siblings().show().parent().siblings().find('ul').hide();
		}
	})
	$('.dm-style p a').click(function(){
		$(this).addClass('cur').siblings().removeClass('cur');
	})
	$('.drop-menu .city-deta li').click(function(){
		$(this).addClass('city-deta-on').siblings().removeClass('city-deta-on');
	})
	/* 听课证 */
	$('.class-box').height($('.obox').height()-$('.header').height());
	$('.cb-contab').width($('.cb-con').width()*$('.cb-con').length);
})