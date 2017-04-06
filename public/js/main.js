(function() {
    $(function() {
        $('#closePromoBar').on('click', function() {
            $('.page-header__promo').slideToggle(300, 'swing');
        });

        $('.spinner .btn:first-of-type').on('click', function() {
            var btn = $(this);
            var input = btn.closest('.spinner').find('input');
            if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                input.val(parseInt(input.val(), 10) + 1);
            } else {
                btn.next("disabled", true);
            }
        });
        $('.spinner .btn:last-of-type').on('click', function() {
            var btn = $(this);
            var input = btn.closest('.spinner').find('input');
            if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                input.val(parseInt(input.val(), 10) - 1);
            } else {
                btn.prev("disabled", true);
            }
        });

        $('.spinner input').on('change', function() {
            var val = $(this).val();
            if (val == '' || !val.match(/^\d$/gm)) {
                $(this).val($(this).attr('min'));
            }
        })

        $("#clearSelection").on('click', function(e) {
            e.preventDefault();
            $("select").selectpicker('deselectAll');
            var spinner = $('.spinner input');
            spinner.each(function() {
                $(this).val($(this).attr('min'));
            });
        });

        $('.gallery__thumbs').on('click', function(e) {
            var $target = $(e.target);
            $('.gallery__thumbs-item').removeClass('active');
            $target.parent().addClass('active');
        })
    });
})();
