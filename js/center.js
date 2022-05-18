/**
 * Created by Administrator on 15-7-14.
 */
function diato(){
    $(".indexh3span").each(function(){
        var c = $(this).outerWidth();
        var b = $(this).parents(".indexh3").outerWidth();
        $(this).css("margin-left",(b-c)/2);
    })
}
window.onresize = function(){
    diato();
}
$(function(){
    diato()
})
