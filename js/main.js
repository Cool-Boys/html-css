$(function() {

    var sideBar = $('#sidebar'),
        mask = $('.mask'),
        sidebar_trigger = $('#sidebar_trigger'),
        btnBackTop = $('.backTop');

    function showSideBar() {
        mask.fadeIn();
        sideBar.animate({ right: 0 });
    }

    function hideSideBar() {
        mask.fadeOut();
        sideBar.animate({ right: -sideBar.width() });

    }

    sidebar_trigger.on('click', function(event) {
        showSideBar();
    });
    mask.on('click', function(event) {
        hideSideBar();
    });
    btnBackTop.on('click', function(event) {
        $('html,body').animate({ scrollTop: 0 }, 800);

    });
      btnBackTop.hide();
    $(window).on('scroll', function(event) {

        if ($(window).scrollTop() > $(window).height()) {
            btnBackTop.fadeIn();
        } else {
            btnBackTop.fadeOut();
        }
    });
});
