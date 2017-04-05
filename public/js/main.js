(function() {
    $(function() {
        $('#closePromoBar').on('click', function() {
            $('.page-header__promo').slideToggle(300, 'swing');
        })
    });
})();
