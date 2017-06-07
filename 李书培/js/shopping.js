/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-18 20:55:07
 * @version $Id$
 */
$(function(){

	// 放大镜部分
	$(".navimg li").mouseenter(function(){
		var $index = $(this).index();
		$(".small img").attr({src:"../imgsshopping/big"+$index+".jpg"});
		$(".big img").attr({src:"../imgsshopping/big"+$index+".jpg"});
		$(".navimg li").eq($index).addClass("current").siblings("li").removeClass("current");

		
	})
		// 鼠标移入显示
		$(".small").hover(function(){
			$(".mask").stop().fadeIn();
			$(".big").stop().fadeIn();
		},function(){
			$(".mask").stop().fadeOut();
			$(".big").stop().fadeOut();
		})

			// 获取.mask的坐标值
			// 定义变量x,y分别表示small左、上边到left左、上边的距离
			$x = 0;
			$y = 0;

			$(".small").mousemove(function(e){
				e = e || event;
				$x = e.pageX  - $(this).offset().left - ($(".mask").width() / 2);//
				$y = e.pageY - $(this).offset().top - ($(".mask").height() / 2);//

				if($x < 0)
					$x = 0;
				else if ($x > $(this).width() - $(".mask").width()) 
					$x = $(this).width() - $(".mask").width();
				if($y < 0) 
					$y = 0;
				else if ($y > $(this).height() - $(".mask").height()) 
					$y = $(this).height() - $(".mask").height();

				$(".mask").css("top" , $y + "px");
				$(".mask").css("left" , $x + "px");
				// 根据small的移动情况，改变right里图片的位置
				$(".big img").css("top", - $y * 1.2 +"px");
				$(".big img").css("left", - $x * 1.2 +"px");
			})	
			   // 购买数量自增自减
			   $(".dr-count i:eq(0)").click(function(){
			   	 var $em = $(".dr-count em"),
			   	 	 v = $em.html(),
			   	 	 k =parseInt(v);
			   	 	 $(".dr-count em").html(k - 1);
			   	 	 if(k - 1 <1)
			   	 	 $(".dr-count em").html(1);
			   	 	window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

			   })
			   $(".dr-count i:eq(1)").click(function(){
			   	 var $em = $(".dr-count em"),
			   	 	 v = $em.html(),
			   	 	 k =parseInt(v);
			   	 	 $(".dr-count em").html(k + 1);
			   	 	 window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
			   })
			   // 购买数量自增自减结束

			   // 分享背景图遍历
			   $(".ringBuy-share a").not("shareDouban").each(
			   	function(index,els){
			   		var $index =index,
			   			$x = $index*31;
			   		$(els).css("background-position","-"+$x+"px 0")	
			  		$(".shareDouban").css("background-position","0 -34px")	
			   })
			   $(".ringBuy-share a").not(".shareDouban").hover(function(){
			   		var $index = $(this).index()-1;
			   			$x = $index*31;
			   		$(this).css("background-position","-"+$x+"px -68px")
			   },function(){
			   		$(this).css("background-position","-"+$x+"px 0")
			   })
			   $(".shareDouban").hover(function(){
			   		$(".shareDouban").css("background-position","0 -102px")	
			   },function(){
			   		$(".shareDouban").css("background-position","0 -34px")	
			   })
			   // 分享背景图遍历结束
			   // 热门导航点击轮播
			   var $img = $(".ring-hot-pic img").length,
			   		$imgwidth = $(".ring-hot-pic li").outerWidth(),
			   		$ul = $(".ring-hot-pic ul"),
			   		$ulwidth = $img*$imgwidth;
 				 	$ul.css({"width":$ulwidth});
 				// 右点击
			   	 $(".ring-hot-right").click(function(){
			   	 	
			   	 	$ul.animate({
			   	 		"left":-$imgwidth
			   	 	})
			   	 	$imgwidth+=$(".ring-hot-pic li").outerWidth();
			   	 	if(-$imgwidth <= -1080){
			   	 		$(this).stop().fadeOut();
			   	 		$imgwidth = -1080;
			   	 	}else{
			   	 		$(this).stop().fadeIn();

			   	 	}
			   	 })	
			   	 // 左点击
			   	 $(".ring-hot-left").click(function(){
			   	 	if($imgwidth >= 0){
			   	 		$imgwidth = 0;
			   	 	}
			   	 	$ul.animate({
			   	 		"left":$imgwidth
			   	 	})
			   	 	$imgwidth+=$(".ring-hot-pic li").outerWidth();
			   	 	
			   	  })   // 	有bug 有时间在研究

})
