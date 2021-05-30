$(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.list-container').toggle(320);
    })
    let level = 25;
    let height = level / $(window).height();
    let width = level / $(window).width();
    $("body").mousemove(function(e){
        let pageX = e.pageX - ($(window).width() / 2);
        let pageY = e.pageY - ($(window).height() / 2);
        let newValueX = width * pageX * -1 - 25;
        let newValueY = height * pageY * -1 - 50;
        $('.enterence, .bottom').css("background-position", newValueX+"px     "+newValueY+"px");
    });
})
    