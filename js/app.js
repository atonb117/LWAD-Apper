var main = function () {
	"use strict";

	console.log("Hello Mordor.");

	var tabNumber;

	for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
		var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
		$(tabSelector).on("click", function (event) {
			$(".tabs span").removeClass("active");
			$(event.target).addClass("active");
			return false;
		});
	}

};

$(document).ready(main);