//Peter Valleskey
//ASD 2/2012
//Project 3


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
		var key = $("#submit").attr("key");
		if (!key) {
			var id          = Math.floor(Math.random()*10000000001);
		} else { id = key; }
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

$.ajax({  
	url: "_view/adventurers",
	dataType: "json",
	error: function(result){ console.log(result); },
	success: function(data){
		$.each(data.rows, function (index, adv) { 
console.log(adv);
			if(adv.value.group[1] === "Warrior") {
				$("#warriorList").append('<li data-role="list-divider"></li>');
				$("#warriorList").append('<li data-theme=d></li>');
				$("#warriorList li:last-child").append('<h3>' + adv.value.name[0] + ' ' + adv.value.name[1] + '</h3>');
				$("#warriorList li:last-child").append('<p>' + adv.value.age[0] + ' ' + adv.value.age[1] + '</p>');
				$("#warriorList li:last-child").append('<p>' + adv.value.sex[0] + ' ' + adv.value.sex[1] + '</p>');
				$("#warriorList li:last-child").append('<p>' + adv.value.group[0] + ' ' + adv.value.group[1] + '</p>');
				$("#warriorList li:last-child").append('<p>' + adv.value.date[0] + ' ' + adv.value.date[1] + '</p>');
				$("#warriorList li:last-child").append('<p>' + adv.value.guild[0] + ' ' + adv.value.guild[1] + '</p>');
				$("#warriorList li:last-child").append('<p>' + adv.value.comments[0] + ' ' + adv.value.comments[1] + '</p>');
				$("#warriorList li:last-child").append('<div><a href="#" data-icon="delete" class="delete" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Delete</a><a href="#formPage" data-icon="gear" class="edit" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Edit</a></div>');
				$("#warriorList li:last-child div:last-child a:first-child").attr("key", adv.value.name[1]);
				$("#warriorList li:last-child div:last-child a:last-child").attr("key", adv.value.name[1]);
			}
			if(adv.value.group[1] === "Rogue") {
				$("#rogueList").append('<li data-role="list-divider"></li>');
				$("#rogueList").append('<li data-theme=d></li>');
				$("#rogueList li:last-child").append('<h3>' + adv.value.name[0] + ' ' + adv.value.name[1] + '</h3>');
				$("#rogueList li:last-child").append('<p>' + adv.value.age[0] + ' ' + adv.value.age[1] + '</p>');
				$("#rogueList li:last-child").append('<p>' + adv.value.sex[0] + ' ' + adv.value.sex[1] + '</p>');
				$("#rogueList li:last-child").append('<p>' + adv.value.group[0] + ' ' + adv.value.group[1] + '</p>');
				$("#rogueList li:last-child").append('<p>' + adv.value.date[0] + ' ' + adv.value.date[1] + '</p>');
				$("#rogueList li:last-child").append('<p>' + adv.value.guild[0] + ' ' + adv.value.guild[1] + '</p>');
				$("#rogueList li:last-child").append('<p>' + adv.value.comments[0] + ' ' + adv.value.comments[1] + '</p>');
				$("#rogueList li:last-child").append('<div><a href="#" data-icon="delete" class="delete" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Delete</a><a href="#formPage" data-icon="gear" class="edit" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Edit</a></div>');
				$("#rogueList li:last-child div:last-child a:first-child").attr("key", adv.value.name[1]);
				$("#rogueList li:last-child div:last-child a:last-child").attr("key", adv.value.name[1]);
			}
			if(adv.value.group[1] === "Hunter") {
				$("#hunterList").append('<li data-role="list-divider"></li>');
				$("#hunterList").append('<li data-theme=d></li>');
				$("#hunterList li:last-child").append('<h3>' + adv.value.name[0] + ' ' + adv.value.name[1] + '</h3>');
				$("#hunterList li:last-child").append('<p>' + adv.value.age[0] + ' ' + adv.value.age[1] + '</p>');
				$("#hunterList li:last-child").append('<p>' + adv.value.sex[0] + ' ' + adv.value.sex[1] + '</p>');
				$("#hunterList li:last-child").append('<p>' + adv.value.group[0] + ' ' + adv.value.group[1] + '</p>');
				$("#hunterList li:last-child").append('<p>' + adv.value.date[0] + ' ' + adv.value.date[1] + '</p>');
				$("#hunterList li:last-child").append('<p>' + adv.value.guild[0] + ' ' + adv.value.guild[1] + '</p>');
				$("#hunterList li:last-child").append('<p>' + adv.value.comments[0] + ' ' + adv.value.comments[1] + '</p>');
				$("#hunterList li:last-child").append('<div><a href="#" data-icon="delete" class="delete" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Delete</a><a href="#formPage" data-icon="gear" class="edit" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Edit</a></div>');
				$("#hunterList li:last-child div:last-child a:first-child").attr("key", adv.value.name[1]);
				$("#hunterList li:last-child div:last-child a:last-child").attr("key", adv.value.name[1]);
			}
			if(adv.value.group[1] === "Mage") {
				$("#mageList").append('<li data-role="list-divider"></li>');
				$("#mageList").append('<li data-theme=d></li>');
				$("#mageList li:last-child").append('<h3>' + adv.value.name[0] + ' ' + adv.value.name[1] + '</h3>');
				$("#mageList li:last-child").append('<p>' + adv.value.age[0] + ' ' + adv.value.age[1] + '</p>');
				$("#mageList li:last-child").append('<p>' + adv.value.sex[0] + ' ' + adv.value.sex[1] + '</p>');
				$("#mageList li:last-child").append('<p>' + adv.value.group[0] + ' ' + adv.value.group[1] + '</p>');
				$("#mageList li:last-child").append('<p>' + adv.value.date[0] + ' ' + adv.value.date[1] + '</p>');
				$("#mageList li:last-child").append('<p>' + adv.value.guild[0] + ' ' + adv.value.guild[1] + '</p>');
				$("#mageList li:last-child").append('<p>' + adv.value.comments[0] + ' ' + adv.value.comments[1] + '</p>');
				$("#mageList li:last-child").append('<div><a href="#" data-icon="delete" class="delete" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Delete</a><a href="#formPage" data-icon="gear" class="edit" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Edit</a></div>');
				$("#mageList li:last-child div:last-child a:first-child").attr("key", adv.value.name[1]);
				$("#mageList li:last-child div:last-child a:last-child").attr("key", adv.value.name[1]);
			}
			if(adv.value.group[1] === "Priest") {
				$("#priestList").append('<li data-role="list-divider"></li>');
				$("#priestList").append('<li data-theme=d></li>');
				$("#priestList li:last-child").append('<h3>' + adv.value.name[0] + ' ' + adv.value.name[1] + '</h3>');
				$("#priestList li:last-child").append('<p>' + adv.value.age[0] + ' ' + adv.value.age[1] + '</p>');
				$("#priestList li:last-child").append('<p>' + adv.value.sex[0] + ' ' + adv.value.sex[1] + '</p>');
				$("#priestList li:last-child").append('<p>' + adv.value.group[0] + ' ' + adv.value.group[1] + '</p>');
				$("#priestList li:last-child").append('<p>' + adv.value.date[0] + ' ' + adv.value.date[1] + '</p>');
				$("#priestList li:last-child").append('<p>' + adv.value.guild[0] + ' ' + adv.value.guild[1] + '</p>');
				$("#priestList li:last-child").append('<p>' + adv.value.comments[0] + ' ' + adv.value.comments[1] + '</p>');
				$("#priestList li:last-child").append('<div><a href="#" data-icon="delete" class="delete" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Delete</a><a href="#formPage" data-icon="gear" class="edit" data-role="button" data-theme="a" data-inline="true" data-ajax="false">Edit</a></div>');
				$("#priestList li:last-child div:last-child a:first-child").attr("key", adv.value.name[1]);
				$("#priestList li:last-child div:last-child a:last-child").attr("key", adv.value.name[1]);
			}
		});
	}

});

var editButton = function() {
	key = $(this).attr("key")
	var value = localStorage.getItem(key);
	var item = JSON.parse(value);
	$("#submit").html('Edit').attr('key', key);
	console.log("test");
	console.log(item.group[1]);
	console.log($("#submit").attr("key"));

	$('#groups').attr('value', item.group[1]);
	$('#name').attr('value', item.name[1]);
	$('#age').attr('value', item.age[1]);
	$('#sex').attr('value', item.sex[1]);
	$('#guild').attr('value', item.guild[1]);
	$('#groups').attr('value', item.group[1]);
	$('#date').attr('value', item.date[1]);
	$('#comments').attr('value', item.comments[1]);

};
$('a.edit').bind("click", editButton);// edits an entry

var deleteButton = function() {
	var ask = confirm("Are you sure you want to delete this adventurer?");
	if(ask) {
		localStorage.removeItem($(this).attr("key"));
		alert("Adventurer was deleted!");
		window.location.reload();
	} else {
		alert("Adventurer was not deleted.");
	}
};	
$('a.delete').bind("click", deleteButton);// deletes an entry