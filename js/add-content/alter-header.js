var greeting
var date = new Date()
var hour = date.getHours()

if (hour > 18) {
	greeting = 'Good Evening!'
}
else if (hour > 12) {
	greeting = 'Good Afternoon!'
	alert
}
else if (hour > 0) {
	greeting = 'Good Morning!'
}
else {
	greeting = 'Welcome'
}

var header = document.getElementById('greeting')
header.innerHTML = greeting