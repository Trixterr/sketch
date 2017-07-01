var userInput = 16;

function createGrid() {
	//create divs to cover x-axis
	//create divs to cover y-axis
	//fill in the blanks

	$(".board").append('<table></table>');
	$("tr").append("<td></td>"); // also needs for loop*/

	for (var i = 0; i < userInput; i++) {
		$("table").append("<tr></tr>");
	}

	for (var j = 0; j < userInput; j++) {
		$("tr").append("<td></td>");
	}

}


$(document).ready(function(){
	
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


	createGrid();
});