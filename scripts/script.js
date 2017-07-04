var gridSize = 20;
var drawOn = "white";

function createGrid(num) {
	$(".board").append('<table></table>');

	for (var i = 0; i < num; i++) {
		$("table").append("<tr></tr>");
	}

	for (var j = 0; j < num; j++) {
		$("tr").append("<td></td>");
	}
}


function changeGrid() {
	var sizeInput = prompt("How big do you want it?", gridSize);

	if (sizeInput >= 1 && sizeInput <= 100) {
		$(".board > table").remove();
		createGrid(sizeInput);
	} else if (sizeInput > 100) {
		alert("Stahp, it hurts...");
	} else if (isNaN(sizeInput)) {
		alert("Error: Input is not a number.");
	};
}


function drawCheck() {
	if (drawOn === "white") {
		$("td").on("mouseenter", function(){
			$(this).addClass("whitechalk");
		});
	} else if (drawOn === "red") {
		$("td").on("mouseenter", function(){
			$(this).addClass("redchalk");
		});
	} else {
		$("td").on("mouseenter", function(){
			$(this).removeClass();
		});
	}
}

function drawRed() {
	drawOn = "red";
}

function drawWhite() {
	drawOn = "white";
}

function drawFalse() {
	drawOn = false;
}

function drawClear() {
	$("td").on("mouseenter", function(){
		$(this).removeClass();
	});
}


$(document).ready(function(){

	createGrid(gridSize);

	drawCheck();
	
	$(".scale").on("click", function(){
		changeGrid();
		drawCheck();
	});

	$(".clear").on("click", function(){
		$("td").removeClass();
		drawCheck();
	});

	$(".drawwhite").on("click", function(){
		drawClear();
		drawWhite();
		drawCheck();
	});

	$(".drawred").on("click", function(){
		drawClear()
		drawRed();
		drawCheck();
	});

	$(".erase").on("click", function(){
		drawFalse();
		drawCheck();
	});


	/*--------HOVERS-------*/

	$('.erase').hover(
	function() {
		$(".eraselabel").addClass("appear");
	}, 
	function() {
		$(".eraselabel").removeClass("appear");
	});

	$(".drawwhite").hover(
	function() {
		$(".drawwhitelabel").addClass("appear");
	}, 
	function() {
		$(".drawwhitelabel").removeClass("appear");
	});

	$(".drawred").hover(
	function() {
		$(".drawredlabel").addClass("appear");
	}, 
	function() {
		$(".drawredlabel").removeClass("appear");
	});

	$(".scale").hover(
	function() {
		$(this).addClass("darker");
	}, 
	function() {
		$(this).removeClass("darker");
	});

	$(".clear").hover(
	function() {
		$(this).addClass("darker");
	}, 
	function() {
		$(this).removeClass("darker");
	});

	
});