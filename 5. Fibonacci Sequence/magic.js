$(function () {

	var fib = [],
		button = $('button'),
		output = $('ul');
	fib[0] = 0;
	fib[1] = 1;
	button.on('click', function () {
		output.empty();
		var num = $('input').val();
		for (var i = 2; i <= num; i++) {
			fib[i] = fib[i - 1] + fib[i - 2];
		}
		for (var i = 0; i <= num; i++) {
			output.append('<li> ' + fib[i] + ' </li>');
		}
	});

});