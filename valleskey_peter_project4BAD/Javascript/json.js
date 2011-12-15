// Peter Valleskey
// MIU 12/2011
// Project 1
// good json

var autoFillData = function() {
		var json = {
			"contact1": {
				"name"    : ["Name: ", "Chuck Norris"],
				"age"     : ["Age: ", "71"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Hunter"],
				"date"    : ["Date joined: ", "11/11/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", "Chuck Norris doesn't read books. He stares them down until he gets the information he wants."]
			},
			"contact2": {
				"name"    : ["Name: ", "Conan The Barbarian"],
				"age"     : ["Age: ", "31"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Warrior"],
				"date"    : ["Date joined: ", "11/11/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", "What's that, do I hear the lamentations of women?"]
			},
			"contact3": {
				"name"    : ["Name: ", "Xena"],
				"age"     : ["Age: ", "31"],
				"sex"     : ["Sex: ", "Woman"],
				"group"   : ["Class: ", "Warrior"],
				"date"    : ["Date joined: ", "11/12/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", "AYI YI YI YI YI YI YI YI!!"]
			},
			"contact4": {
				"name"    : ["Name: ", "Black Mage"],
				"age"     : ["Age: ", "40"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Mage"],
				"date"    : ["Date joined: ", "10/11/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", "Urge... to kill.... rising."]
			},
			"contact5": {
				"name"    : ["Name: ", "Fred"],
				"age"     : ["Age: ", "25"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Priest"],
				"date"    : ["Date joined: ", "11/21/2011"],
				"guild"   : ["Guild member status: ", "true"],
				"comments": ["Comments: ", ""]
			},
			"contact6": {
				"name"    : ["Name: ", "Master Chief"],
				"age"     : ["Age: ", "44"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Hunter"],
				"date"    : ["Date joined: ", "10/11/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", ""]
			},
			"contact7": {
				"name"    : ["Name: ", "Billy Bones"],
				"age"     : ["Age: ", "55"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Rogue"],
				"date"    : ["Date joined: ", "11/01/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", "The black spot!!"]
			},
			"contact8": {
				"name"    : ["Name: ", "Minx"],
				"age"     : ["Age: ", "22"],
				"sex"     : ["Sex: ", "Female"],
				"group"   : ["Class: ", "Rogue"],
				"date"    : ["Date joined: ", "11/04/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", "Sneaky sneaky."]
			},
			"contact9": {
				"name"    : ["Name: ", "Harry Potter"],
				"age"     : ["Age: ", "18"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Mage"],
				"date"    : ["Date joined: ", "10/13/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", "YOUR A WIZARD HARRY!"]
			},
			"contact10": {
				"name"    : ["Name: ", "Juggo"],
				"age"     : ["Age: ", "24"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Hunter"],
				"date"    : ["Date joined: ", "11/05/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", ""]
			},
			"contact11": {
				"name"    : ["Name: ", "Katarina"],
				"age"     : ["Age: ", "26"],
				"sex"     : ["Sex: ", "Female"],
				"group"   : ["Class: ", "Rogue"],
				"date"    : ["Date joined: ", "11/08/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", ""]
			},
			"contact12": {
				"name"    : ["Name: ", "Drizzt"],
				"age"     : ["Age: ", "65"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Hunter"],
				"date"    : ["Date joined: ", "11/09/2011"],
				"guild"   : ["Guild member status: ", "true"],
				"comments": ["Comments: ", ""]
			},
			"contact13": {
				"name"    : ["Name: ", "Annie"],
				"age"     : ["Age: ", "18"],
				"sex"     : ["Sex: ", "Female"],
				"group"   : ["Class: ", "Mage"],
				"date"    : ["Date joined: ", "11/11/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", "Likes fire, alot..."]
			},
			"contact14": {
				"name"    : ["Name: ", "Soraka"],
				"age"     : ["Age: ", "30"],
				"sex"     : ["Sex: ", "Female"],
				"group"   : ["Class: ", "Priest"],
				"date"    : ["Date joined: ", "10/19/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", ""]
			},
			"contact15": {
				"name"    : ["Name: ", "Jarvin"],
				"age"     : ["Age: ", "34"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Warrior"],
				"date"    : ["Date joined: ", "11/11/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", ""]
			},
			"contact16": {
				"name"    : ["Name: ", "Ashe"],
				"age"     : ["Age: ", "28"],
				"sex"     : ["Sex: ", "Female"],
				"group"   : ["Class: ", "Hunter"],
				"date"    : ["Date joined: ", "11/11/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", ""]
			},
			"contact17": {
				"name"    : ["Name: ", "Timian"],
				"age"     : ["Age: ", "26"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Hunter"],
				"date"    : ["Date joined: ", "10/01/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", ""]
			},
			"contact18": {
				"name"    : ["Name: ", "Baranar"],
				"age"     : ["Age: ", "26"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Priest"],
				"date"    : ["Date joined: ", "10/01/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", ""]
			},
			"contact19": {
				"name"    : ["Name: ", "Jaedin"],
				"age"     : ["Age: ", "27"],
				"sex"     : ["Sex: ", "Male"],
				"group"   : ["Class: ", "Rogue"],
				"date"    : ["Date joined: ", "10/02/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", ""]
			},
			"contact20": {
				"name"    : ["Name: ", "Tysiphani"],
				"age"     : ["Age: ", "25"],
				"sex"     : ["Sex: ", "Female"],
				"group"   : ["Class: ", "Warrior"],
				"date"    : ["Date joined: ", "10/03/2011"],
				"guild"   : ["Guild member status: ", "Not in the guild."],
				"comments": ["Comments: ", ""]
			}
			
		};
		for(var n in json) {
			var id = Math.floor(Math.random()*100000000001);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	};
if(localStorage.length === 0) {autoFillData();}
/*	
function convertDate(date) {
   var parts = date.split("/");
   return new Date(parts[2], parts[1] - 1, parts[0]);
}
var disDate1 = "10/10/2011";
var disDate2 = "10/10/2012";
var disDate3 = "10/10/2013";
var rock = Date.parse(disDate1);
var rock2 = Date.parse(disDate2);
var rock3 = Date.parse(disDate3);
	
	if((rock - rock2) > 0) {
			  console.log(rock + ' is later than ' + rock2);
		} else if ((rock - rock2) < 0) {
			console.log(rock + ' is earlier than ' + rock2);
		} else {
			console.log(rock + ' is the same time as ' + rock2);
		}
*/

//	JSON.sort(function(a,b) { return parseFloat(a.date[1]) - parseFloat(b.date[1]) } );

	
var getID = function (x) {
     var theElement = document.getElementById(x);
     return theElement;
};



for(var i = 0, len=localStorage.length; i < len; i++) {
            var divide = document.createElement('li')
			divide.setAttribute("data-role", "list-divider");
			var key = localStorage.key(i);
            var value = localStorage.getItem(key);
            var obj = JSON.parse(value);
			
			var warriorList = getID('warriorList');
			var rogueList   = getID('rogueList');
			var hunterList  = getID('hunterList');
			var mageList    = getID('mageList');
			var priestList	= getID('priestList');
			
			if(obj.group[1] === "Warrior") {
   	            var makeli = document.createElement('li');
				warriorList.appendChild(divide);
				warriorList.appendChild(makeli);
				for(var n in obj){
					var makep = document.createElement('p');
					var makeh3 = document.createElement('h3');
				 	if(n === "name") {
						var optSubText = obj[n][0]+" "+obj[n][1];
        	            makeh3.innerHTML = optSubText;
						makeli.appendChild(makeh3);
					} else {
					  var optSubText = obj[n][0]+" "+obj[n][1];
					  makep.innerHTML += optSubText;
					  makeli.appendChild(makep);
					}
				}
            }
			if(obj.group[1] === "Rogue") {
				var makeli = document.createElement('li');
				rogueList.appendChild(divide);
				rogueList.appendChild(makeli);
				for(var n in obj){
					var makep = document.createElement('p');
    	            var makeh3 = document.createElement('h3');
					if(n === "name") {
						var optSubText = obj[n][0]+" "+obj[n][1];
        	            makeh3.innerHTML = optSubText;
						makeli.appendChild(makeh3);
					} else {
					  var optSubText = obj[n][0]+" "+obj[n][1];
					  makep.innerHTML += optSubText;
					  makeli.appendChild(makep);
					}
				}
            }
			if(obj.group[1] === "Hunter") {
				var makeli = document.createElement('li');
				hunterList.appendChild(divide);
				hunterList.appendChild(makeli);
				for(var n in obj){
    	            var makeh3 = document.createElement('h3');
					var makep = document.createElement('p');
					if(n === "name") {
						var optSubText = obj[n][0]+" "+obj[n][1];
        	            makeh3.innerHTML = optSubText;
						makeli.appendChild(makeh3);
					} else {
					  var optSubText = obj[n][0]+" "+obj[n][1];
					  makep.innerHTML += optSubText;
					  makeli.appendChild(makep);
					}
				}
            }
			if(obj.group[1] === "Mage") {
				var makeli = document.createElement('li');
				mageList.appendChild(divide);
				mageList.appendChild(makeli);
				for(var n in obj){
    	            var makeh3 = document.createElement('h3');
					var makep = document.createElement('p');
					if(n === "name") {
						var optSubText = obj[n][0]+" "+obj[n][1];
        	            makeh3.innerHTML = optSubText;
						makeli.appendChild(makeh3);
					} else {
					  var optSubText = obj[n][0]+" "+obj[n][1];
					  makep.innerHTML += optSubText;
					  makeli.appendChild(makep);
					}
				}
            }
			if(obj.group[1] === "Priest") {
				var makeli = document.createElement('li');
				priestList.appendChild(divide);
				priestList.appendChild(makeli);
				for(var n in obj){
    	            var makeh3 = document.createElement('h3');
					var makep = document.createElement('p');
					if(n === "name") {
						var optSubText = obj[n][0]+" "+obj[n][1];
        	            makeh3.innerHTML = optSubText;
						makeli.appendChild(makeh3);
					} else {
					  var optSubText = obj[n][0]+" "+obj[n][1];
					  makep.innerHTML += optSubText;
					  makeli.appendChild(makep);
					}
				}
            
			}
    };