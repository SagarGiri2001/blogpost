<<<<<<< HEAD
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
	const hamIcon = this.querySelector('.hamburger-icon');
	const crossIcon = this.querySelector('.cross-icon');
	if (hamIcon.style.display === "none") {
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	}
	else {
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	}
});
=======
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
	const hamIcon = this.querySelector('.hamburger-icon');
	const crossIcon = this.querySelector('.cross-icon');
	if (hamIcon.style.display === "none") {
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	}
	else {
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	}
});
>>>>>>> 85fd3e056039f4d272c315c1cebac5238c39bde1
