// Peter Valleskey
// MIU 12/2011
// Project 3 -- BAD MAIN

$(document).ready(function() {
	var getID = function (x) {
        var theElement = document.getElementById(x);
        return theElement;
    };


	var parseAdvForm = function(data) {
	        console.log(data); //data = array[object { name: (HTML <input name="name">, value: (input from form) } 
			console.log(data[0].value); // data[object].valueFromFormField
	  		window.location.reload();
			alert("Form Submitted Sucessfully!");
	  //modified storeData function called here
};
	
var storeData = function(key) {
		if (!key) {
            var id          = Math.floor(Math.random()*10000000001);
        } else {
            id = key;
        }
        getSelectedRadio();
        getCheckBoxValue();
        var item            = {};
            item.name       = ["Name: ",                getID('name').value];
            item.age        = ["Age: ",                 getID('age').value];
            item.sex        = ["Sex: ",                 sexValue];
            item.group      = ["Class: ",               getID('groups').value];
            item.date       = ["Date joined: ",         getID('date').value];
            item.guild      = ["Guild member status: ", guildValue];
            item.comments   = ["Comments: ",            getID('comments').value];
        localStorage.setItem(id, JSON.stringify(item));
        alert("Adventurer saved sucessfully!");
    };
	
var getSelectedRadio = function () {
        var radios = document.forms[0].sex;
        for (var i = 0;i < radios.length;i++) {
            if(radios[i].checked) {
                sexValue = radios[i].value;
            }
        }
    };
	
	var getSliderValue = function () {
        if(getID('guild').checked) {
            guildValue = getID('guild').value;
        } else {
            guildValue = "Not in the guild";
        }
    };
	
	
	
	var advForm = $('#advForm');
	
	advForm.validate({
		invalidHandler: function(form, validator){
			alert('You had error(s)');
			},
		submitHandler: function() {
			var data = advForm.serializeArray();
			parseAdvForm(data);
		}
	});
});