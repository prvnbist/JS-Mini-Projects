$(function () {

	var btn = $('button'),
		list = $('ul');

	btn.on('click', addTask);

	//Adding Tasks
	function addTask() {
		var input = $('input').val();
		list.prepend("<li>" +
			input +
			'<i class="delete material-icons">close</i>' +
			'<i class="edit material-icons">mode_edit</i>' +
			"</li>");
	}

	//Editing Tasks
	list.on('click', '.edit', function () {
		$(this).parent().attr('contenteditable', 'true');
	});

	// Deleting Tasks
	list.on('click', '.delete', function () {
		$(this).parent().remove();
	});

});