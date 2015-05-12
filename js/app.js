var main = function () {
	"use strict";

	var tabNumber;

	for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
		var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
		$(tabSelector).on("click", function (event) {
			$(".tabs span").removeClass("active");
			$(event.target).addClass("active");
			return false;
		});
	}



	// var makeTabActive = function (tabNumber) {
	// 	// Constuct the selector from the tabNumber
	// 	var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
	// 	$(".tabs span").removeClass("active");
	// 	$("tabSelector").addClass("active");
	// 	$("main .content").empty();
	// }

	// $(".tabs a:nth-child(1)").on("click", function () {
	// 	makeTabActive(1);
	// 	return false;
	// });

	// $(".tabs a:nth-child(2)").on("click", function () {
	// 	makeTabActive(2);
	// 	return false;
	// });

	// $(".tabs a:nth-child(3)").on("click", function () {
	// 	makeTabActive(3);
	// 	return false;
	// });

	console.log("Hello, Mordor.")
}



$(document).ready(main);