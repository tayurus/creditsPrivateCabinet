$(document).ready(function() {
    $(".header__menuIcon").click(function() {
        $(".header__item, .header__lang").css({
            "display": "block",
            "textAlign": "center",
            "margin-top": "15px"
        });
        $(".header__menu").slideToggle(200);
        // $(".header__menuIcon div:nth-child(1)").hide();
        // $(".header__menuIcon div:nth-child(2)").css({
        //     "transform": "rotate(45deg)"
        // });
        // $(".header__menuIcon div:nth-child(3)").css({
        //     "transform": "rotate(-45deg) translateX(6px) translateY(-5px)"
        // });
    });


    $(".header__item-hasSubmenu").click(function(event) {
        $(event.currentTarget).next().slideToggle(200);
    });

})
