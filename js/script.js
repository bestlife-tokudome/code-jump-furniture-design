$(function() {
    const $btnMenu = $("#js-btn-menu");
    const $gnav = $(".global-nav");
    const $mask = $(".mask");

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