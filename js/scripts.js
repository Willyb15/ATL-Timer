// Grab Elements By Id's to manipulate innerHTML later
// Inputing time remaining til doomsday

	var timer = document.getElementById("countdown-wrapper");
	var weeks = document.getElementById("weeks");
	var days = document.getElementById('days');
	var hours = document.getElementById("hours");
	var minutes = document.getElementById("minutes");
	var seconds = document.getElementById("seconds")

	//var endTime = new Date(2016,2,6,16,50,45);
	//var endTimestamp = Date.parse(endTime);


function timeTillDoomsDay(doomsday){
	// Define Time Remaining Til Doomsday!!!
	var now = new Date();
	var nowTimestamp = Date.parse(now);
	var timeDifference = doomsday - nowTimestamp;
	
	// Set Time remaining in 'weeks','days','hours','minutes','seconds'
	// Use Math.floor to clip the remainder
	var timeStampInSeconds = timeDifference / 1000;
	var seconds = Math.floor (timeStampInSeconds % 60);
	var minutes = Math.floor((timeStampInSeconds / 60) % 60);  // modulus gets the remainder and puts them in seconds
	var hours = Math.floor(timeStampInSeconds /(60 * 60) % 24);  // modulus gets how many gets number of minutes
	var days = Math.floor(timeStampInSeconds / (60 * 60 * 24) % 7);
	var weeks = Math.floor(timeStampInSeconds / (60 * 60 * 24 * 7));
	
	 // 2153256500 seconds then use to translate into minutes, hours, days, weeks,
	 //var timeObject is a "variable of variables"
	 var timeObject = {
	 	weeks : weeks,
	 	days : days,
	 	hours : hours,
	 	minutes : minutes,
	 	seconds : seconds
	 };

	 if (timeDifference < 1000) {
		 clearInterval(interval);
	 }
	return timeObject;
}

function initTimer(doomsday){
	var timeObjectReturned = timeTillDoomsDay(doomsday);
	
	weeks.innerHTML = timeObjectReturned.weeks;
	days.innerHTML = timeObjectReturned.days;
	hours.innerHTML	= timeObjectReturned.hours;
	minutes.innerHTML = timeObjectReturned.minutes;
	seconds.innerHTML = timeObjectReturned.seconds;
	console.log(timeObjectReturned); 

}


// updates timer every 1000ms. 1000ms is 1 second.
function startDoomsDay() {

	var doomsdayyear = document.getElementById("doomsdayyear").value;
	var doomsdaymonth = document.getElementById("doomsdaymonth").value;
	var doomsdayday = document.getElementById("doomsdayday").value;
	var doomsdaytest = doomsdayyear +"/"+doomsdaymonth +"/"+ doomsdayday;
	console.log(doomsdaytest);
	// console.log(date);
	var doomsday = Date.parse(doomsdayyear);
	console.log(doomsday);
	var interval = setInterval(initTimer,500,doomsday);
	
	if (doomsdaytest <= 1) {
		document.getElementById("countdown-wrapper").style.display = "none";
		clearInterval(interval);
	}

}