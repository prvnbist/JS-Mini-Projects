var arr = [];

$(function(){
	
	var asc = $('.asc'),
		desc = $('.desc'),
		output = $('ul');
	
	asc.on('click',ascending);
	desc.on('click',descending);
	
	
	function getValues(){
		output.empty();
		var	input = $('input').val(),
			temp;
			arr = input.split(' ').map(val => parseFloat(val));
	}
	
	function displayValues(){
		for (var i = 0 ; i < arr.length ; i++){
			output.append('<li> ' + arr[i] + ' </li>');
		}
	}
	
	function ascending() {
		getValues();
		for(i=0 ; i < arr.length ; i++){		
			for(j = i+1 ; j < arr.length ; j++){
				if( arr[i] > arr[j] ){
					temp  = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		
		displayValues();
	}
	function descending() {
		getValues();
		
		for(i=0 ; i < arr.length ; i++){		
			for(j = i+1 ; j < arr.length ; j++){
				if( arr[i] < arr[j] ){
					temp  = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		
		displayValues();
	}
	
});