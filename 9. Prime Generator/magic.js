var genPrime = $('button:first-child'),
	isPrime = $('button:nth-child(2)'),
	output = $('ul');

//Generate Prime Numbers
$(genPrime).on('click', () => {

	var input = $('input').val(),
		low = 1;
	//Removes Previous Results
	output.empty();
	output.css('grid-template-columns', 'repeat(5,1fr)');
	while (low <= input) {
		var flag = 0;
		for (var i = 2; i <= Math.floor(low / 2); ++i) {
			if (low % i == 0) {
				flag = 1;
				break;
			}
		}
		if (flag == 0) {
			output.append('<li>' + low + '</li>');
		}
		++low;
	}

});


//Checks if entered number is prime or not
$(isPrime).on('click', () => {

	var input = $('input').val(),
		flag = 0;
	//Removes Previous Results
	output.empty();
	output.css('grid-template-columns', '1fr');
	for (var i = 2; i <= Math.floor(input / 2); ++i) {
		if (input % i == 0) {
			flag = 1;
			break;
		}
	}
	if (flag == 0) {
		output.append('<li>' + input + ' is a Prime Number!</li>');
	} else {
		output.append('<li>' + input + ' is not a Prime Number!</li>');
	}

});