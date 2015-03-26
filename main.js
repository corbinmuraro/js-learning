

var girl = "john";

switch(girl)
{
	case "natalie":
		document.write("Natalie");
		break;
	case "ashley":
		document.write("Ashley");
		break;
	default:
		document.write("NO MATCH");
}


for (x=0; x<10; x++)
{
	document.write(x + " ");
}





function person(name,age) // constructor
{	
	this.name = name;
	this.age = age;
}

var corbin = new person("Corbin",19);
//===
//OR
//===
corbin = {name:"Corbin Muraro", age:19}; // initializer


 // ASSINGING METHODS TO OBJECTS
function people(name,age)
{
	this.name = name;
	this.age = age;
	this.years_left = years_till_retirement; // emit () from function
}

document.write(natalie.years_left());

function years_till_retirement()
{
	var num_years = 65-this.age;
	return num_years;
}

var natalie = new people("Natalie", 30);
		



// ARRAYS
var people = ["Bucky", "Tommy", "Sarah", "Hannah", "Mikey"];
document.write(people[3]  + "<br />");

var more_people = [];
more_people[0] = "John";
more_people[1] = "Joseph";

var everyone = people.concat(more_people); 	// CONCAT

for (i=0; i<everyone.length; i++)			// LENGTH
{
	document.write(everyone[i] + " ");
}



var movies = ["Avatar", "Django", "Airplane"];

var string1 = movies.join(); // combines strings into a single string, separates with comma by default
var string2 = movies.join(" - "); // parameter is what separates elements

document.write(string1);
document.write(string2);

movies.pop(); // removes last element of array
movies.reverse(); //reverses order of elements of array
movies.push("Toy Story"); // adds element to end of array
movies.sort(); // sorts elements

movies.push(prompt("Add something to the array:")); // push with prompt to user for content

document.write(movies.join());



// ASSOCIATIVE ARRAYS
var fruits = {
	"apples" : "red",
	"oranges" : "orange",
	"bananas" : "yellow"
};

var fruitColor = fruits["apples"];


// MATHS
var pi = Math.PI;
var e = Math.E;
var answer = Math.sqrt(81);


// TIME
function printTime()
{
	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	document.write(hours+":"+minutes+":"+seconds+"<br />");
}
setInterval("printTime()", 1000); // calls printTime function every second


// FORMS

var x = document.forms[0].length; // stores the first form's (form 0) length in x
document.write(x);

var handle = document.forms[0].elements[0]; // stores the first element of the forms array in handle
var pass = document.myform.password; // works similar to before, but we use the given names of the form and the password



