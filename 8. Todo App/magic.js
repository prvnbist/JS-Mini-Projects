$(function () {
	var list = $("ul"),
		input = $("input");

	//Adding Tasks
	input.keydown(function (e) {
		if (e.keyCode === 13) {
			var task = $(this).val();
			list.prepend(
				"<li>" +
				task +
				'<i class="delete material-icons">delete</i>' +
				'<i class="edit material-icons">mode_edit</i>' +
				"</li>"
			);
		}
	});

	//Editing Tasks
	list.on("click", ".edit", function () {
		$(this)
			.parent()
			.attr("contenteditable", "true");
	});

	// Deleting Tasks
	list.on("click", ".delete", function () {
		$(this)
			.parent()
			.remove();
	});
});