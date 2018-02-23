//Perform matrix Multiplication
$('button:first-child').on('click', () => {
	let m1 = $('#matrix-one').val().split(' ').map(val => parseFloat(val)),
		m2 = $('#matrix-two').val().split(' ').map(val => parseFloat(val)),
		m1Size = $('#matrix-one-size').val().split(' ').map(val => parseFloat(val)),
		m2Size = $('#matrix-two-size').val().split(' ').map(val => parseFloat(val));

	let m1Show = $('#oneArray'),
		m2Show = $('#twoArray');

	// Empty Matrix Display Container & Create grid	
	m1Show.empty();
	m2Show.empty();
	m1Show.css('grid-template-columns', `repeat(${m1Size[1]},1fr)`);
	m2Show.css('grid-template-columns', `repeat(${m2Size[1]},1fr)`);


	//Validate and Display Entered Matrices
	if (m1Size[1] == m2Size[0]) {
		//Validate & Display Matrix One
		if (m1.length == m1Size[0] * m1Size[1]) {
			m1.forEach((val, index) => {
				m1Show.append('<li>' + val + '</li>');
			})
		} else if (m1.length > m1Size[0] * m1Size[1]) {
			m1Show.css('grid-template-columns', '1fr');
			m1Show.append('<li>Too many Elements</li>');
		} else {
			m1Show.css('grid-template-columns', '1fr');
			m1Show.append('<li>Not Enough Elements</li>');
		}

		//Validate & Display Matrix Two
		if (m2.length == m2Size[0] * m2Size[1]) {
			m2.forEach((val, index) => {
				m2Show.append('<li>' + val + '</li>');
			})
		} else if (m2.length > m2Size[0] * m2Size[1]) {
			m2Show.css('grid-template-columns', '1fr');
			m2Show.append('<li>Too many Elements</li>');
		} else {
			m2Show.css('grid-template-columns', '1fr');
			m2Show.append('<li>Not Enough Elements</li>');
		}

		//Compute and Display Resultant Matrix
		let result = new Array(m1Size[0] * m2Size[1]);
		for (var i = 0; i < m1Size[0]; i++) {
			for (var j = 0; j < m2Size[1]; j++) {
				var sum = 0;
				for (var k = 0; k < m1Size[1]; k++) {
					sum += m1[i * m1Size[1] + k] * m2[k * m2Size[1] + j];
				}
				result[i * m2Size[1] + j] = sum;
			}
		}
		$('#resultArray').empty();
		result.forEach((val, index) => {
			$('#resultArray').css('grid-template-columns', `repeat(${m2Size[1]},1fr)`);
			$('#resultArray').append('<li>' + val + '</li>');
		})
	} else {
		$('#alert').show();
		$('#alert').text('Column of First Matrix must be equal to Rows of 2nd Matrix');
		setTimeout(() => $('#alert').hide(), 2000);
	}
});

//Reset Input Fields
$('#reset').on('click', () => {
	$('input').val('');
	$('ul').empty();
});