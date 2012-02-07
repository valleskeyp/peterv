// Peter Valleskey
// ASD 2/2012
// Project 1



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


if(localStorage.length === 0) {
	$.ajax({  // Parse out XML data into localstorage
		url: "XML/text.xml",
		dataType: "xml",
		error: function(result){ console.log(result); },
		success: function(data){
			var xmlOne = ('{"name":["Name: ", "'+$(data).find("num1").find("name").text()+'"],"age":["Age: ", "'+$(data).find("num1").find("age").text()+'"],"sex":["Sex: ", "'+$(data).find("num1").find("sex").text()+'"],"group":["Class: ", "'+$(data).find("num1").find("group").text()+'"],"date":["Date Joined: ", "'+$(data).find("num1").find("date").text()+'"],"guild":["Guild Member? ", "'+$(data).find("num1").find("guild").text()+'"],"comments":["Comments: ", "'+$(data).find("num1").find("comments").text()+'"]}');
			var xmlTwo = ('{"name":["Name: ", "'+$(data).find("num2").find("name").text()+'"],"age":["Age: ", "'+$(data).find("num2").find("age").text()+'"],"sex":["Sex: ", "'+$(data).find("num2").find("sex").text()+'"],"group":["Class: ", "'+$(data).find("num2").find("group").text()+'"],"date":["Date Joined: ", "'+$(data).find("num2").find("date").text()+'"],"guild":["Guild Member? ", "'+$(data).find("num2").find("guild").text()+'"],"comments":["Comments: ", "'+$(data).find("num2").find("comments").text()+'"]}');
			var id = Math.floor(Math.random()*100000000001);
			localStorage.setItem(id, xmlOne);
			var id = Math.floor(Math.random()*100000000001);
			localStorage.setItem(id, xmlTwo);
			autoFillData();
		}
    });
} // auto creates dummy data //
	
//  This code reads the localstorage and outputs it to the webpage //
for(var i = 0, len=localStorage.length; i < len; i++) {

var key = localStorage.key(i);
var value = localStorage.getItem(key);
var obj = JSON.parse(value);

if(value=="{}"){continue;};//Won't need this soon, holy crap it bothered me.
if(typeof(obj)!='object'){continue;};//Localstorage won't break..as much..


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
