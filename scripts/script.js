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
		$("span").removeClass();
		$("span").html("white");
		$("span").addClass("activewhite");

	} else if (drawOn === "red") {
		$("td").on("mouseenter", function(){
			$(this).addClass("redchalk");
		});
		$("span").removeClass();
		$("span").html("red");
		$("span").addClass("activered");

	} else if (drawOn === "orange") {
		$("td").on("mouseenter", function(){
			$(this).addClass("orangechalk");
		});
		$("span").removeClass();
		$("span").html("orange");
		$("span").addClass("activeorange");

	} else if (drawOn === "yellow") {
		$("td").on("mouseenter", function(){
			$(this).addClass("yellowchalk");
		});
		$("span").removeClass();
		$("span").html("yellow");
		$("span").addClass("activeyellow");

	} else if (drawOn === "green") {
		$("td").on("mouseenter", function(){
			$(this).addClass("greenchalk");
		});
		$("span").removeClass();
		$("span").html("green");
		$("span").addClass("activegreen");

	} else if (drawOn === "blue") {
		$("td").on("mouseenter", function(){
			$(this).addClass("bluechalk");
		});
		$("span").removeClass();
		$("span").html("blue");
		$("span").addClass("activeblue");

	} else if (drawOn === "purple") {
		$("td").on("mouseenter", function(){
			$(this).addClass("purplechalk");
		});
		$("span").removeClass();
		$("span").html("purple");
		$("span").addClass("activepurple");

	} else if (drawOn === "rainbow") {
		$("span").removeClass();
		$("span").html("rainbow");
		$("span").addClass("activeeraser");

	} else {
		$("td").on("mouseenter", function(){
			$(this).removeClass();
		});
		$("span").removeClass();
		$("span").html("eraser");
		$("span").addClass("activeeraser");
	}
}

function drawRed() {
	drawOn = "red";
}

function drawOrange() {
	drawOn = "orange";
}

function drawYellow() {
	drawOn = "yellow";
}

function drawGreen() {
	drawOn = "green";
}

function drawBlue() {
	drawOn = "blue";
}

function drawPurple() {
	drawOn = "purple";
}

function drawRainbow() {
	drawOn = "rainbow";
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

	$(".draworange").on("click", function(){
		drawClear()
		drawOrange();
		drawCheck();
	});

	$(".drawyellow").on("click", function(){
		drawClear()
		drawYellow();
		drawCheck();
	});

	$(".drawgreen").on("click", function(){
		drawClear()
		drawGreen();
		drawCheck();
	});

	$(".drawblue").on("click", function(){
		drawClear()
		drawBlue();
		drawCheck();
	});

	$(".drawpurple").on("click", function(){
		drawClear()
		drawPurple();
		drawCheck();
	});

	$(".drawrainbow").on("click", function(){
		drawClear();
		drawRainbow();
		drawCheck();
	});

	$(".erase").on("click", function(){
		drawFalse();
		drawCheck();
	});


	/*--------HOVERS-------*/

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