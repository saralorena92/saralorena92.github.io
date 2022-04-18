$(document).ready(function () {
    togglemenu('#menu');

    function togglemenu(target) {
        let menu = $(target).data('target');
        $('#menu').addClass('hidemenu');
        $('#togglemenu').on('click', function () {
            if ($(this).attr('id') == menu) {
                $(target).toggleClass('showmenu hidemenu');
                $(this).toggleClass('show');
            }
        })
    }
});