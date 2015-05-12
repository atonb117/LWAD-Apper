var main = function () {
	"use strict";

	var makeTabActive = function (tabNumber) {
		// Constuct the selector from the tabNumber
		var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
		$(".tabs span").removeClass("active");
		$("tabSelector").addClass("active");
		$("main .content").empty();
	}

	$(".tabs a:nth-child(1)").on("click", function () {
		makeTabActive(1);
		return false;
	});

	$(".tabs a:nth-child(2)").on("click", function () {
		makeTabActive(2);
		return false;
	});

	$(".tabs a:nth-child(3)").on("click", function () {
		makeTabActive(3);
		return false;
	});

	// $(".tabs a:nth-child(1)").on("click", function () {
	// 	// make all tabs inactive
	// 	$(".tabs span").removeClass("active");

	// 	// make the first tab active
	// 	$(".tabs a:nth-child(1) span").addClass("active");

	// 	// empty the main content so we can recreate it
	// 	$("main.content").empty();

	// 	// return false so we dont follow the link
	// 	return false;
	// });

	// $(".tabs a:nth-child(1)").on("click", function () {
	// 	$(".tabs span").removeClass("active");
	// 	$(".tabs a:nth-child(1) span").addClass("active");
	// 	$("main.content").empty();
	// 	return false;
	// });

	// $(".tabs a:nth-child(1)").on("click", function () {
	// 	$(".tabs span").removeClass("active");
	// 	$(".tabs a:nth-child(1) span").addClass("active");
	// 	$("main.content").empty();
	// 	return false;
	// });

	console.log("Hello, Mordor.")
}



$(document).ready(main);