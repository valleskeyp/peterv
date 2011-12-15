// Peter Valleskey
// MIU 12/2011
// Project 3

$(document).ready(function() {
	var getID = function (x) {
        var theElement = document.getElementById(x);
        return theElement;
    };
	
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
	getID('date').value = makeDate();


	var parseAdvForm = function(data) {
	        console.log(data); //data = array[object { name: (HTML <input name="name">, value: (input from form) } 
			console.log(data[0].value); // data[object].valueFromFormField
	  		//window.location.reload();
			alert("Form Submitted Sucessfully!");
	  //modified storeData function called here
};

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

var clearLink = getID('clear');
clearLink.addEventListener("click", clearLocal);
		
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
	
	jQuery.extend(jQuery.mobile.datebox.prototype.options, {
      'dateFormat': 'dd.mm.YYYY',
      'headerFormat': 'dd.mm.YYYY'
	});
	
	
	var advForm = $('#advForm');
	
	advForm.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function() {
			var data = advForm.serializeArray();
			localStorage.setItem("formdata", data);
			window.location.reload();
			alert("Form Submitted SUcessfully!");
		}
	});
});