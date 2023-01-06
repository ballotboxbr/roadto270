var allStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'ME1', 'ME2', 'NE1', 'NE2', 'NE3'];

var buttonDefaultArray = ['buttonBlank','buttonSafe','button2024','button2020','buttonCNNratings'];
var pollButtonDefaultArray = ['pollsAtSeven','pollsAtSevenThirty','pollsAtEight','pollsAtEightThirty','pollsAtNine','pollsAtTen','pollsAtEleven','pollsAtTwelve','pollsAtOne'];

function clearStates () {

var allClasses = ['redState','redProj','blueState','blueProj'];

allStates.forEach((state) => {allClasses.forEach((item) => {document.getElementById(state).classList.replace(item,'state')})});

document.documentElement.style.setProperty('--stateColor', "rgb(100,105,115)");
setTimeout(function () {document.getElementById("button2016").style.right = "9.5px"}, 500);
setTimeout(function () {document.getElementById("buttonPollsClose").style.right = "9.5px"}, 500);
document.getElementById("button2012").style.right = "-70px";

removeSelections()
centerText()
}

function emptyStates () {
setTimeout(function () {document.getElementById("button2016").style.right = "9.5px"}, 500);
document.getElementById("button2012").style.right = "-70px";

allStates.forEach((item) => {document.getElementById(item).setAttribute("class", "state")});

pollButtonDefaultArray.forEach((item) => {document.getElementById(item).style.opacity = "0"});

document.documentElement.style.setProperty('--stateColor', "rgb(100,105,115)");
document.getElementById("buttonPollsClose").style.right = "9.5px";

resetElectoralCollege ()
}


function pres2020 () {

var blueStates = ['AZ','CA','CO','CT','DC','DE','GA','HI','IL','MA','MD','ME','ME1','MI','MN','NE2','NH','NJ','NM','NV','NY','OR','PA','RI','VA','VT','WA','WI'];
var redStates = ['AK','AL','AR','FL','IA','ID','IN','KS','KY','LA','ME2','MO','MS','MT','NC','ND','NE','NE1','NE3','OH','OK','SC','SD','TN','TX','UT','WV','WY'];

blueStates.forEach((item) => {document.getElementById(item).setAttribute("class", 'blueProj')});
redStates.forEach((item) => {document.getElementById(item).setAttribute("class", 'redProj')});

document.documentElement.style.setProperty('--stateColor', 'rgb(100,105,115)');
document.getElementById("button2012").style.right = "-70px";
setTimeout(function () {document.getElementById("button2016").style.right = "9.5px"}, 500);
setTimeout(function () {document.getElementById("buttonPollsClose").style.right = "9.5px";}, 500);

centerText()
pollsAtOne()
}

function resetButton () {

allStates.forEach((item) => {document.getElementById(item).setAttribute("class", "state")});

centerText()
}

function pres2016 () {
var blueStates = ['CA','CO','CT','DC','DE','HI','IL','MA','MD','ME','ME1','MI','MN','NH','NJ','NM','NV','NY','OR','PA','RI','VA','VT','WA','WI'];
var redStates = ['AK','AL','AR','AZ','FL','GA','IA','ID','IN','KS','KY','LA','ME2','MI','MO','MS','MT','NC','ND','NE','NE1','NE2','NE3','OH','OK','PA','SC','SD','TN','TX','UT','WI','WV','WY'];

blueStates.forEach((item) => {document.getElementById(item).setAttribute("class", 'blueProj')});
redStates.forEach((item) => {document.getElementById(item).setAttribute("class", 'redProj')});

document.documentElement.style.setProperty('--stateColor', 'rgb(100,105,115)');
setTimeout(function () {document.getElementById("buttonPollsClose").style.right = "9.5px";}, 500);

centerText(); showHideMenu(); pollsAtOne();
}

function pres2012 () {
(document.getElementById("AK")).setAttribute("class", "redProj");
(document.getElementById("AL")).setAttribute("class", "redProj");
(document.getElementById("AR")).setAttribute("class", "redProj");
(document.getElementById("AZ")).setAttribute("class", "redProj");
(document.getElementById("CA")).setAttribute("class", "blueProj");
(document.getElementById("CO")).setAttribute("class", "blueProj");
(document.getElementById("CT")).setAttribute("class", "blueProj");
(document.getElementById("DC")).setAttribute("class", "blueProj");
(document.getElementById("DE")).setAttribute("class", "blueProj");
(document.getElementById("FL")).setAttribute("class", "blueProj");
(document.getElementById("GA")).setAttribute("class", "redProj");
(document.getElementById("HI")).setAttribute("class", "blueProj");
(document.getElementById("IA")).setAttribute("class", "blueProj");
(document.getElementById("ID")).setAttribute("class", "redProj");
(document.getElementById("IL")).setAttribute("class", "blueProj");
(document.getElementById("IN")).setAttribute("class", "redProj");
(document.getElementById("KS")).setAttribute("class", "redProj");
(document.getElementById("KY")).setAttribute("class", "redProj");
(document.getElementById("LA")).setAttribute("class", "redProj");
(document.getElementById("MA")).setAttribute("class", "blueProj");
(document.getElementById("MD")).setAttribute("class", "blueProj");
(document.getElementById("ME")).setAttribute("class", "blueProj");
(document.getElementById("ME1")).setAttribute("class", "blueProj");
(document.getElementById("ME2")).setAttribute("class", "blueProj");
(document.getElementById("MI")).setAttribute("class", "blueProj");
(document.getElementById("MN")).setAttribute("class", "blueProj");
(document.getElementById("MO")).setAttribute("class", "redProj");
(document.getElementById("MS")).setAttribute("class", "redProj");
(document.getElementById("MT")).setAttribute("class", "redProj");
(document.getElementById("NC")).setAttribute("class", "redProj");
(document.getElementById("ND")).setAttribute("class", "redProj");
(document.getElementById("NE")).setAttribute("class", "redProj");
(document.getElementById("NE1")).setAttribute("class", "redProj");
(document.getElementById("NE2")).setAttribute("class", "redProj");
(document.getElementById("NE3")).setAttribute("class", "redProj");
(document.getElementById("NH")).setAttribute("class", "blueProj");
(document.getElementById("NJ")).setAttribute("class", "blueProj");
(document.getElementById("NM")).setAttribute("class", "blueProj");
(document.getElementById("NV")).setAttribute("class", "blueProj");
(document.getElementById("NY")).setAttribute("class", "blueProj");
(document.getElementById("OH")).setAttribute("class", "blueProj");
(document.getElementById("OK")).setAttribute("class", "redProj");
(document.getElementById("OR")).setAttribute("class", "blueProj");
(document.getElementById("PA")).setAttribute("class", "blueProj");
(document.getElementById("RI")).setAttribute("class", "blueProj");
(document.getElementById("SC")).setAttribute("class", "redProj");
(document.getElementById("SD")).setAttribute("class", "redProj");
(document.getElementById("TN")).setAttribute("class", "redProj");
(document.getElementById("TX")).setAttribute("class", "redProj");
(document.getElementById("UT")).setAttribute("class", "redProj");
(document.getElementById("VA")).setAttribute("class", "blueProj");
(document.getElementById("VT")).setAttribute("class", "blueProj");
(document.getElementById("WA")).setAttribute("class", "blueProj");
(document.getElementById("WI")).setAttribute("class", "blueProj");
(document.getElementById("WV")).setAttribute("class", "redProj");
(document.getElementById("WY")).setAttribute("class", "redProj");

centerText(); removeSelections()
}

function darkenAll () {
allStates.forEach((a) => {document.getElementById(a).classList.replace('redState','redProj')});
allStates.forEach((a) => {document.getElementById(a).classList.replace('blueState','blueProj')});

centerText(); showHideMenu();
}

function lightenAll () {
allStates.forEach((item) => {document.getElementById(item).classList.replace('redProj','redState')});
allStates.forEach((item) => {document.getElementById(item).classList.replace('blueProj','blueState')});

centerText(); showHideMenu()
}


function allRed () {allStates.forEach((item) => {document.getElementById(item).setAttribute("class", "redProj")}); centerText(); showHideMenu ();}
function allBlue () {allStates.forEach((item) => {document.getElementById(item).setAttribute("class", "blueProj")}); centerText(); showHideMenu ();}

function cnnRating () {

var allStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'ME1', 'ME2', 'NE1', 'NE2', 'NE3'];

allStates.forEach((item) => {document.getElementById(item).setAttribute("class", "state")});

var demSafe = ['CA','CO','CT','DC','DE','HI','IL','MA','MD','ME','ME1','NJ','NM','NY','OR','RI','VA','VT','WA'];
var demLean = ['NH','NM','MN','MI'];
var gopLean = ['TX','IA','OH','FL'];
var gopSafe = ['AK','AL','AR','ID','IN','KS','KY','LA','MO','MS','MT','ND','NE','NE1','NE3','OK','SC','SD','TN','UT','WV','WY'];

demSafe.forEach((item) => {document.getElementById(item).classList.replace('state','blueProj')});
demLean.forEach((item) => {document.getElementById(item).classList.replace('state','blueState')});
gopLean.forEach((item) => {document.getElementById(item).classList.replace('state','redState')});
gopSafe.forEach((item) => {document.getElementById(item).classList.replace('state','redProj')});

data.classList.remove('grayState');
document.documentElement.style.setProperty('--stateColor', yellowStateColor);
data.classList.add('yellowState');

setTimeout(function () {showStateLabels()}, 100);

pollsAtOne();
}

function fillRed () {allStates.forEach((a) => {document.getElementById(a).classList.replace('state','redState')}); centerText(); showHideMenu();}
function fillBlue () {allStates.forEach((a) => {document.getElementById(a).classList.replace('state','blueState')}); centerText(); showHideMenu();}

var selector = ".redState, .redProj, .blueState, .blueProj";

function pollsAtSeven () {
document.getElementById("AL").setAttribute("class", "pollsClosed");
document.getElementById("AK").setAttribute("class", "pollsClosed");
document.getElementById("AZ").setAttribute("class", "pollsClosed");
document.getElementById("AR").setAttribute("class", "pollsClosed");
document.getElementById("CA").setAttribute("class", "pollsClosed");
document.getElementById("CO").setAttribute("class", "pollsClosed");
document.getElementById("CT").setAttribute("class", "pollsClosed");
document.getElementById("DE").setAttribute("class", "pollsClosed");
document.getElementById("DC").setAttribute("class", "pollsClosed");
document.getElementById("FL").setAttribute("class", "pollsClosed");
if(document.getElementById("GA").matches(selector)) {} else {document.getElementById("GA").setAttribute("class", "state")};
document.getElementById("HI").setAttribute("class", "pollsClosed");
document.getElementById("ID").setAttribute("class", "pollsClosed");
document.getElementById("IL").setAttribute("class", "pollsClosed");
if(document.getElementById("IN").matches(selector)) {} else {document.getElementById("IN").setAttribute("class", "state")};
document.getElementById("IA").setAttribute("class", "pollsClosed");
document.getElementById("KS").setAttribute("class", "pollsClosed");
if(document.getElementById("KY").matches(selector)) {} else {document.getElementById("KY").setAttribute("class", "state")};
document.getElementById("LA").setAttribute("class", "pollsClosed");
document.getElementById("ME").setAttribute("class", "pollsClosed");
document.getElementById("ME1").setAttribute("class", "pollsClosed");
document.getElementById("ME2").setAttribute("class", "pollsClosed");
document.getElementById("MD").setAttribute("class", "pollsClosed");
document.getElementById("MA").setAttribute("class", "pollsClosed");
document.getElementById("MI").setAttribute("class", "pollsClosed");
document.getElementById("MN").setAttribute("class", "pollsClosed");
document.getElementById("MS").setAttribute("class", "pollsClosed");
document.getElementById("MO").setAttribute("class", "pollsClosed");
document.getElementById("MT").setAttribute("class", "pollsClosed");
document.getElementById("NE").setAttribute("class", "pollsClosed");
document.getElementById("NE1").setAttribute("class", "pollsClosed");
document.getElementById("NE2").setAttribute("class", "pollsClosed");
document.getElementById("NE3").setAttribute("class", "pollsClosed");
document.getElementById("NV").setAttribute("class", "pollsClosed");
document.getElementById("NH").setAttribute("class", "pollsClosed");
document.getElementById("NJ").setAttribute("class", "pollsClosed");
document.getElementById("NM").setAttribute("class", "pollsClosed");
document.getElementById("NY").setAttribute("class", "pollsClosed");
document.getElementById("NC").setAttribute("class", "pollsClosed");
document.getElementById("ND").setAttribute("class", "pollsClosed");
document.getElementById("OH").setAttribute("class", "pollsClosed");
document.getElementById("OK").setAttribute("class", "pollsClosed");
document.getElementById("OR").setAttribute("class", "pollsClosed");
document.getElementById("PA").setAttribute("class", "pollsClosed");
document.getElementById("RI").setAttribute("class", "pollsClosed");
if(document.getElementById("SC").matches(selector)) {} else {document.getElementById("SC").setAttribute("class", "state")};
document.getElementById("SD").setAttribute("class", "pollsClosed");
document.getElementById("TN").setAttribute("class", "pollsClosed");
document.getElementById("TX").setAttribute("class", "pollsClosed");
document.getElementById("UT").setAttribute("class", "pollsClosed");
if(document.getElementById("VT").matches(selector)) {} else {document.getElementById("VT").setAttribute("class", "state")};
if(document.getElementById("VA").matches(selector)) {} else {document.getElementById("VA").setAttribute("class", "state")};
document.getElementById("WA").setAttribute("class", "pollsClosed");
document.getElementById("WV").setAttribute("class", "pollsClosed");
document.getElementById("WI").setAttribute("class", "pollsClosed");
document.getElementById("WY").setAttribute("class", "pollsClosed");

document.getElementById("pollsAtSeven").style.right = "100px";
document.getElementById("pollsAtSevenThirty").style.right = "160px";
document.getElementById("pollsAtEight").style.right = "220px";
document.getElementById("pollsAtEightThirty").style.right = "280px";
document.getElementById("pollsAtNine").style.right = "340px";
document.getElementById("pollsAtTen").style.right = "400px";
document.getElementById("pollsAtEleven").style.right = "460px";
document.getElementById("pollsAtTwelve").style.right = "520px";
document.getElementById("pollsAtOne").style.right = "580px";
}

function pollsAtSevenThirty () {

document.getElementById("AL").setAttribute("class", "pollsClosed");
document.getElementById("AK").setAttribute("class", "pollsClosed");
document.getElementById("AZ").setAttribute("class", "pollsClosed");
document.getElementById("AR").setAttribute("class", "pollsClosed");
document.getElementById("CA").setAttribute("class", "pollsClosed");
document.getElementById("CO").setAttribute("class", "pollsClosed");
document.getElementById("CT").setAttribute("class", "pollsClosed");
document.getElementById("DE").setAttribute("class", "pollsClosed");
document.getElementById("DC").setAttribute("class", "pollsClosed");
document.getElementById("FL").setAttribute("class", "pollsClosed");
if(document.getElementById("GA").matches(selector)) {} else {document.getElementById("GA").setAttribute("class", "state")};
document.getElementById("HI").setAttribute("class", "pollsClosed");
document.getElementById("ID").setAttribute("class", "pollsClosed");
document.getElementById("IL").setAttribute("class", "pollsClosed");
if(document.getElementById("IN").matches(selector)) {} else {document.getElementById("IN").setAttribute("class", "state")};
document.getElementById("IA").setAttribute("class", "pollsClosed");
document.getElementById("KS").setAttribute("class", "pollsClosed");
if(document.getElementById("KY").matches(selector)) {} else {document.getElementById("KY").setAttribute("class", "state")};
document.getElementById("LA").setAttribute("class", "pollsClosed");
document.getElementById("ME").setAttribute("class", "pollsClosed");
document.getElementById("ME1").setAttribute("class", "pollsClosed");
document.getElementById("ME2").setAttribute("class", "pollsClosed");
document.getElementById("MD").setAttribute("class", "pollsClosed");
document.getElementById("MA").setAttribute("class", "pollsClosed");
document.getElementById("MI").setAttribute("class", "pollsClosed");
document.getElementById("MN").setAttribute("class", "pollsClosed");
document.getElementById("MS").setAttribute("class", "pollsClosed");
document.getElementById("MO").setAttribute("class", "pollsClosed");
document.getElementById("MT").setAttribute("class", "pollsClosed");
document.getElementById("NE").setAttribute("class", "pollsClosed");
document.getElementById("NE1").setAttribute("class", "pollsClosed");
document.getElementById("NE2").setAttribute("class", "pollsClosed");
document.getElementById("NE3").setAttribute("class", "pollsClosed");
document.getElementById("NV").setAttribute("class", "pollsClosed");
document.getElementById("NH").setAttribute("class", "pollsClosed");
document.getElementById("NJ").setAttribute("class", "pollsClosed");
document.getElementById("NM").setAttribute("class", "pollsClosed");
document.getElementById("NY").setAttribute("class", "pollsClosed");
if(document.getElementById("NC").matches(selector)) {} else {document.getElementById("NC").setAttribute("class", "state")};
document.getElementById("ND").setAttribute("class", "pollsClosed");
if(document.getElementById("OH").matches(selector)) {} else {document.getElementById("OH").setAttribute("class", "state")};
document.getElementById("OK").setAttribute("class", "pollsClosed");
document.getElementById("OR").setAttribute("class", "pollsClosed");
document.getElementById("PA").setAttribute("class", "pollsClosed");
document.getElementById("RI").setAttribute("class", "pollsClosed");
if(document.getElementById("SC").matches(selector)) {} else {document.getElementById("SC").setAttribute("class", "state")};
document.getElementById("SD").setAttribute("class", "pollsClosed");
document.getElementById("TN").setAttribute("class", "pollsClosed");
document.getElementById("TX").setAttribute("class", "pollsClosed");
document.getElementById("UT").setAttribute("class", "pollsClosed");
if(document.getElementById("VT").matches(selector)) {} else {document.getElementById("VT").setAttribute("class", "state")};
if(document.getElementById("VA").matches(selector)) {} else {document.getElementById("VA").setAttribute("class", "state")};
document.getElementById("WA").setAttribute("class", "pollsClosed");
if(document.getElementById("WV").matches(selector)) {} else {document.getElementById("WV").setAttribute("class", "state")};
document.getElementById("WI").setAttribute("class", "pollsClosed");
document.getElementById("WY").setAttribute("class", "pollsClosed");

document.getElementById("pollsAtSeven").style.top = "950px";
document.getElementById("pollsAtSevenThirty").style.right = "100px";
document.getElementById("pollsAtEight").style.right = "160px";
document.getElementById("pollsAtEightThirty").style.right = "220px";
document.getElementById("pollsAtNine").style.right = "280px";
document.getElementById("pollsAtTen").style.right = "340px";
document.getElementById("pollsAtEleven").style.right = "400px";
document.getElementById("pollsAtTwelve").style.right = "460px";
document.getElementById("pollsAtOne").style.right = "520px";
}

function pollsAtEight () {
if(document.getElementById("AL").matches(selector)) {} else {document.getElementById("AL").setAttribute("class", "state")};
document.getElementById("AK").setAttribute("class", "pollsClosed");
document.getElementById("AZ").setAttribute("class", "pollsClosed");
document.getElementById("AR").setAttribute("class", "pollsClosed");
document.getElementById("CA").setAttribute("class", "pollsClosed");
document.getElementById("CO").setAttribute("class", "pollsClosed");
if(document.getElementById("CT").matches(selector)) {} else {document.getElementById("CT").setAttribute("class", "state")};
if(document.getElementById("DE").matches(selector)) {} else {document.getElementById("DE").setAttribute("class", "state")};
if(document.getElementById("DC").matches(selector)) {} else {document.getElementById("DC").setAttribute("class", "state")};
if(document.getElementById("FL").matches(selector)) {} else {document.getElementById("FL").setAttribute("class", "state")};
if(document.getElementById("GA").matches(selector)) {} else {document.getElementById("GA").setAttribute("class", "state")};
document.getElementById("HI").setAttribute("class", "pollsClosed");
document.getElementById("ID").setAttribute("class", "pollsClosed");
if(document.getElementById("IL").matches(selector)) {} else {document.getElementById("IL").setAttribute("class", "state")};
if(document.getElementById("IN").matches(selector)) {} else {document.getElementById("IN").setAttribute("class", "state")};
document.getElementById("IA").setAttribute("class", "pollsClosed");
document.getElementById("KS").setAttribute("class", "pollsClosed");
if(document.getElementById("KY").matches(selector)) {} else {document.getElementById("KY").setAttribute("class", "state")};
document.getElementById("LA").setAttribute("class", "pollsClosed");
if(document.getElementById("ME").matches(selector)) {} else {document.getElementById("ME").setAttribute("class", "state")};
if(document.getElementById("ME1").matches(selector)) {} else {document.getElementById("ME1").setAttribute("class", "state")};
if(document.getElementById("ME2").matches(selector)) {} else {document.getElementById("ME2").setAttribute("class", "state")};
if(document.getElementById("MD").matches(selector)) {} else {document.getElementById("MD").setAttribute("class", "state")};
if(document.getElementById("MA").matches(selector)) {} else {document.getElementById("MA").setAttribute("class", "state")};
document.getElementById("MI").setAttribute("class", "pollsClosed");
document.getElementById("MN").setAttribute("class", "pollsClosed");
if(document.getElementById("MS").matches(selector)) {} else {document.getElementById("MS").setAttribute("class", "state")};
if(document.getElementById("MO").matches(selector)) {} else {document.getElementById("MO").setAttribute("class", "state")};
document.getElementById("MT").setAttribute("class", "pollsClosed");
document.getElementById("NE").setAttribute("class", "pollsClosed");
document.getElementById("NE1").setAttribute("class", "pollsClosed");
document.getElementById("NE2").setAttribute("class", "pollsClosed");
document.getElementById("NE3").setAttribute("class", "pollsClosed");
document.getElementById("NV").setAttribute("class", "pollsClosed");
if(document.getElementById("NH").matches(selector)) {} else {document.getElementById("NH").setAttribute("class", "state")};
if(document.getElementById("NJ").matches(selector)) {} else {document.getElementById("NJ").setAttribute("class", "state")};
document.getElementById("NM").setAttribute("class", "pollsClosed");
document.getElementById("NY").setAttribute("class", "pollsClosed");
if(document.getElementById("NC").matches(selector)) {} else {document.getElementById("NC").setAttribute("class", "state")};
document.getElementById("ND").setAttribute("class", "pollsClosed");
if(document.getElementById("OH").matches(selector)) {} else {document.getElementById("OH").setAttribute("class", "state")};
if(document.getElementById("OK").matches(selector)) {} else {document.getElementById("OK").setAttribute("class", "state")};
document.getElementById("OR").setAttribute("class", "pollsClosed");
if(document.getElementById("PA").matches(selector)) {} else {document.getElementById("PA").setAttribute("class", "state")};
if(document.getElementById("RI").matches(selector)) {} else {document.getElementById("RI").setAttribute("class", "state")};
if(document.getElementById("SC").matches(selector)) {} else {document.getElementById("SC").setAttribute("class", "state")};
document.getElementById("SD").setAttribute("class", "pollsClosed");
if(document.getElementById("TN").matches(selector)) {} else {document.getElementById("TN").setAttribute("class", "state")};
document.getElementById("TX").setAttribute("class", "pollsClosed");
document.getElementById("UT").setAttribute("class", "pollsClosed");
if(document.getElementById("VT").matches(selector)) {} else {document.getElementById("VT").setAttribute("class", "state")};
if(document.getElementById("VA").matches(selector)) {} else {document.getElementById("VA").setAttribute("class", "state")};
document.getElementById("WA").setAttribute("class", "pollsClosed");
if(document.getElementById("WV").matches(selector)) {} else {document.getElementById("WV").setAttribute("class", "state")};
document.getElementById("WI").setAttribute("class", "pollsClosed");
document.getElementById("WY").setAttribute("class", "pollsClosed");

document.getElementById("pollsAtSeven").style.top = "950px";
document.getElementById("pollsAtSevenThirty").style.top = "950px";
document.getElementById("pollsAtEight").style.right = "100px";
document.getElementById("pollsAtEightThirty").style.right = "160px";
document.getElementById("pollsAtNine").style.right = "220px";
document.getElementById("pollsAtTen").style.right = "280px";
document.getElementById("pollsAtEleven").style.right = "340px";
document.getElementById("pollsAtTwelve").style.right = "400px";
document.getElementById("pollsAtOne").style.right = "460px";
}

function pollsAtEightThirty () {

if(document.getElementById("AL").matches(selector)) {} else {document.getElementById("AL").setAttribute("class", "state")};
document.getElementById("AK").setAttribute("class", "pollsClosed");
document.getElementById("AZ").setAttribute("class", "pollsClosed");
if(document.getElementById("AR").matches(selector)) {} else {document.getElementById("AR").setAttribute("class", "state")};
document.getElementById("CA").setAttribute("class", "pollsClosed");
document.getElementById("CO").setAttribute("class", "pollsClosed");
if(document.getElementById("CT").matches(selector)) {} else {document.getElementById("CT").setAttribute("class", "state")};
if(document.getElementById("DE").matches(selector)) {} else {document.getElementById("DE").setAttribute("class", "state")};
if(document.getElementById("DC").matches(selector)) {} else {document.getElementById("DC").setAttribute("class", "state")};
if(document.getElementById("FL").matches(selector)) {} else {document.getElementById("FL").setAttribute("class", "state")};
if(document.getElementById("GA").matches(selector)) {} else {document.getElementById("GA").setAttribute("class", "state")};
document.getElementById("HI").setAttribute("class", "pollsClosed");
document.getElementById("ID").setAttribute("class", "pollsClosed");
if(document.getElementById("IL").matches(selector)) {} else {document.getElementById("IL").setAttribute("class", "state")};
if(document.getElementById("IN").matches(selector)) {} else {document.getElementById("IN").setAttribute("class", "state")};
document.getElementById("IA").setAttribute("class", "pollsClosed");
document.getElementById("KS").setAttribute("class", "pollsClosed");
if(document.getElementById("KY").matches(selector)) {} else {document.getElementById("KY").setAttribute("class", "state")};
document.getElementById("LA").setAttribute("class", "pollsClosed");
if(document.getElementById("ME").matches(selector)) {} else {document.getElementById("ME").setAttribute("class", "state")};
if(document.getElementById("ME1").matches(selector)) {} else {document.getElementById("ME1").setAttribute("class", "state")};
if(document.getElementById("ME2").matches(selector)) {} else {document.getElementById("ME2").setAttribute("class", "state")};
if(document.getElementById("MD").matches(selector)) {} else {document.getElementById("MD").setAttribute("class", "state")};
if(document.getElementById("MA").matches(selector)) {} else {document.getElementById("MA").setAttribute("class", "state")};
document.getElementById("MI").setAttribute("class", "pollsClosed");
document.getElementById("MN").setAttribute("class", "pollsClosed");
if(document.getElementById("MS").matches(selector)) {} else {document.getElementById("MS").setAttribute("class", "state")};
if(document.getElementById("MO").matches(selector)) {} else {document.getElementById("MO").setAttribute("class", "state")};
document.getElementById("MT").setAttribute("class", "pollsClosed");
document.getElementById("NE").setAttribute("class", "pollsClosed");
document.getElementById("NE1").setAttribute("class", "pollsClosed");
document.getElementById("NE2").setAttribute("class", "pollsClosed");
document.getElementById("NE3").setAttribute("class", "pollsClosed");
document.getElementById("NV").setAttribute("class", "pollsClosed");
if(document.getElementById("NH").matches(selector)) {} else {document.getElementById("NH").setAttribute("class", "state")};
if(document.getElementById("NJ").matches(selector)) {} else {document.getElementById("NJ").setAttribute("class", "state")};
document.getElementById("NM").setAttribute("class", "pollsClosed");
document.getElementById("NY").setAttribute("class", "pollsClosed");
if(document.getElementById("NC").matches(selector)) {} else {document.getElementById("NC").setAttribute("class", "state")};
document.getElementById("ND").setAttribute("class", "pollsClosed");
if(document.getElementById("OH").matches(selector)) {} else {document.getElementById("OH").setAttribute("class", "state")};
if(document.getElementById("OK").matches(selector)) {} else {document.getElementById("OK").setAttribute("class", "state")};
document.getElementById("OR").setAttribute("class", "pollsClosed");
if(document.getElementById("PA").matches(selector)) {} else {document.getElementById("PA").setAttribute("class", "state")};
if(document.getElementById("RI").matches(selector)) {} else {document.getElementById("RI").setAttribute("class", "state")};
if(document.getElementById("SC").matches(selector)) {} else {document.getElementById("SC").setAttribute("class", "state")};
document.getElementById("SD").setAttribute("class", "pollsClosed");
if(document.getElementById("TN").matches(selector)) {} else {document.getElementById("TN").setAttribute("class", "state")};
document.getElementById("TX").setAttribute("class", "pollsClosed");
document.getElementById("UT").setAttribute("class", "pollsClosed");
if(document.getElementById("VT").matches(selector)) {} else {document.getElementById("VT").setAttribute("class", "state")};
if(document.getElementById("VA").matches(selector)) {} else {document.getElementById("VA").setAttribute("class", "state")};
document.getElementById("WA").setAttribute("class", "pollsClosed");
if(document.getElementById("WV").matches(selector)) {} else {document.getElementById("WV").setAttribute("class", "state")};
document.getElementById("WI").setAttribute("class", "pollsClosed");
document.getElementById("WY").setAttribute("class", "pollsClosed");

document.getElementById("pollsAtSeven").style.top = "950px";
document.getElementById("pollsAtSevenThirty").style.top = "950px";
document.getElementById("pollsAtEight").style.top = "950px";
document.getElementById("pollsAtEightThirty").style.right = "100px";
document.getElementById("pollsAtNine").style.right = "160px";
document.getElementById("pollsAtTen").style.right = "220px";
document.getElementById("pollsAtEleven").style.right = "280px";
document.getElementById("pollsAtTwelve").style.right = "340px";
document.getElementById("pollsAtOne").style.right = "400px";
}

function pollsAtNine () {
if(document.getElementById("AL").matches(selector)) {} else {document.getElementById("AL").setAttribute("class", "state")};
document.getElementById("AK").setAttribute("class", "pollsClosed");
if(document.getElementById("AZ").matches(selector)) {} else {document.getElementById("AZ").setAttribute("class", "state")};
if(document.getElementById("AR").matches(selector)) {} else {document.getElementById("AR").setAttribute("class", "state")};
document.getElementById("CA").setAttribute("class", "pollsClosed");
if(document.getElementById("CO").matches(selector)) {} else {document.getElementById("CO").setAttribute("class", "state")};
if(document.getElementById("CT").matches(selector)) {} else {document.getElementById("CT").setAttribute("class", "state")};
if(document.getElementById("DE").matches(selector)) {} else {document.getElementById("DE").setAttribute("class", "state")};
if(document.getElementById("DC").matches(selector)) {} else {document.getElementById("DC").setAttribute("class", "state")};
if(document.getElementById("FL").matches(selector)) {} else {document.getElementById("FL").setAttribute("class", "state")};
if(document.getElementById("GA").matches(selector)) {} else {document.getElementById("GA").setAttribute("class", "state")};
document.getElementById("HI").setAttribute("class", "pollsClosed");
document.getElementById("ID").setAttribute("class", "pollsClosed");
if(document.getElementById("IL").matches(selector)) {} else {document.getElementById("IL").setAttribute("class", "state")};
if(document.getElementById("IN").matches(selector)) {} else {document.getElementById("IN").setAttribute("class", "state")};
if(document.getElementById("IA").matches(selector)) {} else {document.getElementById("IA").setAttribute("class", "state")};
if(document.getElementById("KS").matches(selector)) {} else {document.getElementById("KS").setAttribute("class", "state")};
if(document.getElementById("KY").matches(selector)) {} else {document.getElementById("KY").setAttribute("class", "state")};
if(document.getElementById("LA").matches(selector)) {} else {document.getElementById("LA").setAttribute("class", "state")};
if(document.getElementById("ME").matches(selector)) {} else {document.getElementById("ME").setAttribute("class", "state")};
if(document.getElementById("ME1").matches(selector)) {} else {document.getElementById("ME1").setAttribute("class", "state")};
if(document.getElementById("ME2").matches(selector)) {} else {document.getElementById("ME2").setAttribute("class", "state")};
if(document.getElementById("MD").matches(selector)) {} else {document.getElementById("MD").setAttribute("class", "state")};
if(document.getElementById("MA").matches(selector)) {} else {document.getElementById("MA").setAttribute("class", "state")};
if(document.getElementById("MI").matches(selector)) {} else {document.getElementById("MI").setAttribute("class", "state")};
if(document.getElementById("MN").matches(selector)) {} else {document.getElementById("MN").setAttribute("class", "state")};
if(document.getElementById("MS").matches(selector)) {} else {document.getElementById("MS").setAttribute("class", "state")};
if(document.getElementById("MO").matches(selector)) {} else {document.getElementById("MO").setAttribute("class", "state")};
document.getElementById("MT").setAttribute("class", "pollsClosed");
if(document.getElementById("NE").matches(selector)) {} else {document.getElementById("NE").setAttribute("class", "state")};
if(document.getElementById("NE1").matches(selector)) {} else {document.getElementById("NE1").setAttribute("class", "state")};
if(document.getElementById("NE2").matches(selector)) {} else {document.getElementById("NE2").setAttribute("class", "state")};
if(document.getElementById("NE3").matches(selector)) {} else {document.getElementById("NE3").setAttribute("class", "state")};
document.getElementById("NV").setAttribute("class", "pollsClosed");
if(document.getElementById("NH").matches(selector)) {} else {document.getElementById("NH").setAttribute("class", "state")};
if(document.getElementById("NJ").matches(selector)) {} else {document.getElementById("NJ").setAttribute("class", "state")};
if(document.getElementById("NM").matches(selector)) {} else {document.getElementById("NM").setAttribute("class", "state")};
if(document.getElementById("NY").matches(selector)) {} else {document.getElementById("NY").setAttribute("class", "state")};
if(document.getElementById("NC").matches(selector)) {} else {document.getElementById("NC").setAttribute("class", "state")};
if(document.getElementById("ND").matches(selector)) {} else {document.getElementById("ND").setAttribute("class", "state")};
if(document.getElementById("OH").matches(selector)) {} else {document.getElementById("OH").setAttribute("class", "state")};
if(document.getElementById("OK").matches(selector)) {} else {document.getElementById("OK").setAttribute("class", "state")};
document.getElementById("OR").setAttribute("class", "pollsClosed");
if(document.getElementById("PA").matches(selector)) {} else {document.getElementById("PA").setAttribute("class", "state")};
if(document.getElementById("RI").matches(selector)) {} else {document.getElementById("RI").setAttribute("class", "state")};
if(document.getElementById("SC").matches(selector)) {} else {document.getElementById("SC").setAttribute("class", "state")};
if(document.getElementById("SD").matches(selector)) {} else {document.getElementById("SD").setAttribute("class", "state")};
if(document.getElementById("TN").matches(selector)) {} else {document.getElementById("TN").setAttribute("class", "state")};
if(document.getElementById("TX").matches(selector)) {} else {document.getElementById("TX").setAttribute("class", "state")};
document.getElementById("UT").setAttribute("class", "pollsClosed");
if(document.getElementById("VT").matches(selector)) {} else {document.getElementById("VT").setAttribute("class", "state")};
if(document.getElementById("VA").matches(selector)) {} else {document.getElementById("VA").setAttribute("class", "state")};
document.getElementById("WA").setAttribute("class", "pollsClosed");
if(document.getElementById("WV").matches(selector)) {} else {document.getElementById("WV").setAttribute("class", "state")};
if(document.getElementById("WI").matches(selector)) {} else {document.getElementById("WI").setAttribute("class", "state")};
if(document.getElementById("WY").matches(selector)) {} else {document.getElementById("WY").setAttribute("class", "state")};

document.getElementById("pollsAtSeven").style.top = "950px";
document.getElementById("pollsAtSevenThirty").style.top = "950px";
document.getElementById("pollsAtEight").style.top = "950px";
document.getElementById("pollsAtEightThirty").style.top = "950px";
document.getElementById("pollsAtNine").style.right = "100px";
document.getElementById("pollsAtTen").style.right = "160px";
document.getElementById("pollsAtEleven").style.right = "220px";
document.getElementById("pollsAtTwelve").style.right = "280px";
document.getElementById("pollsAtOne").style.right = "340px";
}

function pollsAtTen () {

if(document.getElementById("AL").matches(selector)) {} else {document.getElementById("AL").setAttribute("class", "state")};
document.getElementById("AK").setAttribute("class", "pollsClosed");
if(document.getElementById("AZ").matches(selector)) {} else {document.getElementById("AZ").setAttribute("class", "state")};
if(document.getElementById("AR").matches(selector)) {} else {document.getElementById("AR").setAttribute("class", "state")};
document.getElementById("CA").setAttribute("class", "pollsClosed");
if(document.getElementById("CO").matches(selector)) {} else {document.getElementById("CO").setAttribute("class", "state")};
if(document.getElementById("CT").matches(selector)) {} else {document.getElementById("CT").setAttribute("class", "state")};
if(document.getElementById("DE").matches(selector)) {} else {document.getElementById("DE").setAttribute("class", "state")};
if(document.getElementById("DC").matches(selector)) {} else {document.getElementById("DC").setAttribute("class", "state")};
if(document.getElementById("FL").matches(selector)) {} else {document.getElementById("FL").setAttribute("class", "state")};
if(document.getElementById("GA").matches(selector)) {} else {document.getElementById("GA").setAttribute("class", "state")};
document.getElementById("HI").setAttribute("class", "pollsClosed");
document.getElementById("ID").setAttribute("class", "pollsClosed");
if(document.getElementById("IL").matches(selector)) {} else {document.getElementById("IL").setAttribute("class", "state")};
if(document.getElementById("IN").matches(selector)) {} else {document.getElementById("IN").setAttribute("class", "state")};
if(document.getElementById("IA").matches(selector)) {} else {document.getElementById("IA").setAttribute("class", "state")};
if(document.getElementById("KS").matches(selector)) {} else {document.getElementById("KS").setAttribute("class", "state")};
if(document.getElementById("KY").matches(selector)) {} else {document.getElementById("KY").setAttribute("class", "state")};
if(document.getElementById("LA").matches(selector)) {} else {document.getElementById("LA").setAttribute("class", "state")};
if(document.getElementById("ME").matches(selector)) {} else {document.getElementById("ME").setAttribute("class", "state")};
if(document.getElementById("ME1").matches(selector)) {} else {document.getElementById("ME1").setAttribute("class", "state")};
if(document.getElementById("ME2").matches(selector)) {} else {document.getElementById("ME2").setAttribute("class", "state")};
if(document.getElementById("MD").matches(selector)) {} else {document.getElementById("MD").setAttribute("class", "state")};
if(document.getElementById("MA").matches(selector)) {} else {document.getElementById("MA").setAttribute("class", "state")};
if(document.getElementById("MI").matches(selector)) {} else {document.getElementById("MI").setAttribute("class", "state")};
if(document.getElementById("MN").matches(selector)) {} else {document.getElementById("MN").setAttribute("class", "state")};
if(document.getElementById("MS").matches(selector)) {} else {document.getElementById("MS").setAttribute("class", "state")};
if(document.getElementById("MO").matches(selector)) {} else {document.getElementById("MO").setAttribute("class", "state")};
if(document.getElementById("MT").matches(selector)) {} else {document.getElementById("MT").setAttribute("class", "state")};
if(document.getElementById("NE").matches(selector)) {} else {document.getElementById("NE").setAttribute("class", "state")};
if(document.getElementById("NE1").matches(selector)) {} else {document.getElementById("NE1").setAttribute("class", "state")};
if(document.getElementById("NE2").matches(selector)) {} else {document.getElementById("NE2").setAttribute("class", "state")};
if(document.getElementById("NE3").matches(selector)) {} else {document.getElementById("NE3").setAttribute("class", "state")};
if(document.getElementById("NV").matches(selector)) {} else {document.getElementById("NV").setAttribute("class", "state")};
if(document.getElementById("NH").matches(selector)) {} else {document.getElementById("NH").setAttribute("class", "state")};
if(document.getElementById("NJ").matches(selector)) {} else {document.getElementById("NJ").setAttribute("class", "state")};
if(document.getElementById("NM").matches(selector)) {} else {document.getElementById("NM").setAttribute("class", "state")};
if(document.getElementById("NY").matches(selector)) {} else {document.getElementById("NY").setAttribute("class", "state")};
if(document.getElementById("NC").matches(selector)) {} else {document.getElementById("NC").setAttribute("class", "state")};
if(document.getElementById("ND").matches(selector)) {} else {document.getElementById("ND").setAttribute("class", "state")};
if(document.getElementById("OH").matches(selector)) {} else {document.getElementById("OH").setAttribute("class", "state")};
if(document.getElementById("OK").matches(selector)) {} else {document.getElementById("OK").setAttribute("class", "state")};
document.getElementById("OR").setAttribute("class", "pollsClosed");
if(document.getElementById("PA").matches(selector)) {} else {document.getElementById("PA").setAttribute("class", "state")};
if(document.getElementById("RI").matches(selector)) {} else {document.getElementById("RI").setAttribute("class", "state")};
if(document.getElementById("SC").matches(selector)) {} else {document.getElementById("SC").setAttribute("class", "state")};
if(document.getElementById("SD").matches(selector)) {} else {document.getElementById("SD").setAttribute("class", "state")};
if(document.getElementById("TN").matches(selector)) {} else {document.getElementById("TN").setAttribute("class", "state")};
if(document.getElementById("TX").matches(selector)) {} else {document.getElementById("TX").setAttribute("class", "state")};
if(document.getElementById("UT").matches(selector)) {} else {document.getElementById("UT").setAttribute("class", "state")};
if(document.getElementById("VT").matches(selector)) {} else {document.getElementById("VT").setAttribute("class", "state")};
if(document.getElementById("VA").matches(selector)) {} else {document.getElementById("VA").setAttribute("class", "state")};
document.getElementById("WA").setAttribute("class", "pollsClosed");
if(document.getElementById("WV").matches(selector)) {} else {document.getElementById("WV").setAttribute("class", "state")};
if(document.getElementById("WI").matches(selector)) {} else {document.getElementById("WI").setAttribute("class", "state")};
if(document.getElementById("WY").matches(selector)) {} else {document.getElementById("WY").setAttribute("class", "state")};

document.getElementById("pollsAtSeven").style.top = "950px";
document.getElementById("pollsAtSevenThirty").style.top = "950px";
document.getElementById("pollsAtEight").style.top = "950px";
document.getElementById("pollsAtEightThirty").style.top = "950px";
document.getElementById("pollsAtNine").style.top = "950px";
document.getElementById("pollsAtTen").style.right = "100px";
document.getElementById("pollsAtEleven").style.right = "160px";
document.getElementById("pollsAtTwelve").style.right = "220px";
document.getElementById("pollsAtOne").style.right = "280px";
}

function pollsAtEleven () {
if(document.getElementById("AL").matches(selector)) {} else {document.getElementById("AL").setAttribute("class", "state")};
document.getElementById("AK").setAttribute("class", "pollsClosed");
if(document.getElementById("AZ").matches(selector)) {} else {document.getElementById("AZ").setAttribute("class", "state")};
if(document.getElementById("AR").matches(selector)) {} else {document.getElementById("AR").setAttribute("class", "state")};
if(document.getElementById("CA").matches(selector)) {} else {document.getElementById("CA").setAttribute("class", "state")};
if(document.getElementById("CO").matches(selector)) {} else {document.getElementById("CO").setAttribute("class", "state")};
if(document.getElementById("CT").matches(selector)) {} else {document.getElementById("CT").setAttribute("class", "state")};
if(document.getElementById("DE").matches(selector)) {} else {document.getElementById("DE").setAttribute("class", "state")};
if(document.getElementById("DC").matches(selector)) {} else {document.getElementById("DC").setAttribute("class", "state")};
if(document.getElementById("FL").matches(selector)) {} else {document.getElementById("FL").setAttribute("class", "state")};
if(document.getElementById("GA").matches(selector)) {} else {document.getElementById("GA").setAttribute("class", "state")};
document.getElementById("HI").setAttribute("class", "pollsClosed");
if(document.getElementById("ID").matches(selector)) {} else {document.getElementById("ID").setAttribute("class", "state")};
if(document.getElementById("IL").matches(selector)) {} else {document.getElementById("IL").setAttribute("class", "state")};
if(document.getElementById("IN").matches(selector)) {} else {document.getElementById("IN").setAttribute("class", "state")};
if(document.getElementById("IA").matches(selector)) {} else {document.getElementById("IA").setAttribute("class", "state")};
if(document.getElementById("KS").matches(selector)) {} else {document.getElementById("KS").setAttribute("class", "state")};
if(document.getElementById("KY").matches(selector)) {} else {document.getElementById("KY").setAttribute("class", "state")};
if(document.getElementById("LA").matches(selector)) {} else {document.getElementById("LA").setAttribute("class", "state")};
if(document.getElementById("ME").matches(selector)) {} else {document.getElementById("ME").setAttribute("class", "state")};
if(document.getElementById("ME1").matches(selector)) {} else {document.getElementById("ME1").setAttribute("class", "state")};
if(document.getElementById("ME2").matches(selector)) {} else {document.getElementById("ME2").setAttribute("class", "state")};
if(document.getElementById("MD").matches(selector)) {} else {document.getElementById("MD").setAttribute("class", "state")};
if(document.getElementById("MA").matches(selector)) {} else {document.getElementById("MA").setAttribute("class", "state")};
if(document.getElementById("MI").matches(selector)) {} else {document.getElementById("MI").setAttribute("class", "state")};
if(document.getElementById("MN").matches(selector)) {} else {document.getElementById("MN").setAttribute("class", "state")};
if(document.getElementById("MS").matches(selector)) {} else {document.getElementById("MS").setAttribute("class", "state")};
if(document.getElementById("MO").matches(selector)) {} else {document.getElementById("MO").setAttribute("class", "state")};
if(document.getElementById("MT").matches(selector)) {} else {document.getElementById("MT").setAttribute("class", "state")};
if(document.getElementById("NE").matches(selector)) {} else {document.getElementById("NE").setAttribute("class", "state")};
if(document.getElementById("NE1").matches(selector)) {} else {document.getElementById("NE1").setAttribute("class", "state")};
if(document.getElementById("NE2").matches(selector)) {} else {document.getElementById("NE2").setAttribute("class", "state")};
if(document.getElementById("NE3").matches(selector)) {} else {document.getElementById("NE3").setAttribute("class", "state")};
if(document.getElementById("NV").matches(selector)) {} else {document.getElementById("NV").setAttribute("class", "state")};
if(document.getElementById("NH").matches(selector)) {} else {document.getElementById("NH").setAttribute("class", "state")};
if(document.getElementById("NJ").matches(selector)) {} else {document.getElementById("NJ").setAttribute("class", "state")};
if(document.getElementById("NM").matches(selector)) {} else {document.getElementById("NM").setAttribute("class", "state")};
if(document.getElementById("NY").matches(selector)) {} else {document.getElementById("NY").setAttribute("class", "state")};
if(document.getElementById("NC").matches(selector)) {} else {document.getElementById("NC").setAttribute("class", "state")};
if(document.getElementById("ND").matches(selector)) {} else {document.getElementById("ND").setAttribute("class", "state")};
if(document.getElementById("OH").matches(selector)) {} else {document.getElementById("OH").setAttribute("class", "state")};
if(document.getElementById("OK").matches(selector)) {} else {document.getElementById("OK").setAttribute("class", "state")};
if(document.getElementById("OR").matches(selector)) {} else {document.getElementById("OR").setAttribute("class", "state")};
if(document.getElementById("PA").matches(selector)) {} else {document.getElementById("PA").setAttribute("class", "state")};
if(document.getElementById("RI").matches(selector)) {} else {document.getElementById("RI").setAttribute("class", "state")};
if(document.getElementById("SC").matches(selector)) {} else {document.getElementById("SC").setAttribute("class", "state")};
if(document.getElementById("SD").matches(selector)) {} else {document.getElementById("SD").setAttribute("class", "state")};
if(document.getElementById("TN").matches(selector)) {} else {document.getElementById("TN").setAttribute("class", "state")};
if(document.getElementById("TX").matches(selector)) {} else {document.getElementById("TX").setAttribute("class", "state")};
if(document.getElementById("UT").matches(selector)) {} else {document.getElementById("UT").setAttribute("class", "state")};
if(document.getElementById("VT").matches(selector)) {} else {document.getElementById("VT").setAttribute("class", "state")};
if(document.getElementById("VA").matches(selector)) {} else {document.getElementById("VA").setAttribute("class", "state")};
if(document.getElementById("WA").matches(selector)) {} else {document.getElementById("WA").setAttribute("class", "state")};
if(document.getElementById("WV").matches(selector)) {} else {document.getElementById("WV").setAttribute("class", "state")};
if(document.getElementById("WI").matches(selector)) {} else {document.getElementById("WI").setAttribute("class", "state")};
if(document.getElementById("WY").matches(selector)) {} else {document.getElementById("WY").setAttribute("class", "state")};

document.getElementById("pollsAtSeven").style.top = "950px";
document.getElementById("pollsAtSevenThirty").style.top = "950px";
document.getElementById("pollsAtEight").style.top = "950px";
document.getElementById("pollsAtEightThirty").style.top = "950px";
document.getElementById("pollsAtNine").style.top = "950px";
document.getElementById("pollsAtTen").style.top = "950px";
document.getElementById("pollsAtEleven").style.right = "100px";
document.getElementById("pollsAtTwelve").style.right = "160px";
document.getElementById("pollsAtOne").style.right = "220px";
}

function pollsAtTwelve () {
if(document.getElementById("AL").matches(selector)) {} else {document.getElementById("AL").setAttribute("class", "state")};
document.getElementById("AK").setAttribute("class", "pollsClosed");
if(document.getElementById("AZ").matches(selector)) {} else {document.getElementById("AZ").setAttribute("class", "state")};
if(document.getElementById("AR").matches(selector)) {} else {document.getElementById("AR").setAttribute("class", "state")};
if(document.getElementById("CA").matches(selector)) {} else {document.getElementById("CA").setAttribute("class", "state")};
if(document.getElementById("CO").matches(selector)) {} else {document.getElementById("CO").setAttribute("class", "state")};
if(document.getElementById("CT").matches(selector)) {} else {document.getElementById("CT").setAttribute("class", "state")};
if(document.getElementById("DE").matches(selector)) {} else {document.getElementById("DE").setAttribute("class", "state")};
if(document.getElementById("DC").matches(selector)) {} else {document.getElementById("DC").setAttribute("class", "state")};
if(document.getElementById("FL").matches(selector)) {} else {document.getElementById("FL").setAttribute("class", "state")};
if(document.getElementById("GA").matches(selector)) {} else {document.getElementById("GA").setAttribute("class", "state")};
if(document.getElementById("HI").matches(selector)) {} else {document.getElementById("HI").setAttribute("class", "state")};
if(document.getElementById("ID").matches(selector)) {} else {document.getElementById("ID").setAttribute("class", "state")};
if(document.getElementById("IL").matches(selector)) {} else {document.getElementById("IL").setAttribute("class", "state")};
if(document.getElementById("IN").matches(selector)) {} else {document.getElementById("IN").setAttribute("class", "state")};
if(document.getElementById("IA").matches(selector)) {} else {document.getElementById("IA").setAttribute("class", "state")};
if(document.getElementById("KS").matches(selector)) {} else {document.getElementById("KS").setAttribute("class", "state")};
if(document.getElementById("KY").matches(selector)) {} else {document.getElementById("KY").setAttribute("class", "state")};
if(document.getElementById("LA").matches(selector)) {} else {document.getElementById("LA").setAttribute("class", "state")};
if(document.getElementById("ME").matches(selector)) {} else {document.getElementById("ME").setAttribute("class", "state")};
if(document.getElementById("ME1").matches(selector)) {} else {document.getElementById("ME1").setAttribute("class", "state")};
if(document.getElementById("ME2").matches(selector)) {} else {document.getElementById("ME2").setAttribute("class", "state")};
if(document.getElementById("MD").matches(selector)) {} else {document.getElementById("MD").setAttribute("class", "state")};
if(document.getElementById("MA").matches(selector)) {} else {document.getElementById("MA").setAttribute("class", "state")};
if(document.getElementById("MI").matches(selector)) {} else {document.getElementById("MI").setAttribute("class", "state")};
if(document.getElementById("MN").matches(selector)) {} else {document.getElementById("MN").setAttribute("class", "state")};
if(document.getElementById("MS").matches(selector)) {} else {document.getElementById("MS").setAttribute("class", "state")};
if(document.getElementById("MO").matches(selector)) {} else {document.getElementById("MO").setAttribute("class", "state")};
if(document.getElementById("MT").matches(selector)) {} else {document.getElementById("MT").setAttribute("class", "state")};
if(document.getElementById("NE").matches(selector)) {} else {document.getElementById("NE").setAttribute("class", "state")};
if(document.getElementById("NE1").matches(selector)) {} else {document.getElementById("NE1").setAttribute("class", "state")};
if(document.getElementById("NE2").matches(selector)) {} else {document.getElementById("NE2").setAttribute("class", "state")};
if(document.getElementById("NE3").matches(selector)) {} else {document.getElementById("NE3").setAttribute("class", "state")};
if(document.getElementById("NV").matches(selector)) {} else {document.getElementById("NV").setAttribute("class", "state")};
if(document.getElementById("NH").matches(selector)) {} else {document.getElementById("NH").setAttribute("class", "state")};
if(document.getElementById("NJ").matches(selector)) {} else {document.getElementById("NJ").setAttribute("class", "state")};
if(document.getElementById("NM").matches(selector)) {} else {document.getElementById("NM").setAttribute("class", "state")};
if(document.getElementById("NY").matches(selector)) {} else {document.getElementById("NY").setAttribute("class", "state")};
if(document.getElementById("NC").matches(selector)) {} else {document.getElementById("NC").setAttribute("class", "state")};
if(document.getElementById("ND").matches(selector)) {} else {document.getElementById("ND").setAttribute("class", "state")};
if(document.getElementById("OH").matches(selector)) {} else {document.getElementById("OH").setAttribute("class", "state")};
if(document.getElementById("OK").matches(selector)) {} else {document.getElementById("OK").setAttribute("class", "state")};
if(document.getElementById("OR").matches(selector)) {} else {document.getElementById("OR").setAttribute("class", "state")};
if(document.getElementById("PA").matches(selector)) {} else {document.getElementById("PA").setAttribute("class", "state")};
if(document.getElementById("RI").matches(selector)) {} else {document.getElementById("RI").setAttribute("class", "state")};
if(document.getElementById("SC").matches(selector)) {} else {document.getElementById("SC").setAttribute("class", "state")};
if(document.getElementById("SD").matches(selector)) {} else {document.getElementById("SD").setAttribute("class", "state")};
if(document.getElementById("TN").matches(selector)) {} else {document.getElementById("TN").setAttribute("class", "state")};
if(document.getElementById("TX").matches(selector)) {} else {document.getElementById("TX").setAttribute("class", "state")};
if(document.getElementById("UT").matches(selector)) {} else {document.getElementById("UT").setAttribute("class", "state")};
if(document.getElementById("VT").matches(selector)) {} else {document.getElementById("VT").setAttribute("class", "state")};
if(document.getElementById("VA").matches(selector)) {} else {document.getElementById("VA").setAttribute("class", "state")};
if(document.getElementById("WA").matches(selector)) {} else {document.getElementById("WA").setAttribute("class", "state")};
if(document.getElementById("WV").matches(selector)) {} else {document.getElementById("WV").setAttribute("class", "state")};
if(document.getElementById("WI").matches(selector)) {} else {document.getElementById("WI").setAttribute("class", "state")};
if(document.getElementById("WY").matches(selector)) {} else {document.getElementById("WY").setAttribute("class", "state")};

document.getElementById("pollsAtSeven").style.top = "950px";
document.getElementById("pollsAtSevenThirty").style.top = "950px";
document.getElementById("pollsAtEight").style.top = "950px";
document.getElementById("pollsAtEightThirty").style.top = "950px";
document.getElementById("pollsAtNine").style.top = "950px";
document.getElementById("pollsAtTen").style.top = "950px";
document.getElementById("pollsAtEleven").style.top = "950px";
document.getElementById("pollsAtTwelve").style.right = "100px";
document.getElementById("pollsAtOne").style.right = "160px";
}

function pollsAtOne () {

var pollButtons = ['pollsAtSeven','pollsAtSevenThirty','pollsAtEight','pollsAtEightThirty','pollsAtNine','pollsAtTen',
'pollsAtEleven','pollsAtTwelve','pollsAtOne'];

allStates.forEach((item) => {if(document.getElementById(item).matches(selector)) {} else {document.getElementById(item).setAttribute("class", "state")}});

pollButtons.forEach((item) => {document.getElementById(item).style.top = "995px"});

setTimeout(function () {pollButtons.forEach((item) => {document.getElementById(item).style.opacity = "1"})}, 100);

setTimeout(function () {
document.getElementById("pollsAtSeven").style.right = "100px";
document.getElementById("pollsAtSevenThirty").style.right = "160px";
document.getElementById("pollsAtEight").style.right = "220px";
document.getElementById("pollsAtEightThirty").style.right = "280px";
document.getElementById("pollsAtNine").style.right = "340px";
document.getElementById("pollsAtTen").style.right = "400px";
document.getElementById("pollsAtEleven").style.right = "460px";
document.getElementById("pollsAtTwelve").style.right = "520px";
document.getElementById("pollsAtOne").style.right = "580px";
}, 300); centerText ()
}

function closePolls () {
setTimeout(function () {(document.getElementById("pollsAtSeven")).style.top = "895px"}, 100);
setTimeout(function () {(document.getElementById("pollsAtSevenThirty")).style.top = "895px"}, 200);
setTimeout(function () {(document.getElementById("pollsAtEight")).style.top = "895px"}, 300);
setTimeout(function () {(document.getElementById("pollsAtEightThirty")).style.top = "895px"}, 400);
setTimeout(function () {(document.getElementById("pollsAtNine")).style.top = "895px"}, 500);
setTimeout(function () {(document.getElementById("pollsAtTen")).style.top = "895px"}, 600);
setTimeout(function () {(document.getElementById("pollsAtEleven")).style.top = "895px"}, 700);
setTimeout(function () {(document.getElementById("pollsAtTwelve")).style.top = "895px"}, 800);
setTimeout(function () {(document.getElementById("pollsAtOne")).style.top = "895px"}, 900);

document.getElementById("pollsAtSeven").style.right = "100px";
document.getElementById("pollsAtSevenThirty").style.right = "160px";
document.getElementById("pollsAtEight").style.right = "220px";
document.getElementById("pollsAtEightThirty").style.right = "280px";
document.getElementById("pollsAtNine").style.right = "340px";
document.getElementById("pollsAtTen").style.right = "400px";
document.getElementById("pollsAtEleven").style.right = "460px";
document.getElementById("pollsAtTwelve").style.right = "520px";
document.getElementById("pollsAtOne").style.right = "580px";

document.getElementById("pollsAtSeven").style.opacity = 1;
document.getElementById("pollsAtSevenThirty").style.opacity = 1;
document.getElementById("pollsAtEight").style.opacity = 1;
document.getElementById("pollsAtEightThirty").style.opacity = 1;
document.getElementById("pollsAtNine").style.opacity = 1;
document.getElementById("pollsAtTen").style.opacity = 1;
document.getElementById("pollsAtEleven").style.opacity = 1;
document.getElementById("pollsAtTwelve").style.opacity = 1;
document.getElementById("pollsAtOne").style.opacity = 1;

centerText(); showHideMenu();
}