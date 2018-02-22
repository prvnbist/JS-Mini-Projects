function generatePassword() {
    var length = 8,
        charPool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$&*",
        pass = "";
    for (var i = 0, n = charPool.length; i < length; ++i) {
        pass += charPool.charAt(Math.floor(Math.random() * n));
    }
    return pass;
}

$(".passGen").on('click',function(){
	$("#sup").text(generatePassword());
});


$( "input" ).keyup(function() {
    var pw = $(this).val(),
    strength = 0;
    if (pw.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)) {
        strength += 1;
    }
    if (pw.match(/[~<>?]+/)) {
        strength += 1;
    }
    if (pw.match(/[!@#$%^&*()]+/)) {
        strength += 1;
    }
    if(pw.length > 5) {
        strength += 1;
    }
    switch(strength) {
        case 0:
                $('.strength').text("Strength");
                break;
        case 1:
                $('.strength').text("Weak");
                break;
        case 2:
                $('.strength').text("Medium");
                break;
        case 3:
                $('.strength').text("Mild");
                break;
        case 4:
                $('.strength').text("Strong");
                break;
    }
});