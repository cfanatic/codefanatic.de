$(function () {
    $("#contact-form").on("submit", function (e) {
        if (!e.isDefaultPrevented()) {
            $.ajax({
                type: "POST",
                url: "mail/contact.php",
                data: $(this).serialize(),
                success: function (data) {
                    var messagebox = '<div class="alert ' + data.type + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>' + data.message + '</strong></div>';

                    $("#contact-form").find(".form-success").html(messagebox);
                    $("#contact-form")[0].reset();
                }
            });
            return false;
        }
    })
});
