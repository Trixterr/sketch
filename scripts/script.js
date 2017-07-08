var gridSize = 20;
var drawOn = "white";

//--------------------------------------------------GRID CREATION

function createGrid(num) {
	$("#board").append('<table></table>');

	for (var i = 0; i < num; i++) {
		$("table").append("<tr></tr>");
	}

	for (var j = 0; j < num; j++) {
		$("tr").append("<td></td>");
	}
}


/*function changeGrid() {
	var sizeInput = prompt("How big do you want it?", gridSize);

	if (sizeInput >= 1 && sizeInput <= 100) {
		$("#board > table").remove();
		createGrid(sizeInput);
	} else if (sizeInput > 100) {
		alert("Stahp, it hurts...");
	} else if (isNaN(sizeInput)) {
		alert("Error: Input is not a number.");
	};
}*/

//---------------------------------------------------------SLIDER

function scaleSlider() {
	var scaleHandle = $("#scaleHandle");
	$("#scaleSlider").slider({
		min: 1,
		max: 32,
		value: 16, 
		create: function() {
			scaleHandle.text($(this).slider("value"));
		},
		slide: function(event, ui) {
			scaleHandle.text(ui.value);
			$("#board > table").remove();
			createGrid(ui.value);
			drawCheck();
		}
	});
}

//-----------------------------------------------------DRAW CHECK
//---------------------------------------------------ACTIVE COLOR

function drawCheck() {
	switch (drawOn) {
		case "white": 
			$("td").on("mouseenter", function(){
				$(this).addClass("whitechalk");
			});
			$("span").removeClass();
			$("span").html("white");
			$("span").addClass("activewhite");
			break;

		case "red":
			$("td").on("mouseenter", function(){
				$(this).addClass("redchalk");
			});
			$("span").removeClass();
			$("span").html("red");
			$("span").addClass("activered");
			break;

		case "orange":
			$("td").on("mouseenter", function(){
				$(this).addClass("orangechalk");
			});
			$("span").removeClass();
			$("span").html("orange");
			$("span").addClass("activeorange");
			break;

		case "yellow":
			$("td").on("mouseenter", function(){
				$(this).addClass("yellowchalk");
			});
			$("span").removeClass();
			$("span").html("yellow");
			$("span").addClass("activeyellow");
			break;

		case "green":
			$("td").on("mouseenter", function(){
				$(this).addClass("greenchalk");
			});
			$("span").removeClass();
			$("span").html("green");
			$("span").addClass("activegreen");
			break;

		case "blue":
			$("td").on("mouseenter", function(){
				$(this).addClass("bluechalk");
			});
			$("span").removeClass();
			$("span").html("blue");
			$("span").addClass("activeblue");
			break;

		case "purple":
			$("td").on("mouseenter", function(){
				$(this).addClass("purplechalk");
			});
			$("span").removeClass();
			$("span").html("purple");
			$("span").addClass("activepurple");
			break;

		case "rainbow":
			//-ADD RAINBOW CHALK ON MOUSEENTER
			$("span").removeClass();
			$("span").html("rainbow");
			$("span").addClass("activerainbow");
			break;

		default:
			$("td").on("mouseenter", function(){
				$(this).removeClass();
			});
			$("span").removeClass();
			$("span").html("eraser");
			$("span").addClass("activeeraser");
	}
}

//----------------------------------------------------DRAW CLEAR

function drawClear() {
	$("td").on("mouseenter", function(){
		$(this).removeClass();
	});
}

//---------------------------------------------------------READY

$(document).ready(function(){

	scaleSlider();	

	createGrid(gridSize);

	drawCheck();
	
	/*$("#scale").on("click", function(){
		changeGrid();
		drawCheck();
	});*/

	$("#clear").on("click", function(){
		$("td").removeClass();
		drawCheck();
	});

	//---------------------------------------------DRAW ON CLICK

	$("#drawwhite").on("click", function(){
		drawClear();
		drawOn = "white";
		drawCheck();
	});

	$("#drawred").on("click", function(){
		drawClear()
		drawOn = "red";
		drawCheck();
	});

	$("#draworange").on("click", function(){
		drawClear()
		drawOn = "orange";
		drawCheck();
	});

	$("#drawyellow").on("click", function(){
		drawClear()
		drawOn = "yellow";
		drawCheck();
	});

	$("#drawgreen").on("click", function(){
		drawClear()
		drawOn = "green";
		drawCheck();
	});

	$("#drawblue").on("click", function(){
		drawClear()
		drawOn = "blue";
		drawCheck();
	});

	$("#drawpurple").on("click", function(){
		drawClear()
		drawOn = "purple";
		drawCheck();
	});

	$("#drawrainbow").on("click", function(){
		drawClear();
		drawOn = "rainbow";
		drawCheck();
	});

	$("#erase").on("click", function(){
		drawOn = false;
		drawCheck();
	});

	//----------------------------------------------------HOVERS

	$("#scale").hover(
	function() {
		$(this).addClass("dark");
	},
	function() {
		$(this).removeClass("dark");
	});

	$("#clear").hover(
	function() {
		$(this).addClass("dark");
	}, 
	function() {
		$(this).removeClass("dark");
	});

});