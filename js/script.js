function dark_mode() {
	var elem = document.body;
	var infoTable = document.getElementsByTagName('table');
	var themeBtn = document.getElementById('theme-btn');
	elem.style.backgroundColor = "black";
	for (let i = 0; i < infoTable.length; i++) {
		const table = infoTable[i];
		table.style.color = "white";
	}
	elem.style.color = "white";
	themeBtn.innerHTML = "Light Mode";
	themeBtn.className = "dark-btn";
	themeBtn.setAttribute('onclick', 'light_mode()');
}

function light_mode() {
	var elem = document.body;
	var infoTable = document.getElementsByTagName('table');
	var themeBtn = document.getElementById('theme-btn');
	elem.style.backgroundColor = "#f7f7f7";
	for (let i = 0; i < infoTable.length; i++) {
		const table = infoTable[i];
		table.style.color = "black";
	}
	elem.style.color = "black";
	themeBtn.innerHTML = "Dark Mode";
	themeBtn.className = "light-btn";
	themeBtn.setAttribute('onclick', 'dark_mode()');
}

window.onscroll = function() {stick()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function stick(){
	navbarHeight = window.getComputedStyle(navbar, null).getPropertyValue('height');
	if (window.pageYOffset > sticky) {
		navbar.classList.add("sticky");
	}
	else {
		navbar.classList.remove("sticky");
	}
}