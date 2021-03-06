// Peter Valleskey
// ASD 2/2012
// Project 1


$(document).ready(function() {

xmlContact1 = "<num1>";
xmlContact1 = xmlContact1 + "<name>Chuck Norris</name>";
xmlContact1 = xmlContact1 + "<age>45</age>";
xmlContact1 = xmlContact1 + "<group>Warrior</group>";
xmlContact1 = xmlContact1 + "<sex>Male</sex>";
xmlContact1 = xmlContact1 + "<date>1/12/2012</date>";
xmlContact1 = xmlContact1 + "<guild>Not in the guild</guild>";
xmlContact1 = xmlContact1 + "<comments>Chuck's tears cure cancer, too bad he has never cried.</comments>";
xmlContact1 = xmlContact1 + "</num1>";

xmlDoc = $.parseXML( xmlContact1 );
$xml = $ ( xmlDoc );
console.log($xml.find( "num1" ).find( "name" ));
console.log(test);
$name = $xml.find( "name" );
$age = $xml.find( "age" );
$group = $xml.find( "group" );
$sex = $xml.find( "sex" );
$date = $xml.find( "date" );
$guild = $xml.find( "guild" );
$comments = $xml.find( "comments" );
console.log($name + $age + $group + $sex + $date + $guild + $comments);

function makeDate() {
	var mydate=new Date()
	var theyear=mydate.getYear()
	if (theyear < 1000)
	theyear+=1900
	var theday=mydate.getDay()
	var themonth=mydate.getMonth()+1
	if (themonth<10)
	themonth="0"+themonth
	var theday=mydate.getDate()
	if (theday<10)
	theday="0"+theday
	var displayfirst=themonth
	var displaysecond=theday
	var displaythird=theyear
	return displayfirst+"/"+displaysecond+"/"+displaythird
}   
$('#date').val(makeDate()); // function to create formatted date - then jquery call to populate it

var clearLocal = function() {
	if(localStorage.length === 0) {
		alert("There is no data to clear.");
	}else{
		localStorage.clear();
		alert("Data cleared.");
		window.location.reload();
		return false;
	}
};	
$('#clear').bind("click", clearLocal);// clears localstorage
	
jQuery.extend(jQuery.mobile.datebox.prototype.options, {
  'dateFormat': 'dd.mm.YYYY',
  'headerFormat': 'dd.mm.YYYY'
});
	
var advForm = $('#advForm');

advForm.validate({
	submitHandler: function(e) {
		var data = advForm.serializeArray();
		/*if (!key) {
			var id          = Math.floor(Math.random()*10000000001);
		//} else {
			id = key;
			}*/
		  if (id == id) {
			  var id = Math.floor(Math.random()*10000000001);
		  } else { Math.floor(Math.random()*10000000001); };
			var item            = {};
			item.name       = ["Name: ",                data[0].value];
			item.age        = ["Age: ",                 data[1].value];
			item.sex        = ["Sex: ",                 data[2].value];
			item.group      = ["Class: ",               data[3].value];
			item.date       = ["Date joined: ",         data[4].value];
			item.guild      = ["Guild member status: ", data[5].value];
			item.comments   = ["Comments: ",            data[6].value];
			localStorage.setItem(id, JSON.stringify(item));
			alert("Adventurer saved sucessfully!");
			window.location.reload();
	}
});


if(localStorage.length === 0) {autoFillData();} // auto creates dummy data //
//  This code reads the localstorage and outputs it to the webpage //
for(var i = 0, len=localStorage.length; i < len; i++) {
            
var key = localStorage.key(i);
var value = localStorage.getItem(key);
var obj = JSON.parse(value);

if(typeof(obj) != 'object') {
	continue;
}
	
if(obj.group[1] === "Warrior") {
	$("#warriorList").append('<li data-role="list-divider"></li>');
	$("#warriorList").append('<li data-theme=d></li>');
	for(var n in obj){
		if(n === "name") {
			$("#warriorList li:last-child").append('<h3>' + obj[n][0] + ' ' + obj[n][1] + '</h3>');
		} else {
		  $("#warriorList li:last-child").append('<p>' + obj[n][0] + ' ' + obj[n][1] + '</p>');
		}
	} $("#warriorList li:last-child").append('<div><a href="#" data-icon="delete" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Delete</a><a href="#" data-icon="gear" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Edit</a></div>');
	  $("#warriorList div:last-child a").data("key", key);
	  console.log(key);
	  console.log($("#warriorList div:last-child a").data("key"));
}
if(obj.group[1] === "Rogue") {
	$("#rogueList").append('<li data-role="list-divider"></li>');
	$("#rogueList").append('<li data-theme=d></li>');
	for(var n in obj){
		if(n === "name") {
			$("#rogueList li:last-child").append('<h3>' + obj[n][0] + ' ' + obj[n][1] + '</h3>');
		} else {
		  $("#rogueList li:last-child").append('<p>' + obj[n][0] + ' ' + obj[n][1] + '</p>');
		}
	} $("#rogueList li:last-child").append('<div><a href="#" data-icon="delete" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Delete</a><a href="#" data-icon="gear" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Edit</a></div>');
}
if(obj.group[1] === "Hunter") {
	$("#hunterList").append('<li data-role="list-divider"></li>');
	$("#hunterList").append('<li data-theme=d></li>');
	for(var n in obj){
		if(n === "name") {
			$("#hunterList li:last-child").append('<h3>' + obj[n][0] + ' ' + obj[n][1] + '</h3>');
		} else {
		  $("#hunterList li:last-child").append('<p>' + obj[n][0] + ' ' + obj[n][1] + '</p>');
		}
	} $("#hunterList li:last-child").append('<div><a href="#" data-icon="delete" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Delete</a><a href="#" data-icon="gear" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Edit</a></div>');
}
if(obj.group[1] === "Mage") {
	$("#mageList").append('<li data-role="list-divider"></li>');
	$("#mageList").append('<li data-theme=d></li>');
	for(var n in obj){
		if(n === "name") {
			$("#mageList li:last-child").append('<h3>' + obj[n][0] + ' ' + obj[n][1] + '</h3>');
		} else {
		  $("#mageList li:last-child").append('<p>' + obj[n][0] + ' ' + obj[n][1] + '</p>');
		}
	} $("#mageList li:last-child").append('<div><a href="#" data-icon="delete" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Delete</a><a href="#" data-icon="gear" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Edit</a></div>');
}
if(obj.group[1] === "Priest") {
	$("#priestList").append('<li data-role="list-divider"></li>');
	$("#priestList").append('<li data-theme=d></li>');
	for(var n in obj){
		if(n === "name") {
			$("#priestList li:last-child").append('<h3>' + obj[n][0] + ' ' + obj[n][1] + '</h3>');
		} else {
		  $("#priestList li:last-child").append('<p>' + obj[n][0] + ' ' + obj[n][1] + '</p>');
		}
	} $("#priestList li:last-child").append('<div><a href="#" data-icon="delete" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Delete</a><a href="#" data-icon="gear" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Edit</a></div>');
}
}; // end of output to page from localstorage //

});