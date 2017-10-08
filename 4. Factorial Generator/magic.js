$(function(){
	var button = $('button');
	
	button.on('click',function(){
		var num = $('input').val(),
			output = $('p'),
			fact = 1;
		for(var i=1 ; i <= num ; i++){
			fact= fact*i;
		}
		output.text('Factorial of '+ num + ' is ' + fact);
	});
	
	
});