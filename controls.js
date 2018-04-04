// Variables
var colorInput = document.getElementById('color-input');
var preview = document.getElementById('preview');
var rangeButton = document.getElementById('range-button');
var numberButton = document.getElementById('number-button');
var inputs = document.querySelectorAll('.inputs');

var hairInput = document.getElementById('first-input');
var eyesInput = document.getElementById('second-input');
var noseInput = document.getElementById('third-input');
var mouthInput = document.getElementById('fourth-input');

var plus = document.getElementById('plus-button');
var displayDiv = document.getElementById('display');

var rowDiv = document.getElementById('row-div');

// Preview img
var hair = document.getElementById('hair');
var eyes = document.getElementById('eyes');
var nose = document.getElementById('nose');
var mouth = document.getElementById('mouth');

// Simple JS
colorInput.addEventListener('change', function(ev) {
	preview.style.backgroundColor = colorInput.value;
});

// 5B
function changeType(type) {
	inputs.forEach(function(element) {
  	element.type = type;
	});
}

rangeButton.addEventListener('click', function() {
	changeType('range');
});

numberButton.addEventListener('click', function() {
	changeType('number');
});

//--------------------------------------

hairInput.addEventListener('change', function() {
	hair.style.width = hairInput.value + '%';
});

eyesInput.addEventListener('change', function() {
	eyes.style.width = eyesInput.value + '%';
});

noseInput.addEventListener('change', function() {
	nose.style.width = noseInput.value + '%';
});

mouthInput.addEventListener('change', function() {
	mouth.style.width = mouthInput.value + '%';
});

// Intermediate JS

hair.addEventListener('click', function() {
	if (hair.src.match('./img/hair1.png')) {
		hair.src = './img/hair2.png';
	}
	else if (hair.src.match('./img/hair2.png')) {
		hair.src = './img/hair3.png';
	}
	else {
		hair.src = './img/hair1.png';
	}
});

eyes.addEventListener('click', function() {
	if (eyes.src.match('./img/eyes1.png')) {
		eyes.src = './img/eyes2.png';
	}
	else if (eyes.src.match('./img/eyes2.png')) {
		eyes.src = './img/eyes3.png';
	}
	else {
		eyes.src = './img/eyes1.png';
	}
});

nose.addEventListener('click', function() {
	if (nose.src.match('./img/nose1.png')) {
		nose.src = './img/nose2.png';
	}
	else if (nose.src.match('./img/nose2.png')) {
		nose.src = './img/nose3.png';
	}
	else {
		nose.src = './img/nose1.png';
	}
});

mouth.addEventListener('click', function() {
	if (mouth.src.match('./img/mouth1.png')) {
		mouth.src = './img/mouth2.png';
	}
	else if (mouth.src.match('./img/mouth2.png')) {
		mouth.src = './img/mouth3.png';
	}
	else {
		mouth.src = './img/mouth1.png';
	}
});

// Creating Elements

function createFace() {
	// create elements
	var newPrew = document.createElement('div');
	var newHair = document.createElement('img');
	var newEyes = document.createElement('img');
	var newNose = document.createElement('img');
	var newMouth = document.createElement('img');
	
	// classes
	newPrew.classList = 'display-element col-xl-12 col-lg-8 col-md-6 col-sm-4';
	newHair.classList = 'new-items';
	newEyes.classList = 'new-items';
	newNose.classList = 'new-items';
	newMouth.classList = 'new-items';
	
	// src
	newHair.src = hair.src;
	newEyes.src = eyes.src;
	newNose.src = nose.src;
	newMouth.src = mouth.src;
	
	// width
	newHair.style.width = hair.style.width;
	newEyes.style.width = eyes.style.width;
	newNose.style.width = nose.style.width;
	newMouth.style.width = mouth.style.width;
	
	// top
	newHair.style.top = hair.style.top;
	newEyes.style.top = eyes.style.top;
	newNose.style.top = nose.style.top;
	newMouth.style.top = mouth.style.top;
	
	// bgColor
	newPrew.style.backgroundColor = colorInput.value;
	
	// append
	newPrew.appendChild(newHair);
	newPrew.appendChild(newEyes);
	newPrew.appendChild(newNose);
	newPrew.appendChild(newMouth);
	displayDiv.appendChild(newPrew);
};

plus.addEventListener('click', function() {
	createFace();
});

// Random
var random = document.getElementById('random-button');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function random_bg_color() {
	var hex = Math.floor(Math.random() * 0xFFFFFF);
  bgColor = "#" + ("000000" + hex.toString(16)).substr(-6);
 	return bgColor;
};

function randomFace() {
	randomNum1 = getRandomInt(3) + 1;
	randomNum2 = getRandomInt(3) + 1;
	randomNum3 = getRandomInt(3) + 1;
	randomNum4 = getRandomInt(3) + 1;
	
	hair.src = './img/hair' + randomNum1 + '.png';
	eyes.src = './img/eyes' + randomNum2 + '.png';
	nose.src = './img/nose' + randomNum3 + '.png';
	mouth.src = './img/mouth' + randomNum4 + '.png';
	randomBgColor = random_bg_color();
	preview.style.backgroundColor = randomBgColor;
	
	randomWidthH = getRandomInt(71);
	randomWidthE = getRandomInt(41);
	randomWidthN = getRandomInt(31);
	randomWidthM = getRandomInt(36);
	
	hair.style.width = randomWidthH + '%';
	eyes.style.width = randomWidthE + '%';
	nose.style.width = randomWidthN + '%';
	mouth.style.width = randomWidthM + '%';
	
	hairInput.value = randomWidthH;
	eyesInput.value = randomWidthE;
	noseInput.value = randomWidthN;
	mouthInput.value = randomWidthM;
	colorInput.value = randomBgColor;
};

random.addEventListener('click', function() {
	randomFace();
});

// 6A Interval 

var createButton = document.getElementById('create-button');
var stopcreateButton = document.getElementById('stopcreate-button');
var createInterval = null;
var randomInterval = null;

createButton.addEventListener('click',function() {
	randomInterval = setInterval(randomFace, 500);
	createInterval = setInterval(createFace, 500);
});
															
stopcreateButton.addEventListener('click', function() {
	clearInterval(randomInterval);
	clearInterval(createInterval);
});

// Delete avatar on click

displayDiv.addEventListener('click', function(ev) {
	if (ev.target.className.match('display-element')) {
		ev.target.remove();
	}
	if (ev.target.className.match('new-items')) {
		ev.target.parentElement.remove();
	}
});
