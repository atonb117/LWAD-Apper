var main = function () {
	"use strict";

	console.log("Hello Mordor.");

	$(".tabs span").toArray().forEach(function (element) {
		// create a click handler for this element
		$(element).on("click", function () {
			$(".tabs span").removeClass("active");
			$(element).addClass("active");
			$("main .content").empty();
			return false
		});
	});
};

$(document).ready(main);