//SETUP
var blueCandidateSurname = "BIDEN"
var redCandidateSurname = "";

var grayStateColor = "rgb(100,105,115)";
var yellowStateColor = "rgb(247,187,5)";

var redProjectionColor = "rgb(230,30,40)";
var redStateColor = "rgb(230,125,135)";
var blueProjectionColor = "rgb(20,140,230)";
var blueStateColor = "rgb(115,165,230)";
var pollsClosedColor = "rgb(35,45,60)";
var tossUpColor = "rgb(254,203,9)";

document.documentElement.style.setProperty('--stateColor', grayStateColor);
document.documentElement.style.setProperty('--grayStateColor', grayStateColor);
document.documentElement.style.setProperty('--yellowStateColor', yellowStateColor);

document.documentElement.style.setProperty('--redProjectionColor', redProjectionColor);
document.documentElement.style.setProperty('--redStateColor', redStateColor);
document.documentElement.style.setProperty('--blueProjectionColor', blueProjectionColor);
document.documentElement.style.setProperty('--blueStateColor', blueStateColor);
document.documentElement.style.setProperty('--pollsClosedColor', pollsClosedColor);
document.documentElement.style.setProperty('--tossUpColor', tossUpColor);

var blueWinText = "";
var redWinText = "";

document.getElementById('blueSurname').innerHTML = blueCandidateSurname;
document.getElementById('redSurname').innerHTML = redCandidateSurname;

if(blueCandidateSurname){} else {document.getElementById('blueSurname').innerHTML = "DEM"};
if(redCandidateSurname){} else {document.getElementById('redSurname').innerHTML = "GOP"};

if(blueWinText){} else {var blueWinText = blueCandidateSurname};
if(redWinText){} else {var redWinText = redCandidateSurname};

if(blueCandidateSurname && blueWinText){} else {var blueWinText = "DEMOCRAT"};
if(redCandidateSurname && redWinText){} else {var redWinText = "REPUBLICAN"};

var evTen = [{state: "AL", votes: 9},{state: "AK", votes: 3}, {state: "AZ", votes: 11},{state: "AR", votes: 6},{state: "CA", votes: 55},{state: "CO", votes: 9},{state: "CT", votes: 7},{state: "DC", votes: 3},{state: "DE", votes: 3},{state: "FL", votes: 29},{state: "GA", votes: 16},{state: "HI", votes: 4},{state: "ID", votes: 4},{state: "IL", votes: 20},{state: "IN", votes: 11},{state: "IA", votes: 6},{state: "KS", votes: 6},{state: "KY", votes: 8},{state: "LA", votes: 8},{state: "ME", votes: 2},{state: "MD", votes: 10},{state: "MA", votes: 11},{state: "MI", votes: 16},{state: "MN", votes: 10},{state: "MS", votes: 6},{state: "MO", votes: 10},{state: "MT", votes: 3},{state: "NE", votes: 2}, {state: "NV", votes: 6},{state: "NH", votes: 4},{state: "NJ", votes: 14},{state: "NM", votes: 5},{state: "NY", votes: 29},{state: "NC", votes: 15},{state: "ND", votes: 3}, {state: "OH", votes: 18},{state: "OK", votes: 7},{state: "OR", votes: 7}, {state: "PA", votes: 20},{state: "RI", votes: 4},{state: "SC", votes: 9}, {state: "SD", votes: 3},{state: "TN", votes: 11},{state: "TX", votes: 38}, {state: "UT", votes: 6},{state: "VT", votes: 3},{state: "VA", votes: 13}, {state: "WA", votes: 12},{state: "WV", votes: 5},{state: "WI", votes: 10}, {state: "WY", votes: 3},{state: "ME1", votes: 1},{state: "ME2", votes: 1},{state: "NE1", votes: 1},{state: "NE2", votes: 1}, {state: "NE3", votes: 1}]; 

var evTwenty = [{state: "AL", votes: 9},{state: "AK", votes: 3}, {state: "AZ", votes: 11},{state: "AR", votes: 6},{state: "CA", votes: 54},{state: "CO", votes: 10},{state: "CT", votes: 7},{state: "DC", votes: 3},{state: "DE", votes: 3},{state: "FL", votes: 30},{state: "GA", votes: 16},{state: "HI", votes: 4},{state: "ID", votes: 4},{state: "IL", votes: 19},{state: "IN", votes: 11},{state: "IA", votes: 6},{state: "KS", votes: 6},{state: "KY", votes: 8},{state: "LA", votes: 8},{state: "ME", votes: 2},{state: "MD", votes: 10},{state: "MA", votes: 11},{state: "MI", votes: 15},{state: "MN", votes: 10},{state: "MS", votes: 6},{state: "MO", votes: 10},{state: "MT", votes: 4},{state: "NE", votes: 2}, {state: "NV", votes: 6},{state: "NH", votes: 4},{state: "NJ", votes: 14},{state: "NM", votes: 5},{state: "NY", votes: 28},{state: "NC", votes: 16},{state: "ND", votes: 3}, {state: "OH", votes: 17},{state: "OK", votes: 7},{state: "OR", votes: 8}, {state: "PA", votes: 19},{state: "RI", votes: 4},{state: "SC", votes: 9}, {state: "SD", votes: 3},{state: "TN", votes: 11},{state: "TX", votes: 40}, {state: "UT", votes: 6},{state: "VT", votes: 3},{state: "VA", votes: 13}, {state: "WA", votes: 12},{state: "WV", votes: 4},{state: "WI", votes: 10}, {state: "WY", votes: 3},{state: "ME1", votes: 1},{state: "ME2", votes: 1},{state: "NE1", votes: 1},{state: "NE2", votes: 1}, {state: "NE3", votes: 1}]; 

var red = document.getElementsByTagName('path');
let classNames = ['redState', 'blueState', 'redProj', 'blueProj'];
let redCount = 0; let blueCount = 0;

for (let i = 0; i < red.length; i++) {
	red[i].addEventListener('click', stateClicked, false); red[i].addEventListener('contextmenu', stateProjected, false);

	var pressTimer;
	red[i].addEventListener("mouseup", function(){
		clearTimeout(pressTimer);
		setTimeout(function () {document.getElementById("stateDetailText").innerHTML = ""}, 50);
			document.getElementById("longPressDataBox").classList.remove("animated");
		});

	red[i].addEventListener("mousedown", function(){pressTimer = window.setTimeout(function() {

		var electoralVotes = "";
		var electoralCollegeSelected = data.getAttribute("data-electoral-college");
		var stateID = red[i].getAttribute("id");
		var indexOfState = evTen.findIndex(i => i.state === stateID);

		if(electoralCollegeSelected == "2010") {electoralVotes = evTen[indexOfState]['votes']};
		if(electoralCollegeSelected == "2020") {electoralVotes = evTwenty[indexOfState]['votes']};

		document.getElementById("longPressDataBox").classList.add("animated");

		document.getElementById('stateDetailText').innerHTML = `<sdt1 style="font-family:'FlamaSemibold'">${stateID}</sdt1> <sdt2 style="font-family:'FlamaBook'; letter-spacing: -1px;">${electoralVotes}</sdt2>`;
		}, 500); return false; });
}

function stateClicked() {
	if (document.getElementById("stateDetailText").innerHTML !== "") {return}
	var party = data.getAttribute("data-selected"); const cA = this.classList;
	if (party == 'magic') {{
		if (cA == 'redState') {cB = 'state';
		} else if (cA == 'redState') {cB = 'state';
		} else if (cA == 'blueState') {cB = 'redState';
		} else if (cA == 'blueState') {cB = 'redState';
		} else {cB = 'blueState';}
	}} else if (party == 'dem') {{if (cA == 'blueState' || cA == 'blueProj') {cB = 'state'} else {cB = 'blueState'}
	}} else if (party == 'rep') {{if (cA == 'redState' || cA == 'redProj') {cB = 'state';} else {cB = 'redState'}
	}} else if (party == 'toss') {cB = 'state';}
	this.classList.remove(cA); this.classList.add(cB); centerText();
}


function stateProjected() {
	if (document.getElementById("stateDetailText").innerHTML !== "") {return}
	var party = data.getAttribute("data-selected"); const cA = this.classList;
	if (party == 'magic') {{
		if (cA == 'redState') {cB = 'state';
		} else if (cA == 'redProj') {cB = 'state';
		} else if (cA == 'blueState') {cB = 'redProj';
		} else if (cA == 'blueProj') {cB = 'redProj';
		} else {cB = 'blueProj';}
	}} else if (party == 'dem') {{if (cA == 'blueProj') {cB = 'state'} else {cB = 'blueProj'}
	}} else if (party == 'rep') {{if (cA == 'redProj') {cB = 'state';} else {cB = 'redProj'}
	}} else if (party == 'toss') {cB = 'state';}
	this.classList.remove(cA); this.classList.add(cB); centerText();
}

window.addEventListener("contextmenu", e => e.preventDefault());

function centerText() {

	var electoralCollegeSelected = data.getAttribute("data-electoral-college");
	stateCount = 0, blueCount = 0, redCount = 0;

	for (let i = 0; i < red.length; i++) {for (j in evTen) {
            if ((red[i].getAttribute('class') == 'blueState') || (red[i].getAttribute('class') == 'blueProj')) {
                if (red[i].getAttribute('id') == evTen[j]['state']) {
			if(electoralCollegeSelected == "2010") {blueCount += evTen[j]['votes']};
			if(electoralCollegeSelected == "2020") {blueCount += evTwenty[j]['votes']};
                }
            }
		if ((red[i].getAttribute('class') == 'redState') || (red[i].getAttribute('class') == 'redProj')) {
                if (red[i].getAttribute('id') == evTen[j]['state']) {
			if(electoralCollegeSelected == "2010") {redCount += evTen[j]['votes']};
			if(electoralCollegeSelected == "2020") {redCount += evTwenty[j]['votes']};
                }
            }
        }
    }

	if(blueCount >= 270){var blueProgress = 1} else {var blueProgress = (blueCount/270)}
	if(blueCount > 67){var blueTop = 99 - (blueProgress*51)} else {var blueTop = 88 - (blueProgress*51)}

	if(redCount >= 270){var redProgress = 1} else {var redProgress = (redCount/270)}
	if(redCount > 67){var redTop = 99 - (redProgress*51)} else {var redTop = 88 - (redProgress*51)}

	document.getElementById("demTally").style.clipPath = "inset(" + (1-blueProgress)*100 + "% 0% 0% 0%)";
	document.getElementById("gopTally").style.clipPath = "inset(" + (1-redProgress)*100 + "% 0% 0% 0%)";

	document.getElementById('demBar').style.top = blueTop + "vh";
	document.getElementById('gopBar').style.top = redTop + "vh";

	var animDelay = 250;

    if (blueCount == 269 && redCount == 269) {
        var centerTextSet = "TIE"; var demClass = "notWinner"; var gopClass = "notWinner"; var pathBoxOpacity =  1;
    } else if (blueCount >= 270) {
        var centerTextSet = `${blueWinText} WINS`; var demClass = "isWinner"; var gopClass = "notWinner"; var pathBoxShow = 'scale(0)';
    } else if (redCount >= 270) {
        var centerTextSet = `${redWinText} WINS`; var demClass = "notWinner"; var gopClass = "isWinner"; var pathBoxShow = 'scale(0)';
    } else {
        var centerTextSet = "270 TO WIN"; var demClass = "notWinner"; var gopClass = "notWinner"; var pathBoxShow = 'scale(1)';
    }

document.getElementById("pathsBox").style.transform = pathBoxShow;


document.getElementById("demTally").className = demClass;
document.getElementById("gopTally").className = gopClass;

const blueElement = document.getElementById('blueTotal').innerHTML;
var blueStart = parseInt(blueElement); var blueEnd = Math.abs(Math.floor(blueCount));

const redElement = document.getElementById('redTotal').innerHTML;
var redStart = parseInt(redElement); var redEnd = Math.abs(Math.floor(redCount));

animateValue("blueTotal", blueStart, blueEnd, 400, 17);
animateValue("redTotal", redStart, redEnd, 400, 17);

const beforeCenterText = document.getElementById('centerTextSet').innerHTML; var afterCenterText = centerTextSet;

if(beforeCenterText !== afterCenterText) {
	totalToWinText.classList.remove("anim"); totalToWinText.clientWidth; totalToWinText.classList.add("anim");

	setTimeout(function () {

	document.getElementById('centerTextSet').innerHTML = centerTextSet;

	const totalToWinTextWidth = document.getElementById('totalToWinText').clientWidth;
	const totalToWinTextHeight = document.getElementById('totalToWinText').clientHeight;
	const windowWidth = document.documentElement.clientWidth;
	const windowHeight = document.documentElement.clientHeight;
	const maxWidth = windowWidth * 0.20; const maxHeight = windowHeight * 0.06;

	document.getElementById('totalToWinText').style.left = "3vw";

	if (totalToWinTextWidth < maxWidth) {
	    document.getElementById('totalToWinText').style.width = "22vw"
	    document.getElementById('totalToWinText').style.height = "8vh"
	    document.getElementById('totalToWinText').style.transform = 'scaleX(1)';
	} else {
	    document.getElementById('totalToWinText').style.width = totalToWinTextWidth;
	    var totalToWinScale = maxWidth / totalToWinTextWidth;
		if(totalToWinScale > 1){
			var totalToWinScale = 1;}
	    document.getElementById('totalToWinText').style.transform = `scaleX(${totalToWinScale})`
	}

	}, animDelay);

}

var idArray = []; var uncalledList = "";
$(".state").each(function(){idArray.push(this.id)}); var idArrayInput = idArray.toString();
if(0 < idArray.length && idArray.length <= 9) {
	document.getElementById('pathsBoxDem').innerHTML = document.getElementById('blueSurname').innerHTML + ": " + calculatePaths(blueEnd, idArrayInput);
	document.getElementById('pathsBoxGop').innerHTML = document.getElementById('redSurname').innerHTML + ": " + calculatePaths(redEnd, idArrayInput);
	document.getElementById('pathsBoxTie').innerHTML = "TIE: " + calculatePathsTie(redEnd, idArrayInput)
} else {document.getElementById('testingBoxText').innerHTML = "";}

var pollsClosedArray = [];
$(".pollsClosed").each(function(){pollsClosedArray.push("Y")});

if(0 < idArray.length && idArray.length <= 9 && pollsClosedArray.length == 0) {document.getElementById('buttonPaths').style.display = "flex";} else {document.getElementById('buttonPaths').style.display = "none"; hidePaths()}
}

function reloadPage() {location.reload()};

function loadStart() {

data.setAttribute("data-selected", "magic");
document.getElementById("nationalMap").style.opacity = "1";

const demSurnameWidth = document.getElementById('demSurname').clientWidth;
const gopSurnameWidth = document.getElementById('gopSurname').clientWidth;
const totalToWinTextWidth = document.getElementById('totalToWinText').clientWidth;

const windowWidth = document.documentElement.clientWidth;
const maxSurnameWidth = windowWidth * 0.1;
const maxTotalToWinWidth = windowWidth * 0.22;

document.getElementById('demSurname').style.left = "2vw";
document.getElementById('gopSurname').style.left = "14vw";
// document.getElementById('totalToWinText').style.left = "2vw";

if (demSurnameWidth < maxSurnameWidth) {
    document.getElementById('demSurname').style.width = "10vw"
} else {
    var demSurnameScale = maxSurnameWidth / demSurnameWidth;
    document.getElementById('demSurname').style.transform = `scaleX(${demSurnameScale})`
}

if (gopSurnameWidth < maxSurnameWidth) {
	document.getElementById('gopSurname').style.width = "10vw"
} else {
	var gopSurnameScale = maxSurnameWidth / gopSurnameWidth;
	document.getElementById('gopSurname').style.transform = `scaleX(${gopSurnameScale})`
}


 if (totalToWinTextWidth < maxTotalToWinWidth) {
    document.getElementById('totalToWinText').style.width = "22vw"
  } else {
 	var totalToWinScale = maxTotalToWinWidth / totalToWinTextWidth;
 	document.getElementById('totalToWinText').style.transform = `scaleX(${totalToWinScale})`
  }

document.getElementById('data').setAttribute("data-electoral-college", "2010");
document.getElementById('data').setAttribute("data-labels-visibility", "false");
document.getElementById('data').setAttribute("data-labels", "state");

centerText(); removeSelections(); resetElectoralCollege();

var a = ["buttonSolidify", "button2016", "buttonPollsClose", "buttonFill", "buttonHighlightStates", "buttonElectoralCollege", "buttonShowHideColors", "buttonShowHideStateLabel", "buttonLabelText"];
setTimeout(function () {a.forEach((a) => {document.getElementById(a).style.right = "1vw"})}, 500);

// pres2024();

document.getElementById("nationalMap").style.transition = "0s";
document.getElementById("nationalMap").style.transitionDelay = "0s"
document.getElementById("demSurname").style.transition = "0.7s"
document.getElementById("gopSurname").style.transition = "0.7s"

document.getElementById('testingBoxText').innerHTML = "testing";

}

function selectMagic() {
	data.setAttribute("data-selected", "magic");
	document.getElementById("buttonSelectedMagic").style.opacity = "1";
	document.getElementById("buttonSelectedDem").style.opacity = "0.5";
	document.getElementById("buttonSelectedRep").style.opacity = "0.5";
	document.getElementById("buttonSelectedToss").style.opacity = "0.5";
}

function selectDem() {
	data.setAttribute("data-selected", "dem");
	document.getElementById("buttonSelectedMagic").style.opacity = "0.5";
	document.getElementById("buttonSelectedDem").style.opacity = "1";
	document.getElementById("buttonSelectedRep").style.opacity = "0.5";
	document.getElementById("buttonSelectedToss").style.opacity = "0.5";
}

function selectRep() {
    	data.setAttribute("data-selected", "rep");
    	document.getElementById("buttonSelectedMagic").style.opacity = "0.5";
    	document.getElementById("buttonSelectedDem").style.opacity = "0.5";
   	document.getElementById("buttonSelectedRep").style.opacity = "1";
  	document.getElementById("buttonSelectedToss").style.opacity = "0.5";
}

function selectToss() {
    	data.setAttribute("data-selected", "toss");
    	document.getElementById("buttonSelectedMagic").style.opacity = "0.5";
    	document.getElementById("buttonSelectedDem").style.opacity = "0.5";
    	document.getElementById("buttonSelectedRep").style.opacity = "0.5";
    	document.getElementById("buttonSelectedToss").style.opacity = "1";
}

function removeSelections() {
    	data.setAttribute("data-selected", "magic");
    	document.getElementById("buttonSelectedMagic").style.opacity = "1";
    	document.getElementById("buttonSelectedDem").style.opacity = "1";
    	document.getElementById("buttonSelectedRep").style.opacity = "1";
    	document.getElementById("buttonSelectedToss").style.opacity = "1";
}

function animateValue(id, start, end, duration, animCount) {
	var range = end - start; var current = start; var counter = 0;
	var increment = range / animCount;
	var animInterval = duration/animCount;
   	var obj = document.getElementById(id);
	clearInterval(timer);
	var timer = setInterval(function() {
		counter += 1; current += increment;
        	obj.innerHTML = Math.abs(Math.round(current));
        	if (counter == animCount || current == end) {clearInterval(timer); obj.innerHTML = Math.abs(Math.round(end));}
	}, animInterval);
}

function toggleColor() {
    	if (data.classList == 'grayState') {
       		data.classList.remove('grayState');
        	document.documentElement.style.setProperty('--stateColor', yellowStateColor);
        	data.classList.add('yellowState');
    	} else if (data.classList == 'yellowState') {
        	data.classList.remove('yellowState');
		document.documentElement.style.setProperty('--stateColor', grayStateColor);
        	data.classList.add('grayState');
    }
}

function toggleColorGray() {
       	data.classList.remove('yellowState');
	document.documentElement.style.setProperty('--stateColor', grayStateColor);
        data.classList.add('grayState');
}

function selectElectoralCollege () {
	const previousSelection = data.getAttribute("data-electoral-college");

	if(previousSelection === "2020") {data.setAttribute("data-electoral-college", "2010");}
	if(previousSelection === "2010") {data.setAttribute("data-electoral-college", "2020");}
	  
	centerText(); updateElectoralText();
}

function resetElectoralCollege () {data.setAttribute("data-electoral-college", "2020"); centerText (); updateElectoralText();}

function clickShowHideColors () {
	const currentRedColor = getComputedStyle(document.documentElement).getPropertyValue('--redStateColor');

	if(currentRedColor === redStateColor) {
		document.documentElement.style.setProperty('--redStateColor', redProjectionColor);
		document.documentElement.style.setProperty('--blueStateColor', blueProjectionColor);}

	if(currentRedColor === redProjectionColor) {
		document.documentElement.style.setProperty('--redStateColor', redStateColor);
		document.documentElement.style.setProperty('--blueStateColor', blueStateColor);}
}

function clickShowHideStateLabels () {
	const labelVisibility = data.getAttribute("data-labels-visibility");

	if(labelVisibility == "false") {
		data.setAttribute("data-labels-visibility", "true");
		document.querySelectorAll('.st6').forEach(el => {el.style.fill = "#fff"; el.style.transition = "fill 0.5s, opacity 0s"});
		}

	if(labelVisibility == "true") {
		data.setAttribute("data-labels-visibility", "false");
		document.querySelectorAll('.st6').forEach(el => {el.style.fill = "transparent"; el.style.transition = "fill 0s, opacity 0s"});
		for (j in evTen) {var thisElement = "TEXT-" + evTen[j]['state']; document.getElementById(thisElement).innerHTML = evTen[j]['state'];}
		document.getElementById('data').setAttribute("data-labels", "state");}
}

function showStateLabels () {
	data.setAttribute("data-labels-visibility", "true");
	document.querySelectorAll('.st6').forEach(el => {el.style.fill = "#fff"; el.style.transition = "fill 0, opacity 0s"});

	var electoralCollegeSelected = data.getAttribute("data-electoral-college");
	var labelContext = data.getAttribute("data-labels");

	for (j in evTen) {var thisElement = "TEXT-" + evTen[j]['state']; document.getElementById(thisElement).innerHTML = evTen[j]['state'];}
	document.getElementById('data').setAttribute("data-labels", "state");
}

function electoralText() {
	document.querySelectorAll('.st6').forEach(el => {el.style.fill = "#fff"; el.style.transition = "fill 0.5s, opacity 0s"});
	var electoralCollegeSelected = data.getAttribute("data-electoral-college"); var labelContext = data.getAttribute("data-labels");

	if(labelContext == "state") {for (j in evTen) {
		var thisElement = "TEXT-" + evTen[j]['state'];
		if(electoralCollegeSelected == "2010") {document.getElementById(thisElement).innerHTML = evTen[j]['votes'];};
		if(electoralCollegeSelected == "2020") {document.getElementById(thisElement).innerHTML = evTwenty[j]['votes'];};
                }
	document.getElementById('data').setAttribute("data-labels", "votes");
		};

	if(labelContext == "votes") {for (j in evTen) {
		var thisElement = "TEXT-" + evTen[j]['state'];
		document.getElementById(thisElement).innerHTML = evTen[j]['state'];
                }
	document.getElementById('data').setAttribute("data-labels", "state");
		};
}

function updateElectoralText() {
	var electoralCollegeSelected = data.getAttribute("data-electoral-college"); var labelContext = data.getAttribute("data-labels");

	if(labelContext == "votes") {for (j in evTen) {
		var thisElement = "TEXT-" + evTen[j]['state'];
		if(electoralCollegeSelected == "2010") {document.getElementById(thisElement).innerHTML = evTen[j]['votes'];};
		if(electoralCollegeSelected == "2020") {document.getElementById(thisElement).innerHTML = evTwenty[j]['votes'];};
                }};
}

function coverHide () {
	document.getElementById("headingBox").style.height = "100%";
	document.getElementById("newHeadingLogo").style.height = "23%";
	document.getElementById("newHeadingLogo").style.top = "38.5%";
	document.getElementById("newHeadingLogo").style.left = "10%";
	document.getElementById("newHeadingLogo").style.width = "80%";
}

function coverShow () {
	document.getElementById("headingBox").style.height = "17%";
	document.getElementById("newHeadingLogo").style.height = "11.5%";
	document.getElementById("newHeadingLogo").style.top = "2.75%";
	document.getElementById("newHeadingLogo").style.left = "29%";
	document.getElementById("newHeadingLogo").style.width = "42%";
}

function showHideMenu () {
}

function hideMenu () {
}

function calculatePaths(evStart, statesInput) {
	const ev = data.getAttribute("data-electoral-college");
	if(ev === "2020") {var electoralVotesArray = evTwenty;}
	if(ev === "2010") {var electoralVotesArray = evTen;}

	var electoralVotes = electoralVotesArray.reduce((obj,item) => Object.assign(obj,{[item.state]:item.votes.toString()}),{});

	var ucStates = statesInput.split(","); let ucStatesEV = [], winComb = [], winCombEV = [], winningPaths = [];
	ucStates.forEach((item) => {ucStatesEV.push([item, electoralVotes[item]])}); ucStatesEV.sort().sort((a,b)=>b[1]-a[1]);
	
	var ucStatesByEV = ucStatesEV.map(function(x){return x[0]}); var allCombinations = comb(ucStatesByEV);

	allCombinations.forEach((item) => {var combinationIndex = allCombinations.indexOf(item);
	var evTotal = 0; item.forEach((state) => {evTotal += Number(electoralVotes[state])});
	var ev = evStart + evTotal; if(ev >= 270) {winComb.push(allCombinations[combinationIndex])}});

	winComb.forEach((item) => {var electoralVoteCount = evStart; var combinationOutput = [];
		item.forEach((state) => {const evBefore = electoralVoteCount; combinationOutput += state; electoralVoteCount += parseInt(electoralVotes[state]);
		if((electoralVoteCount >= 270 && evBefore < 270)){winningPaths.push(combinationOutput);}});});

	var finalOutput = winningPaths.filter((element, index) => {return winningPaths.indexOf(element) === index});
	return finalOutput.length;
}

function calculatePathsTie(t, r) {
	let e = data.getAttribute("data-electoral-college");
	if ("2020" === e) var a = evTwenty; if ("2010" === e) var a = evTen;
	var o = a.reduce((t, r) => Object.assign(t, {[r.state]: r.votes.toString()}), {}), c = r.split(",");
    	let f = [], i = [], l = []; c.forEach(t => {f.push([t, o[t]])}), f.sort().sort((t, r) => r[1] - t[1]);
	var n = comb(f.map(function(t) {return t[0]}));
	return n.forEach(r => {
		var e = n.indexOf(r), a = 0;
	        r.forEach(t => {a += Number(o[t])}), 269 == t + a && i.push(n[e])}),
       		i.forEach(r => {var e = t, a = [];
	        r.forEach(t => {let r = e; a += t, 269 == (e += parseInt(o[t])) && r < 269 && l.push(a)})}), l.filter((t, r) => l.indexOf(t) === r).length
}

function comb(a){var b=[],c=function(e=[],d){for(var a=0;a<d.length;a++)b.push([...e,d[a].toString()]),c([...e,d[a]],d.slice(a+1))};return c("",a),b}

function showPaths() {document.getElementById("nationalMap").classList.toggle("paths");}
function hidePaths() {document.getElementById("nationalMap").classList.remove("paths");}

function resetButtonBar() {document.getElementById("buttonBar").style.scrollTop = "0px"};
