$(document).ready(function () {
    $(".navbar-wrapper").load("menu.html", function () {
        var found = false;
        $("a").each(function () {
            if ((window.location.pathname.indexOf($(this).attr('href'))) > -1) {
                $(this).parents("li").addClass('active');
                found = true;
            }
        });
        if (!found) {
            $('a[href="index.html"]').parents("li").addClass('active');
        }
    });
});