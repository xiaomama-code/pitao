$("#product h2").html(localStorage.getItem("p"));
$("#bac").css("background",localStorage.getItem("bg1"));
$("#abc").css("background",localStorage.getItem("bg1"));
$("#abc").css("background-Position","0 -68px");
$("#imgCenter").css("background",localStorage.getItem("bg3"));
$("#item_img_2").mousemove(function(){
	 $("#imgCenter").css("background",localStorage.getItem("bg4"))
});
$("#item_img_1").mousemove(function(){
	    $("#imgCenter").css("background",localStorage.getItem("bg3"));
})

