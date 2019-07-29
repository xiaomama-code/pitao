

	$(".on").click(function(){
	$.post("./sign.php",{usename:$("#Username").val(),pwd:$("#passWord").val()},function(str){
		  if(str==1){
		  	location.href="http://127.0.0.1/VANCL/index.html";
		  }else{
		  	alert("账号或密码错误");
		  }
	});
});

$(function(){
	$("#item_img_2").mousemove(function(){
	$("#item_img_1").css({ "border": "1px solid #B4B4B4"});
	$("#item_img_1 span").css({ "border": "1px solid #B4B4B4"});
	 $(this).css({"border": "1px solid #a10000"});
	 $("#item_img_2 span").css({"border": "1px solid #a10000"});
	 $("#imgCenter").css("background-image","url(./img/ss.jpg");
	 $("#bigview").css("background-image","url(./img/bigview1.jpg")
});
	$("#item_img_1").mousemove(function(){
		$("#item_img_2").css({ "border": "1px solid #B4B4B4"});
		$("#item_img_2 span").css({ "border": "1px solid #B4B4B4"});
		 $(this).css({"border": "1px solid #a10000"});
		 $("#item_img_1 span").css({"border": "1px solid #a10000"});
//		  $("#imgCenter").css("background-image","url(./img/min.jpg");
	});
	
	$("#listone").click(function(){
		$(this).css({"border":"1px solid #a10000"});
	    $("#listone #out").css({"border":"1px solid #a10000"});
	    $("#list").css({"border":"1px solid #B4B4B4"});
	    $("#list>#out").css({"border":"1px solid #B4B4B4"});
	    $("#ok").css({"display":"none"});
	    $("#oko").css({"display":"block"});
	    $("#bac").css("background","url(./img/black.jpg)");
	    $("#abc").css("background","url(./img/black.jpg) 0 -68px");
	    $("#imgCenter").css("background-image","url(./img/11.jpg");
	    $("#item_img_1").mousemove(function(){
	      $("#imgCenter").css("background-image","url(./img/11.jpg");
	      $("#bigview").css("background-image","url(./img/bb.jpg");
	    });
	    $("#item_img_2").mousemove(function(){
	    	 $("#imgCenter").css("background-image","url(./img/12.jpg");
	    	 $("#bigview").css("background-image","url(./img/bb1.jpg");
	    })
	   
	});
	
	$("#list").click(function(){
		$(this).css({"border":"1px solid #a10000"});
	    $("#list>#out").css({"border":"1px solid #a10000"});
	    $("#listone").css({"border":"1px solid #B4B4B4"});
	    $("#listone #out").css({"border":"1px solid #B4B4B4"});
	    $("#oko").css({"display":"none"});
	    $("#ok").css({"display":"block"});
	    $("#bac").css("background","url(./img/joinimage.jpg)");
	    $("#abc").css("background","url(./img/joinimage.jpg) 0 -68px");
	    $("#imgCenter").css("background-image","url(./img/min.jpg");
	    $("#item_img_1").mousemove(function(){
	      $("#imgCenter").css("background-image","url(./img/min.jpg");
	       $("#bigview").css("background-image","url(./img/bigview.jpg");
	    });
	    $("#item_img_2").mousemove(function(){
	    	 $("#imgCenter").css("background-image","url(./img/ss.jpg");
	    	 $("#bigview").css("background-image","url(./img/bigview1.jpg");
	    });
	});
	
});
//选择尺码
$("#selsize li").click(function(){
	
	$(".size").css({background:"none"});
	$(".size").eq($(this).index()).css("background","url(./img/ok.png)");
	$("#thing").html($(this).html());
})

