var pollsTime = 7.5;
function pres2024 () {

// var demWins = 'VT,NJ,MA,MD,DE,DC,NY,CT,NH,CO,NM,IL,CA,OR,WA,HI,RI,NE2,ME1,ME,MN,WI,MI,VA';
// var gopWins = 'KY,IN,OK,TN,ND,SD,UT,LA,MO,AR,AL,SC,WV,KS,NE,NE1,NE3,WY,MT,ID,TX,FL,IA,OH,MS';
var gopWins = 'IN,KY,OK,TN,WV,MS,AL,MO,SC';
var demWins = 'VT,NJ,MA,MD,DE,DC,VA,CT,ME,ME1,RI,IL';
// SEPARATE PROJECTED STATES WITH COMMAS, NO SPACES (IF BLANK, IT WILL NOT WORK)

var allStates = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'ME1', 'ME2', 'NE1', 'NE2', 'NE3'];

if(pollsTime > 0){
	allStates.forEach((item) => {document.getElementById(item).setAttribute("class", "state")}); 
	(demWins.split(',')).forEach((item) => {document.getElementById(item).classList.replace('state','blueProj')});
	(gopWins.split(',')).forEach((item) => {document.getElementById(item).classList.replace('state','redProj')});
} else {
	allStates.forEach((item) => {document.getElementById(item).classList.replace('blueState','state')}); 
	allStates.forEach((item) => {document.getElementById(item).classList.replace('redState','state')}); 
}

showStateLabels();
setPolls();
centerText();

}

function setPolls () {
if (pollsTime == 7) {pollsAtSeven()};
if (pollsTime == 7.5) {pollsAtSevenThirty()}
if (pollsTime == 8) {pollsAtEight()}
if (pollsTime == 8.5) {pollsAtEightThirty()}
if (pollsTime == 9) {pollsAtNine()}
if (pollsTime == 10) {pollsAtTen()}
if (pollsTime == 11) {pollsAtEleven()}
if (pollsTime == 12) {pollsAtTwelve()}
if (pollsTime >= 13) {pollsAtOne()};

}