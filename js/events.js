console.log('this is separate JS file');

/* ----------------------option 1----------onclick---------- */

/* directly set on the HTML element

<button onclick="console.log(65)">Another button</button>

*/

/* ----------------option 2 we will use this important !!!----------onclick----- */

/* add onclick function on the html element

<button onclick="makeRed()">Make Red</button>

*/
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

/* --------------------option 3----------onclick---------- */

const makeBlueButton = document.getElementById('make-blue');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

/* --------------------option 3 another almost same----------onclick---------- */

const purpleButton = document.getElementById('make-purple');
// console.log(purpleButton);
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

/* --------------------option 3 another almost same----------onclick---------- */
/* 

const purpleButton = document.getElementById('make-purple');
// console.log(purpleButton);
purpleButton.onclick = function() {
    document.body.style.backgroundColor = 'purple'
}

*/

/* --------------------option 4-----addEventListener--------------- */

const pinkButton = document.getElementById('make-pink');
// console.log(pinkButton);
pinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

/* --------------------option 4 another almost same-----addEventListener--------------- */

const makeGreenButton = document.getElementById('make-green');
// console.log(makeGreenButton);
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});

/* --------------------option 4 another almost same-----addEventListener--------------- */
/* 

const makeGreenButton = document.getElementById('make-green');
// console.log(makeGreenButton);
makeGreenButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
});

*/

/* ----------------option 4 Final We will use this sometimes !!!-----addEventListener--------- */

document.getElementById('make-goldenrod').addEventListener('click', function() {
    document.body.style.backgroundColor = 'goldenrod';
});