$(function () {

	var button = $("button");
	button.on('click', printPascalTriangle);

	function printPascalTriangle() {
		$(".pascal").empty();
		var pascal = $(".pascal");
		var rows = $("input").val();
		var arr = generatePascal(+rows);

		for (var i = 0; i < arr.length; i++) {
			var div = $('<div/>');
			div.addClass('row');
			for (var j = 0; j < arr[i].length; j++) {

				var innerData = $('<div/>');
				innerData.html(arr[i][j]);
				innerData.addClass('data');

				div.append(innerData);
			}
			pascal.append(div);
		}

	}

	function generatePascal(n) {
		var arr = [];
		var tmp;
		for (var i = 0; i < n; i++) {
			arr[i] = [];
			for (var j = 0; j <= i; j++) {
				if (j == i) {
					arr[i].push(1);
				} else {
					tmp = (!!arr[i - 1][j - 1] ? arr[i - 1][j - 1] : 0) + (!!arr[i - 1][j] ? arr[i - 1][j] : 0);
					arr[i].push(tmp);
				}
			}
		}
		return arr;
	}

});