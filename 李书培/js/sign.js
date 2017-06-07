/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-17 10:41:44
 * @version $Id$
 */

$(function(){
	 // 轮播部分开始
	 var $img = $("#dr_bannerul li"),
	 	 $imgWidth = $img.width(),
	 	 $key = 0, // 操作图片张数	
	 	 timer = null;
	 	 var len = $("#dr_bannerul li").length; 
	 	 timer = setInterval(move,3000)
	 	  function move(){
	 	  	$key++;
	 	  	if($key > len-1){
	 	  		$key =0;
	 	  		$("#dr_bannerul li").eq($key).stop().fadeIn(700).siblings().fadeOut()
	 	  }else{
	 	  	$("#dr_bannerul li").eq($key).stop().fadeIn(700).siblings().fadeOut()
	 	  }
	 	}
	 // 轮播部分结束
	 // 底部背景图轮换
	 	$("#dr_footericon i").each(function(index,ele){
  	 	 var x =index*60;
  	 	$(ele).css("background-position","-"+x+"px 2px")
  	 })
	 // 底部背景图轮换结束
	 // 获取短信部分
	 $(".dr-formMid button").on("click",function(){
	 	var z= /^[0-9]*$/
	 	 if($(".dr-formTop :text").val().length == 0){
	 	 	$(".dr-pastfirst").stop().fadeIn(300);
	 	 	$(".dr-formTop").css("margin-top","-10px");
	 	 	$(".dr-input-one").css("border-color","red");
	 	 }else if(!z.test($(".dr-formTop :text").val())){
	 	 	$(".dr-pastfirst").stop().fadeIn(300).html("格式不对哦");
	 	 	$(".dr-input-one").css("border-color","red");
	 	 	$(".dr-formTop").css("margin-top","-10px");
	 	 	$(".dr-pastfirst span").css("margin-right","10px")
	 	 }else if($(".dr-formTop :text").value ="18482138847"){
	 	 	// $(".dr-formMid button").html("ahah")
	 	 		var num =60,
	 	 			timer = null;
	 	 		$(".dr-formMid button").attr("disabled",true)	
	 	 		timer = setInterval(autopaly,1000)
	 	 		function autopaly(){
	 	 			num--;
	 	 			if(num <= 0){
	 	 				$(".dr-formMid button").html("请重新点击")
	 	 				$(".dr-formMid button").attr("disabled",false)
	 	 				num = 60;
	 	 				$(".dr-formMid :text").val("5566");
	 	 				clearInterval(timer);
	 	 			}else{
	 	 				$(".dr-formMid button").html(num+"后获取短信")
	 	 			}
	 	 			}
	 	 			}	
	 			});
	 		// 获取短信部分结束
	 		// 登录切换部分

			$(".dr-pastform").children("h3").click(function(){
				$(this).removeClass("current").siblings("h3").addClass("current")
				var $index = $(this).index();
				$(".dr-pastform").children("div").eq($index).stop().fadeIn(400).siblings("div").stop().fadeOut(400);
			})
})