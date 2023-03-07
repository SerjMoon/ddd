// <ul> related Variables
let ul = document.querySelector("ul");
const ulId = document.getElementById('firstul');
const ulIdChild = ulId.children;
let ul_nested = document.getElementsByClassName('tododivwrapper');
let submasterDivWrapper = document.getElementById("submasterdiv");
// <li> related Variables
let lis = document.querySelectorAll('li');
// Other Variables
const c = console.log.bind(document);
const clearAll = document.getElementById('clearall');
const pendingTasks = document.getElementById('comptaskp');
const button = document.getElementById("enter");
const input = document.getElementById("userinput");
let ulChecked = new Array();
let ulList = new Array();

//Tag Selector
function tagSelector(event) {
	let text =  event.target.nodeName;
	document.getElementById('demo').innerHTML = "The last TAGNAME you clicked on was:" + " " + text;
}

//Length Functions
function clearAllf() {
	return ul_nested.length;
}

function inputLength() {
	return input.value.length;
}

function ulListL() {
	return ulList.length;
}

function ulIdChildL() {
	return ulIdChild.length;
}

function lisL() {
	return lis.length;
}

//Pending Task Number
function comptasks2() {
	for ( i = 0; i <= ulListL(); i++) {
		if ( ulListL() === 0 || ulListL() > 0 ) {
			return document.getElementById('comptaskp').innerHTML = 'You have ' + ulListL() + ' pending tasks';
		} 
	}
}

//ulListReturn elements to array
function ulListReturn() {
	for ( let i = 0; i <= ulIdChildL(); i++) {
		return ulList.push(ulIdChild[i]);
	}
}

//Spacing Modifiers based on the numbers of elements
function bgModifiers() {
	for (i=0; i <= ulIdChildL(); i++) {
		if ( ulIdChildL() > 0 ) {
			ul.classList.remove('ulcar');
			pendingTasks.classList.add('comptaskp');
			pendingTasks.classList.remove('comptaskhide');
			clearAll.classList.remove('clearallnotasks');
			clearAll.classList.add('clearall');
			clearAll.classList.remove('clearall:remove');
			document.getElementById("clearall").disabled = false;
		} else if ( ulIdChildL() == 0 ) { 
			ul.classList.toggle('ulcar');
			pendingTasks.classList.add('comptaskhide');
			pendingTasks.classList.remove('comptaskp');
			clearAll.classList.remove('clearall');
			clearAll.classList.add('clearallnotasks');
			clearAll.classList.add('clearall:disabled');
			document.getElementById("clearall").disabled = true;
		}
	}
}

//Check/Ucheck - Disabled ClearAll
	// function ClearAllDisabledUl() {
	// 	for (i=0; i <= ulListL(); i++) {
	// 		if ( ulListL() > 0 ) {
	// 			clearAll.classList.remove('clearall:disabled');
	// 			document.getElementById("clearall").disabled = false;
	// 			return comptasks2();
	// 		}
	// 		else if ( ulListL() == 0 ) {
	// 			clearAll.classList.add('clearall:disabled');
	// 			document.getElementById("clearall").disabled = true;
	// 			return comptasks2();
	// 		}
	// 	}
	// }

// ClearAllDisabledUl();
// bgModifiers();

//Add Items to list function
function iCreateElement() {
	let li = document.createElement('li');
	const todoDivWrapper = document.createElement('div');
	const divWrapper = document.createElement('div');
	const liWrapper = document.createElement('div');
	const delButton = document.createElement('button');
	const delButtonWrapper = document.createElement('div');

	const imgdb = document.createElement('img');
	const att = document.createAttribute('src');
	att.value = "./foldero/delete-bin.svg"
	imgdb.setAttributeNode(att);
	imgdb.addEventListener('mouseover', function() {
		imgdb.classList.toggle('imgdb:hover');
	});

	const check = document.createElement('input');
	check.type = "checkbox";

	//Check/Uncheck
	function checkfunct() {	
		for ( let i = 0; i <= ulIdChildL(); i++) {
			if (check.checked) {
				ulChecked.push(ulList[i].innerHTML);
				ulList.pop();
				li.classList.toggle('done');
				// ClearAllDisabledUl();
				return comptasks2();
			} else {
				ulChecked.pop();
				ulListReturn();
				li.classList.toggle('done');
				// ClearAllDisabledUl();
				return comptasks2();
			}
		}
	};

	check.addEventListener('click', checkfunct);

	//Delete Button of the Item
	delButtonWrapper.addEventListener('click', function() {
		for ( let i = 0; i <= lisL(); i++) {
			if (check.checked) {
				todoDivWrapper.remove();	
				comptasks2();
				bgModifiers();
				// ClearAllDisabledUl();
			} else {
				todoDivWrapper.remove();
				ulList.length = ulList.length - 1;
				comptasks2();
				bgModifiers();
				// ClearAllDisabledUl();
				ulChecked.length = 0;
			}
		}
	})

	divWrapper.classList.add('divwrapper');
	imgdb.classList.add('imgdb');
	liWrapper.classList.add('liwrapper');
	delButton.classList.add('delbutton');
	delButtonWrapper.classList.add('delbuttonwrapper');
	todoDivWrapper.classList.add('tododivwrapper');
	check.classList.add('check');

	li.appendChild(document.createTextNode(input.value));
	delButton.appendChild((imgdb));
	liWrapper.appendChild(check);
	liWrapper.appendChild(li);
	delButtonWrapper.appendChild(delButton);
	divWrapper.appendChild(liWrapper);
	divWrapper.appendChild(delButtonWrapper);
	todoDivWrapper.appendChild(divWrapper);
	ul.appendChild(todoDivWrapper);
	input.value = '';
	ulListReturn();
	comptasks2();
	bgModifiers();
// ClearAllDisabledUl();
}

//Input functions
function addTaskByClick() {
	if (inputLength() > 0) {
		iCreateElement();
	}
}

function addTaskByPress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		iCreateElement();
	}
}

//Delete-All Items function
clearAll.addEventListener('click', function() {
	for ( let i = 0; i < clearAllf(); ) {
			let clearAllElements = ulId.removeChild(ul_nested[i]);
			ulChecked.length = 0;
			ulList.length = 0;
			comptasks2();
			bgModifiers();
			// ClearAllDisabledUl();
	}
});

//Event Functions
button.classList.toggle('imgb');
clearAll.addEventListener('mouseover', bgModifiers());
button.addEventListener('mouseover', function() {
	button.classList.toggle('imgb:hover');
});
button.addEventListener('click', addTaskByClick);
input.addEventListener('keypress', addTaskByPress);

comptasks2();