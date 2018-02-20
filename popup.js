// State variable
let displayAll = false;
let displayDiv = false;
let displaySection = false;

const allBtn = document.getElementById("all");
const divBtn = document.getElementById("div");
const sectionBtn = document.getElementById("section");

function toggleAll() {
	displayAll = !displayAll;

	chrome.tabs.getSelected(null, function (tab) {
		chrome.tabs.executeScript(tab.id, {
			file: displayAll ? './helpers/showAll.js' : './helpers/hideAll.js'
		}, function (response) {
			console.log(response);
		});
	});

	allBtn.innerText = displayAll ? "All: Hide" : "All: Show";
}

function toggleDiv() {
	displayDiv = !displayDiv;

	chrome.tabs.getSelected(null, function (tab) {
		chrome.tabs.executeScript(tab.id, {
			file: displayDiv ? './helpers/showDiv.js' : './helpers/hideDiv.js'
		}, function (response) {
			console.log(response);
		});
	});

	divBtn.innerText = displayDiv ? "Div: Hide" : "Div: Show";
}

function toggleSection() {
	displaySection = !displaySection;

	chrome.tabs.getSelected(null, function (tab) {
		chrome.tabs.executeScript(tab.id, {
			file: displaySection ? './helpers/showSection.js' : './helpers/hideSection.js'
		}, function (response) {
			console.log(response);
		});
	});

	sectionBtn.innerText = displaySection ? "Section: Hide" : "Section: Show";
}

document.addEventListener('DOMContentLoaded', function () {
	allBtn.addEventListener("click", toggleAll);
	divBtn.addEventListener("click", toggleDiv);
	sectionBtn.addEventListener("click", toggleSection);
	console.log(display);
});
