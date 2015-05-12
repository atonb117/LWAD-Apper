var main = function () {
	"use strict";

	$(".tabs span").toArray().forEach(function (element) {
		// create a click header for this element
		$(element).on("click", function () {
			$(".tabs span").removeClass("active");
			$(element).addClass("active");
			$("main .content").empty();
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

	console.log("Hello, Mordor.")
};



$(document).ready(main);