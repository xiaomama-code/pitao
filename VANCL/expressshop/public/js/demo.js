//轮播图
$(function(){
  	$("#toright").hover(function(){
  		$("#toleft").hide()
  	},function(){
  		$("#toleft").show()
  	});
  	$("#toleft").hover(function(){
  		$("#toright").hide()
  	},function(){
  		$("#toright").show()
  	});
  	  var t;
  	  var index=0;
  	  ///自动播放
  	  t=setInterval(play,3000)
  	  function play(){
  	  	index++;
  	  	if(index>6){
  	  		index=0;
  	  	}
  	  	$("#lunbobox ul li").eq(index).css({"background":"#999",
  	  	"border":"1px solid #ffffff"}).siblings().css({
  	  		"background":"#cccccc",
  	  		"border":""
  	  	})
  	  	$(".lunbo a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
  	  };
  	  //点击鼠标 图片切换
  	  $("#lunbobox ul li").hover(function(){
  	  	//添加 移除样式
  	  	$(this).css({
  	  		"background":"#999",
  	  		"border":"1px solid #ffffff"
  	  	}).sibling().css({
  	  		"background":"#cccccc"
  	  	})
  	  	var index=$(this).index();//获取索引  图片索引与按钮索引是一一对应
  	  	$(".lunbo a").eq(index).fadeIn(1000).siblings().fadeOut(1000);//siblings 找到兄弟节点（不包括自己
  	  });
  	  //上一张 下一张 切换
  	  $("#toleft").click(function(){
  	  	index--;
  	  	if(index<=0){
  	  		index=6
  	  	}
  	  	console.log(index);
  	  	$("#lunbobox ul li").eq(index).css({"background":"#999",
  	  	"border":"1px solid #ffffff"}).siblings().css({
  	  		"background":"#cccccc",
  	  	})
  	  	$(".lunbo a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
  	  });// 
  	   $("#toright").click(function(){
  	  	index++;
  	  	if(index>6){
  	  		index=0
  	  	}
  	  	console.log(index);
  	  	$("#lunbobox ul li").eq(index).css({"background":"#999",
  	  	"border":"1px solid #ffffff"}).siblings().css({
  	  		"background":"#cccccc",
  	  	})
  	  	$(".lunbo a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
  	  });//
  	  $("#toleft,#toright").hover(function(){
  	  	   $(this).css({
  	  	   	"opacity":"0.3",
  	  	   	"color":""
  	  	   })
  	  })
  	  
  	  ///鼠标移进 移出
  	  $("#lunbobox ul li,.lunbo a img,#toright,#toleft").hover(
  	  	function(){
  	  		$("#toright,#toleft").show()
  	  		clearInterval(t);
  	  	},
  	  	function(){
  	  		t=setInterval(play,3000)
  	  		function play(){
  	  			index++;
  	  			if(index>6){
  	  				index=0
  	  			}
  			$("#lunbobox ul li").eq(index).css({
  				"background":"#999",
  				"border":"1px solid #ffffff"
  			}).siblings().css({
  				"background":"#cccccc"
  			});
  	  	    $(".lunbo a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
  	  	}
  	 }); 		
  });
  //weixinonclick
   $(function(){
   	for(let i=0;i<$(".sub").length;i++){
   		let index=i;
   		 $(".litwo").eq(index).mousemove(function(){
   	   	     $(".sub").eq(index).stop().slideDown(300);
   	   });
   	   $(".litwo").eq(index).mouseleave(function(){
   	   	     $(".sub").eq(index).stop().slideUp(300);   
   	   });
   	}
   });
//goheader 滚定条
  $(function(){
  	$(".top").click(function(){
  		$("html,body").animate({
  			scrollTop:0
  		},200);
  	});
 });
//注册表单验证
//  $(function(){
//  	let index = 0;
//  	$(".text>img").click(function(){
//  		index++;
//  		if(index == 5){
//  			index = 0;
//  		}
//  		$(this).attr("src","img/dateCode"+index+".jpg")
//  	})   	
// });
//手机号验证
	let flagTell = null;
	let flagVer = null;
     $("#tell").blur(function(){
     	var reg= /^1\d{10}$/;
     	var str=$("#tell").val();
     	if(reg.test(str)==true){
     		flagTell = true;
     		 $("#tell").next().html("");
     	}else{
     		 $("#tell").next().html("请输入真实有效的的手机号码");
     	};
     });
     
 //验证码    
   	  var a= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 
		'q', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'
	];
	var sum="";
	for(var i=0;i<6;i++){
		var index = parseInt(Math.random() * a.length);
		sum += a[index];
	};
	$("#yzmnumber").html(sum);
$("#onclick").click(function(){
	var sum="";
	for(var i=0;i<6;i++){
		var index = parseInt(Math.random() * a.length);
		sum += a[index];
		$("#yzmnumber").html(sum);
	};
});
   $("#yzm").blur(function(){
		if($(this).val() != $("#yzmnumber").html()){
			$("#yzmspan").html("请输入正确的验证码");
		}else{
			flagVer = true;
			$("#yzmspan").html("");
		};
    });
	
     
   //密码验证 
   $(".passworld>span").eq(0).html("6-16位字符,可使用字母、数字或组合");
   $(".passworld>input").blur(function(){
   	     var reg=/^\w{6,18}$/;
     	 var str1=$(".passworld>input").val();
     	 if(reg.test(str1)==true){
     		 $("#mmTs").html("");
     	}else{
     		 $(".passworld>span").eq(0).html("");
     		 $("#mmTs").html("请输入正确的密码格式");
     	};
   })
     
//再次输入密码验证   
    $("#agmm").blur(function(){
        if($("#agmm").val()==$(".passworld>input").val()){
        	 $("#agmm+span").html("")
        }else{
        	$("#agmm+span").html("两次输入密码不一致，请重新输入")
        }
    })
 //注册   
    $("#submit_registre").click(function(){
 		if(flagTell && flagVer && ($("#selsect").get(0).checked == true)){
    		$.post("./vancl.php",{phone:$("#tell").val(),pwd:$("#mm").val()},function(str){
    			if(str == 0){
    				location.href = "http://127.0.0.1/VANCL/index.html";
    			}else{
    				alert("用户名已存在");
    			}
    		})
    	}
    })
     




   $("#lovep").click(function(){
   	  $.post("xiangqing.php",{idvalue:"1"},function(str){
 	      let Str=str.split("&");
 	      console.log( str);
	      console.log(Str);
	       	      
 	      localStorage.setItem("p",Str[0]);
	      localStorage.setItem("bg1",Str[1]);
 	      localStorage.setItem("bg2",Str[2]);
	      localStorage.setItem("bg3",Str[3]);
	      localStorage.setItem("bg4",Str[4]);
 	      localStorage.setItem("bg5",Str[5]);   	
	     });
// 	 location.href="http://127.0.0.1/VANCL/shopping.html"
  }); 
     
     
  
  
//$("#lovep").click(function(){
// 	  $.post("xiangqing.php",{idvalue:"1"},function(str){
// 	  	 console.log(str);
// 	  	  let Str=str.split("&");
// 	  	  
// 	  	 
// 	  	  console.log(Str);
// 	  	  
// 	  	  
//// 	  	  
//// 	  	  localStorage.setItem("p",Str[0]);
//// 	  	  localStorage.setItem("bg1",Str[1]);
//// 	  	  localStorage.setItem("bg2",Str[2]);
//// 	  	  localStorage.setItem("bg3",Str[3]);
//// 	  	  localStorage.setItem("bg4",Str[4]);
//// 	  	  localStorage.setItem("bg5",Str5);
//// 	  });
//// 	  location.href="http://127.0.0.1/VANCL/shopping.html"
// });
     
     
