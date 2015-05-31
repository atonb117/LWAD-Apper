var main = function () {
	/* (todoObjects) { */
	"use strict";
// now main has access to our todo list

	// var toDos = todoObjects.map(function (toDo) {
	// 	// we'll just return the description
	// 	// of this toDoObject
	// 	return toDo.description;
	// });

	// Now all our old code should work exactly as it did!
	// Hopefully, lolsmh...
// };

// console.log("Hello, Mordor.");



	$(".tabs a span").toArray().forEach(function (element) {
		// create a click header for this element
		$(element).on("click", function () {
			// Since we are using the jQuery version of element,
			// we'll go ahead and create a temp variable
			// so we wont need to keep recreating it.
			var $element = $(element);

			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) {
				console.log("First tab... CLICKED!");
			} else if ($element.parent().is(":nth-child(2)")) {
				console.log("Second tab... Click CLICKED!");
			} else if ($element.parent().is(":nth-child(3)")) {
				console.log("First tab... Click Click CLICKED!");
			}

			return false;
		});
	});

	// var tabNumber;

	// for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
	// 	var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
	// 	$(tabSelector).on("click", function (event) {
	// 		$(".tabs span").removeClass("active");
	// 		$(event.target).addClass("active");
	// 		return false;
	// 	});
	// }

};

// $(document).ready(main);

// $(document).ready(function () {
// 	$.getJSON("todos.json", function (toDoObjects) {
// 		// call main with the todo as an argument
// 		main(todoObjects);
// 	});
// });