const banners = document.getElementsByClassName("banner");
const boxes = document.getElementsByClassName("box");
const workItems = document
	.getElementsByClassName("work-items")[0]
	.getElementsByTagName("li");
const risingElements = [...banners, ...boxes, ...workItems];
const didElementRise = {};

function init() {
	risingElements.forEach((el) => {
		el.classList.add("offset");
		el.setAttribute("style", "transition-duration:" + Math.random() + "s;");
	});
}

function updateRisingElement(clientHeight) {
	risingElements.forEach((el, i) => {
		if (i in didElementRise) {
			return;
		}
		const elementY = el.getBoundingClientRect().top;

		const isInView = elementY < clientHeight;
		if (isInView) {
			el.classList.remove("offset");
			didElementRise[i] = true;
		}
	});
}

init();

document.addEventListener("scroll", () => {
	console.log("Scroll");
	const height = document.documentElement.clientHeight;
	updateRisingElement(height);
});
