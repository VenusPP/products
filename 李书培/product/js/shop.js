/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-17 20:40:30
 * @version $Id$
 */
$(function(){
	// 关注DR部分
	$(".dr-reseclet:eq(4)").mouseenter(function(){
		$(".dr-weixin").stop().show();
	});
	$(".dr-weixin").mouseleave(function(){
		$(this).stop().hide();
	})
	// 关注DR部分结束
 // DR弹出文本框部分开始

 	$(".dr-input input").hover(function(){
		$(".dr-input p").stop().fadeIn();
	},function(){
		$(".dr-input p").stop().fadeOut();
	});
 // DR弹出文本框部分结束
 // 左侧NAVtable切换开始
  $("#dr_navTableA p").mouseenter(function(){
  	 $(this).addClass("dr-navborderB").siblings("p").removeClass("dr-navborderB");
  	 $("#dr_navpicL a").eq($(this).index()).addClass("currnt").siblings("a").removeClass("currnt");
  })
 // 左侧NAVtable切换结束
 // 右侧NAVtable切换开始
  $("#dr_navTableAA p").mouseenter(function(){
  	$(this).addClass("dr-navborderB").siblings("p").removeClass("dr-navborderB");
  	$("#dr_navpicLL a").eq($(this).index()).addClass("currnt").siblings("a").removeClass("currnt");
  });
 // 右侧NAVtable切换结束

 // 第二部分table兰切换左侧开始
  $("#dr_nnavTableA p").mouseenter(function(){
  	 $(this).addClass("dr-navborderB").siblings("p").removeClass("dr-navborderB");
  	 $("#dr_nnavpicL a").eq($(this).index()).addClass("currnt").siblings("a").removeClass("currnt");
  })
 // 第二部分table兰切换左侧结束
 // 第二部分table兰切换右侧开始
   $("#dr_nnavTableAA p").mouseenter(function(){
  	$(this).addClass("dr-navborderB").siblings("p").removeClass("dr-navborderB");
  	$("#dr_nnavpicLL a").eq($(this).index()).addClass("currnt").siblings("a").removeClass("currnt");
  });
 // 第二部分右侧table切换结束
 // 大导航栏切换开始
 $("#dr_nav li").mouseenter(function(){
 		$(".dr-AllnavTable").children("div").eq($(this).index()).addClass("selection").siblings("div").removeClass("selection");

 })
 $(".dr-AllnavTable").children("div").mouseleave(function(){
 	$(this).removeClass("selection");
 })
 // 大导航栏切换结束

 // 轮播图开始
  $(".dr-banner").hover(function(){
  	$(".dr-prev").stop().fadeIn();
  	$(".dr-next").stop().fadeIn();
  	clearInterval(timer);

  },function(){
  	$(".dr-prev").stop().fadeOut();
  	$(".dr-next").stop().fadeOut();
  	timer = setInterval(move,3000);

  })
  var $img = $("#dr_bannerul li"), //所有待轮播显示的图片盒子
  	  $len = $img.length, // 图片张数
  	  $currntIndex = 0, // 当前显示图片索引
  	  $square = 0,// 用来控制小圆点
  	  $nextIndex = 1,
  	  timer = null,
  	  flage = false; // 即将显示图片的索引
  	  	// 实现自动轮播效果
  	  	// 动态创建小圆点
  	  	var span = "";
  	  	for(var i = 0;i<$len;i++){
  	  		span += "<span></span>"
  	  	}
  	  	// 将$span中字符串表示的元素节点包装到jQuery对象中
  	  	// 添加到 div.dr-pages中
  	  	$(span).appendTo(".dr-pages").first().addClass("curr");

  	  	// 两侧按钮部分
  	  	$(".dr-next").click(function(){
  	  		move();
  	  		flage = true;
  	  	});
  	  	$(".dr-prev").click(function(){
  	  		$currntIndex = $currntIndex-1;
  	  		$square = $square -1;
  	  		if($currntIndex || $square <0){
  	  			$currntIndex = $len-1;
  	  			$square = $spanlen-1;
  	  		}
  	  		console.log($currntIndex,$square)
  	  		move();
  	  		flage = true;
  	  	})
  	  	// 添加小圆点鼠标移入事件
  	  	$(".dr-pages").delegate("span","mouseenter",function(){
  	  		var $_index = $(this).index();
  	  		var $that = $(this);
  	  			$(this).addClass("curr").siblings().removeClass("curr");
  	  			$img.eq($_index).stop().fadeIn(600).siblings().fadeOut();
  	  			$square = $currntIndex =$_index;	  			
  	  	})
  	  	 var $spanlen = $(".dr-pages span").length;
  	  	 // 开启定时器
  	  	timer = setInterval(move,3000);
  	  	function move(){
  	  		$currntIndex++;
  	  		if($currntIndex > $len-1){
  	  		$currntIndex = 0; // 假如索大于图片的索引号就跳转到0
  	  		} 
  	  		$img.eq($currntIndex).fadeIn(600).siblings().fadeOut();
  	  		$square++;
  	  		if($square > $spanlen-1){
  	  		$square = 0; // 假如索大于小按钮的索引号就跳转到0
  	  		}

  	  		$(".dr-pages span").eq($square).addClass("curr").siblings("span").removeClass("curr");
  	  	}
  	  	// 轮播结束
  	  	 //底部背景图遍历
  	 $("#dr_footericon i").each(function(index,ele){
  	 	 var x =index*60;
  	 	$(ele).css("background-position","-"+x+"px 2px")
  	 })
  	 //底部背景图遍历结束
  	 // 侧边栏开始 遍历背景图
  	 $(".silederbar i").each(function(index,ele){
  	 	var y = index*39;
  	 	$(this).css("background-position","0  -"+y+"px"); 
  	 })
  	 // 侧边栏开始 遍历背景图 结束
  	 // 侧边栏
  	 var $H = $(".dr-navbk").offset().top;
  	 	$(window).scroll(function(){
  	 		$DH = $(document).scrollTop();
  	 		if($DH > $H){
  	 			$(".silederbar").stop().fadeIn(400);
  	 		}else{
  	 			$(".silederbar").stop().fadeOut(400);

  	 		}
  	 	})
  	 $(".dr-barli").click(function(){
  	 	$("html,body").animate({"scrollTop":0},1000); 
  	 })	
  	  	//侧边栏结束
  	  	// 首页结束
        // 吸顶部分
        // var $H = $(".nav-part2").offset().top;
        $(window).scroll(function(){
          var $DH = $(document).scrollTop();
          if($DH > $H){
            $(".nav-part2").css({
              "position":"fixed",
              "top":0,
              "z-index":10
            });
            $(".demo1").css("margin-top",$(".nav-part2").height());
          }else{
            $(".nav-part2").css({
              "position":"static"
         })
            $(".demo1").css("margin-top",0);
          
        }
        })
        // 吸顶部分结束
        // 点击更换区域开始
          var $navA =$(".nav-part2 a");
          $navA.click(function(){
            
              $("html,body").stop().animate({
                    // 给具有相同效果的元素添加

            "scrollTop" : $(".dr-demo").children("div").eq($(this).index()).offset().top
                },1000);
            });
        // 点击更换区域结束
        // 文字显示区域
        $(".page4L .Form-input").hover(function(){
          $(".dr-remenber-last").stop().fadeIn(400);
        },function(){
          $(".dr-remenber-last").stop().fadeOut(400);

        })
  	 })
