var main = function () {
	"use strict";

	console.log("Hello Mordor.");

	var toDos = [
		"Finish coding this app",
		"Take pooks to the zoo",
		"Answer emails",
		"Prep for Monday's Mission",
		"Make up some new ToDos",
		"Get Groceries"
		];

	$(".tabs a span").toArray().forEach(function (element) {
		var $element = $(element);
		
		// create a click handler for this element
		$(element).on("click", function () {
			// since we're using the jQuery version of element
			// we'll go ahead and creat a temporary variable
			// so we don't need to keep recreating it

			var $content,
				$input,
				$button,
				i;

			$(".tabs a span").removeClass("active");
			$element.addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) {
				// newest first, so we have to go through
				// the array backwards
				$content = $("<ul>");
				for (i = toDos.length-1; i >= 0; i--) {
					$content.append($("<li>").text(toDos[i]));
				}
				console.log("First clicky!");
			} else if ($element.parent().is(":nth-child(2)")) {
				// oldest first, so we go through the array forwards
				$content = $("<ul>");
				toDos.forEach(function (todo) {
					$content.append($("<li>").text(todo));
				});
				
				console.log("Second clicky!");
			} else if ($element.parent().is(":nth-child(3)")) {
				// input a new todo
				$input = $("<input>"),
				$button = $("<button>").text("+")

				$button.on("click", function () {
					if ($input.val() !== "") {
						toDos.push($input.val());
						$input.val("");
					}
				});

				$content = $("<div>").append($input).append($button);
				console.log("Third clicky!");
			}

			$("main .content").append($content);

			return false;

		});

	});

	$(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);