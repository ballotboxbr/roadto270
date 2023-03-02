var allStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'ME1', 'ME2', 'NE1', 'NE2', 'NE3'];

var demStates = ['CA','CO','CT','DC','DE','HI','IL','MA','MD','ME','ME1','NJ','NM','NY','OR','RI','VA','VT','WA'];
var gopStates = ['AK','AL','AR','ID','IN','KS','KY','LA','MO','MS','MT','ND','NE','NE1','NE3','OK','SC','SD','TN','UT','WV','WY'];

function safeStates () {

allStates.forEach((item) => {document.getElementById(item).setAttribute("class", "state")});
demStates.forEach((item) => {document.getElementById(item).classList.replace('state','blueProj')});
gopStates.forEach((item) => {document.getElementById(item).classList.replace('state','redProj')});

setTimeout(function () {document.getElementById("button2016").style.right = "1vw"}, 500);
document.getElementById("button2012").style.right = "-70px";
document.documentElement.style.setProperty('--stateColor', "rgb(100,105,115)");

centerText()
resetElectoralCollege ()
}

function safeStatesFill () {

setTimeout(function () {document.getElementById("button2016").style.right = "9.5px"}, 500);
document.getElementById("button2012").style.right = "-70px";

var totalProjected = document.getElementsByClassName("blueProj").length + document.getElementsByClassName("redProj").length;

if(totalProjected <= 0){
demStates.forEach((item) => {document.getElementById(item).classList.replace('state','blueProj')});
gopStates.forEach((item) => {document.getElementById(item).classList.replace('state','redProj')});}

if(totalProjected > 0){
demStates.forEach((item) => {document.getElementById(item).classList.replace('state','blueState')});
gopStates.forEach((item) => {document.getElementById(item).classList.replace('state','redState')});}

centerText()
}