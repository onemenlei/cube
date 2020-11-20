$("body .active").each(
    function () {
        var width1 = $(this).attr("data-width");
        $(this).css({
            "width": width1
        });
    }
);
