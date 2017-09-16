function generatePassword() {
    var length = 8,
        charPool = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        pass = "";
    for (var i = 0, n = charPool.length; i < length; ++i) {
        pass += charPool.charAt(Math.floor(Math.random() * n));
    }
    return pass;
}

$("button").on('click',function(){
	$("#sup").text(generatePassword());
});














































// $('.menuToggle').on('click',function(){
//     $(this).toggleClass('active');
//     $('.menu').toggleClass('show');
// });