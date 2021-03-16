$('#contact-form').submit(function(e) {
    e.preventDefault();
    $('.thank-you').empty();
    $('.comments').empty();
    var postdata = $('#contact-form').serialize();
    
    $.ajax({
        type: 'POST',
        url: 'PHP/contact.php',
        data: postdata,
        dataType: 'json',
        success: function(json) {
             
        console.log("b");
            if(json.isSuccess) 
            {
                $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé. Merci de m'avoir contacté :)</p>");
                $('#contact-form')[0].reset();
            }
            else
            {
                $("#contact-form > p:nth-child(2)").html(json.firstnameError);
                $("#contact-form > p:nth-child(4)").html(json.nameError);
                $("#contact-form > p:nth-child(6)").html(json.emailError);
                $("#contact-form > p:nth-child(8)").html(json.phoneError);
                $("#contact-form > p:nth-child(11)").html(json.messageError);

            }                
        }
    });
});



