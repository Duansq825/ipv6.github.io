/**
 * Created by Administrator on 15-7-16.
 */
$(function(){
    var b = $('.page').width();
    var ls = 0;
    $('.page a').each(function(){
        var w = $(this).width();
        if(typeof $(this).outWidth == "function"){
            w = $(this).outWidth(true);
        }
        ls += w;
    });
    $('.page').width(ls + "px").css("margin-left",b/2-ls/2 + "px");
})