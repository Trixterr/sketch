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
				$(this).removeAttr("style");
				$(this).addClass("whitechalk");
			});
			$("section").removeClass();
			$("section").html("white");
			$("section").addClass("activewhite");
			break;

		case "red":
			$("td").on("mouseenter", function(){
				$(this).removeAttr("style");
				$(this).addClass("redchalk");
			});
			$("section").removeClass();
			$("section").html("red");
			$("section").addClass("activered");
			break;

		case "orange":
			$("td").on("mouseenter", function(){
				$(this).removeAttr("style");
				$(this).addClass("orangechalk");
			});
			$("section").removeClass();
			$("section").html("orange");
			$("section").addClass("activeorange");
			break;

		case "yellow":
			$("td").on("mouseenter", function(){
				$(this).removeAttr("style");
				$(this).addClass("yellowchalk");
			});
			$("section").removeClass();
			$("section").html("yellow");
			$("section").addClass("activeyellow");
			break;

		case "green":
			$("td").on("mouseenter", function(){
				$(this).removeAttr("style");
				$(this).addClass("greenchalk");
			});
			$("section").removeClass();
			$("section").html("green");
			$("section").addClass("activegreen");
			break;

		case "blue":
			$("td").on("mouseenter", function(){
				$(this).removeAttr("style");
				$(this).addClass("bluechalk");
			});
			$("section").removeClass();
			$("section").html("blue");
			$("section").addClass("activeblue");
			break;

		case "purple":
			$("td").on("mouseenter", function(){
				$(this).removeAttr("style");
				$(this).addClass("purplechalk");
			});
			$("section").removeClass();
			$("section").html("purple");
			$("section").addClass("activepurple");
			break;

		case "rainbow":
			$("td").on("mouseenter", function(){
				$(this).removeAttr("style");
				$(this).css("background-color", rainbowGen());
				$(this).addClass("rainbowchalk");
			});
			$("section").removeClass();
			$("section").html("rainbow");
			$("section").addClass("activerainbow");
			break;

		default:
			$("td").on("mouseenter", function(){
				$(this).removeClass();
				$(this).removeAttr("style");
			});
			$("section").removeClass();
			$("section").html("eraser");
			$("section").addClass("activeeraser");
	}
}

//--------------------------------------------------RAINBOW TEXT

/*function rainbowText(){
	var rainbow = "rainbow";
	var chalk = ["redchalk", "orangechalk", "yellowchalk", "greenchalk", "bluechalk", "purplechalk", "whitechalk"];

	for(var i = 0; i < rainbow.length; i++){
		$("rainbow["i"]").addClass("chalk["i"]");
	};
}*/

//----------------------------------------RANDOM COLOR GENERATOR

function rainbowGen(){
	var randomR = Math.floor(Math.random()*255);
	var randomG = Math.floor(Math.random()*255);
	var randomB = Math.floor(Math.random()*255);

	return("rgba("+randomR+", "+randomG+", "+randomB+")");
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
	
	$("#clear").on("click", function(){
		$("td").removeClass();
		$("td").removeAttr("style");
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