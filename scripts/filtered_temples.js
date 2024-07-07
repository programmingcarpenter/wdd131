// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const temples = [
	{ // 1
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{ // 2
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{ // 3
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{ // 4
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{ // 5
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{ // 6
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{ // 7
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{ // 8
	  templeName: "Salt Lake City Utah",
	  location: "Salt Lake City, Utah, United States",
	  dedicated: "1893, April, 6",
	  area: 253000,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
	},
	{ // 9
	  templeName: "Gilbert Arizona",
	  location: "Gilbert, Arizona, United States",
	  dedicated: "2014, March, 2",
	  area: 85000,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/gilbert-arizona/400x250/gilbert-arizona-mormon-temple-1172202-wallpaper.jpg"
	},
	{ // 10
	  templeName: "Mesa Arizona",
	  location: "Mesa, Arizona, United States",
	  dedicated: "1927, October, 23",
	  area: 113916,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_main.jpeg"
	},
];

function CreateTempleCards(templeArray) {

	document.querySelector("main").innerHTML = '';

    return templeArray.map(function(Temple) {
	const templeCard = document.createElement("div");

	const templeHeader = document.createElement("h3");
	templeHeader.innerText = Temple.templeName;

	const templeLocation = document.createElement("p");
	templeLocation.innerText = "Location: " + Temple.location;

	const templeDedicated = document.createElement("p");
	templeDedicated.innerText = "Dedicated: " + Temple.dedicated;

	const templeArea = document.createElement("p");
	templeArea.innerText = "Area: " + Temple.area;
	
	const img = new Image();
	img.src = Temple.imageUrl;
	img.loading = "lazy";
	img.alt = `${Temple.templeName} temple`;
	img.width = 400;
	img.height = 250;



	templeCard.appendChild(templeHeader);
	templeCard.appendChild(templeLocation);
	templeCard.appendChild(templeDedicated);
	templeCard.appendChild(templeArea);
	templeCard.appendChild(img);

	document.querySelector("main").appendChild(templeCard);
});}

CreateTempleCards(temples);

// Old Filter
function old_filter(Temple) {
	const date = new Date(Temple.dedicated);
	return date.getFullYear() < 1900;
}
function oldHandler() {
	const older = temples.filter(old_filter);
	CreateTempleCards(older);
};
document.getElementById("old").addEventListener("click", oldHandler)

// New Filter
function new_filter(Temple) {
	const date = new Date(Temple.dedicated);
	return date.getFullYear() > 2000;
}
function newHandler() {
	const newer = temples.filter(new_filter);
	CreateTempleCards(newer);
};
document.getElementById("new").addEventListener("click", newHandler)

// Large Filter
function larger_filter(Temple) {
	return Temple.area > 90000;
}
function largeHandler() {
	const larger = temples.filter(larger_filter);
	CreateTempleCards(larger);
};
document.getElementById("large").addEventListener("click", largeHandler)

// Small Filter
function smaller_filter(Temple) {
	return Temple.area < 10000;
}
function smallHandler() {
	const smaller = temples.filter(smaller_filter);
	CreateTempleCards(smaller);
};
document.getElementById("small").addEventListener("click", smallHandler)