// computations
var numCourses = 0;

function launch(){
	updateCourseNumber();
	document.getElementById('gpa').innerHTML = "0.000";
}

function autoFill(i){
	var title = document.getElementById('title' + i).value;
	var unit = document.getElementById('unit' + i).value;
	var grade = document.getElementById('grade' + i).value;

	if(title === "")
		document.getElementById('title' + i).value = "Course " + (i+1);

	if(unit === "")
		document.getElementById('unit' + i).value = "3";

	if(grade === "")
		document.getElementById('grade' + i).value = "0.0";
}

function updateLines()
{
	for(var i = 0; i < 15; i++)
		document.getElementById('line' + i).style.display = "none";

	for(var i = 0; i < numCourses; i++)
	{
		autoFill(i);
		document.getElementById('line' + i).style.display = "block";
	}

	document.getElementById('gpa').innerHTML = "0.000";
}

function increase(){

	if(numCourses < 15)
		numCourses++;

	document.getElementById('msg').style.display = "none";
	updateLines();
	updateCourseNumber();
}

function decrease(){

	if(numCourses > 1)
		numCourses--;

	updateLines();
	updateCourseNumber();
}

function updateCourseNumber(){
	document.getElementById('currNum').innerHTML = numCourses;
}

//function to add total number of units
function computeUnitsTotal(){
	var total = 0;
	for(var i = 0; i < numCourses; i++)
	{
		autoFill(i);
		var unit = parseInt(document.getElementById('unit' + i).value);
		total += unit;
	}

	return total;
}

//Sum of all grade times their respective units
function computeGradesEarned(){
	var total = 0;
	for(var i = 0; i < numCourses; i++)
	{
		autoFill(i);
		var unit = parseFloat(document.getElementById('unit' + i).value);
		var grade = parseFloat(document.getElementById('grade' + i).value);

		total = total + (unit * grade);
	}

	return total;
}

//computeGradesEarned() / computeUnitsTotal()
function computeFinalGPA(){
	var gpa = Number(computeGradesEarned() / computeUnitsTotal()).toFixed(3);

	if(gpa >= 3.000 && gpa <= 3.399)
		document.getElementById('gpa').innerHTML = gpa + " (Second Honors Dean\'s List)";

	else if(gpa > 3.399)
		document.getElementById('gpa').innerHTML = gpa + " (First Honors Dean\'s List)";

	else document.getElementById('gpa').innerHTML = gpa;
}