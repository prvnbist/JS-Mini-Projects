let button = $("button");

button.on("click", () => {
	let input = $("#items").val().split(" ").map(item => parseFloat(item));
	let profit = [],
		weight = [],
		fraction = [],
		x = [],
		capa = $("#capacity").val(),
		result = 0;

	// Populate weight and profit array from the user input
	for (let i in input) {
		i % 2 == 0 ? weight.push(input[i]) : profit.push(input[i]);
	}

	// Fill the array fravtion with the profit/weight values
	for (let i = 0; i < input.length / 2; i++) {
		fraction.push(profit[i] / weight[i]);
		// console.log(profit[i],weight[i],fraction[i]);
	}

	// console.log(profit,weight,fraction);
	fraction.sort().reverse();
	// console.log(profit,weight,fraction);

	// Sort the arrays weight and profit according to the decreasing order of array fraction 
	for (let i in input) {
		for (let j = 0; j < input.length; j++) {
			if (profit[j] / weight[j] == fraction[i]) {
				[profit[i], profit[j]] = [profit[j], profit[i]];
				[weight[i], weight[j]] = [weight[j], weight[i]];
			}
		}
	}

	// Select the item or fraction of it until the capacity is reached
	for (let i = 0; i < input.length / 2; i++) {
		capa -= weight[i];
		if (capa >= 0) {
			x.push(1);
		} else {
			x.push(Math.abs(capa + weight[i]) / weight[i]);
			break;
		}
	}

	// Evaluate the profit from each item that was selected and add it to the total profit
	$("table:last-child").empty();
	for (let i = 0; i < input.length / 2; i++) {
		if (x[i] === undefined) break;
		else {
			result += profit[i] * x[i];
			$("table:last-child").append(`
				<tr>
					<td>${profit[i]}</td>
					<td>${weight[i]}</td>
					<td>${fraction[i]}</td>
					<td>${x[i] % 1 === 0 ? x[i] : x[i].toPrecision(4)}</td>
					<td>${result}</td>
				</tr>
			`);
		}
		// console.log(profit[i],x[i],result);
	}

	$(".result")
		.empty()
		.text(result);

	// console.log(result);
	// console.log("Profit",profit);
	// console.log("weight",weight);
	// console.log("fraction",fraction);
	// console.log("x",x);
	// console.log("result",result);
});