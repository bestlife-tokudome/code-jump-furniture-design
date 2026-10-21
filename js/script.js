$(function() {
    $btnMenu = $("#js-btn-menu");
    $gnav = $(".global-nav");
    $mask = $(".mask");

    // ハンバーガーメニューをクリックしたとき
    $btnMenu.on("click", function () {
        $btnMenu.toggleClass("active");
        $gnav.toggleClass("show");
        $mask.toggleClass("show");
    });

    $mask.on("click", function () {
        $btnMenu.toggleClass("active");
        $gnav.toggleClass("show");
        $mask.toggleClass("show");
    });


});