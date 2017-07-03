var gridSize = 20;
var drawOn = true;

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
	if (drawOn) {
		$("td").on("mouseenter", function(){
			$(this).addClass("whitechalk");
		});
	} else {
		$("td").on("mouseenter", function(){
			$(this).removeClass("whitechalk");
		});
	}
}

function drawTrue() {
	drawOn = true;
}

function drawFalse() {
	drawOn = false;
}


$(document).ready(function(){

	createGrid(gridSize);

	drawCheck();
	
	$(".scale").on("click", function(){
		changeGrid();
		drawCheck();
	});

	$(".clear").on("click", function(){
		$("td").removeClass("whitechalk");
		drawCheck();
	});

	$(".draw").on("click", function(){
		drawTrue();
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

	$(".draw").hover(
	function() {
		$(".drawlabel").addClass("appear");
	}, 
	function() {
		$(".drawlabel").removeClass("appear");
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