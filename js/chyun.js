$(function(){
    //点击回到顶部的元素
    $("#roll_top").click(function(e) {
            //以1秒的间隔返回顶部
            $('body,html').animate({scrollTop:0},500);
    });
});
$(function(){
    //点击回到顶部的元素
    $("#fall").click(function(e) {
            //以1秒的间隔返回顶部
            $('body,html').animate({scrollTop:$(document).height()},500);
    });
});

