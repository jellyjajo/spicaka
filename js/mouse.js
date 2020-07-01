const tracker = document.getElementById("tracker");
const mouseTracker = document.getElementById("mouse-tracker");

function trackMouse(evt) {
	mouseTracker.style.position = "absolute";
	mouseTracker.style.top = evt.clientY - 100 + "px";
	mouseTracker.style.left = evt.clientX - 100 + "px";
}

tracker.addEventListener("mousemove", trackMouse);
