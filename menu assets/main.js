const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
// const book = document.querySelector("#book");

// For Desktop:
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");

const papers = [paper1, paper2, paper3, paper4 , paper5 , paper6 , paper7]; 

const ms = 150; // millisecond to flip a page.


// set z-index for all the pages:
for (let index = 0; index < papers.length; index++) {
	papers[index].style.zIndex = papers.length - index - 2;
}

// Functions

// Event Listener for desktop:
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

prevBtn.style.visibility = "hidden"; // hide for the first time.

// Business Logic
let currentLocation = 1;
let numOfPapers = 7; // change it everytime.
let maxLocation = numOfPapers + 1;

function openBook() {
	book.style.transform = "translateX(50%)";
	prevBtn.style.transform = "translateX(-180px)";
	nextBtn.style.transform = "translateX(180px)";
}


function closeBook(isAtBeginning) {
	if (isAtBeginning) {
		book.style.transform = "translateX(0%)";
		prevBtn.style.visibility = "hidden"; // hide when begining
	}
	else {
		book.style.transform = "translateX(100%)";
		nextBtn.style.visibility = "hidden"; // hide when reaches to the end.
	}

	prevBtn.style.transform = "translateX(0px)";
	nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
	prevBtn.style.visibility = "visible"; // display when passed the first page.
	if (currentLocation < maxLocation) {
		
		papers.forEach((paper, index) => {
			if (currentLocation === index + 1) {
				paper.classList.add("flipped");
				openBook();
				setTimeout(() => {
					paper.style.zIndex = 1;
				}, ms);
			}
			if (currentLocation === papers.length) {
				closeBook(false);
			}
		});
		currentLocation++;
	}
}

function goPrevPage() {
	nextBtn.style.visibility = "visible"; // make the button visible when the book is not on the last page.
	papeers = [paper1 , paper2 , paper3 , paper4]
	if (currentLocation > 1) {
		switch (currentLocation) {
			case 2:
				closeBook(true);
				paper1.classList.remove("flipped");
				paper1.style.zIndex = 5;
				break;
			case 3:
				paper2.classList.remove("flipped");
				paper2.style.zIndex = 4;
				break;
			case 4:
				paper3.classList.remove("flipped");
				setTimeout((c) => {
					paper3.style.zIndex = 3;
				}, ms);
				break;
			case 5:
				paper4.classList.remove("flipped");
				setTimeout((c) => {
					paper4.style.zIndex = 2;
				}, ms);
				break;
			case 6:
				paper5.classList.remove("flipped");
				setTimeout((c) => {
					paper5.style.zIndex = 1;
				}, ms);
				break;
			case 7:
				paper6.classList.remove("flipped");
				setTimeout((c) => {
					paper6.style.zIndex = 0;
				}, ms);
				break;
			case 8:
				openBook(); // for the last item only.
				paper7.classList.remove("flipped");
				setTimeout((c) => {
					paper7.style.zIndex = -1;
				}, ms);
				break;
			default:
				console.log(currentLocation)
				throw new Error("unkown state");
		}
		currentLocation--;
	}
}