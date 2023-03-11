// <ul> related Variables
let ul = document.querySelector("ul");
const ul_GetId = document.getElementById('firstul');
const ul_GetId_Children = ul_GetId.children;
let ul_Get_ToDoDivWrapper = document.getElementsByClassName('tododivwrapper');
let submasterDivWrapper = document.getElementById("submasterdiv");

// Other Variables
let lis = document.querySelectorAll('li');
const c = console.log.bind(document);
const clearAll = document.getElementById('clearall');
const pendingTasks = document.getElementById('comptaskp');
const button = document.getElementById("enter");
const input = document.getElementById("userinput");

//Array Lists to push/pop Checked/Unchecked elements between
let ul_Checked_List = new Array();
let ul_Unchecked_List = new Array();


//Tag Selector(Unecessary optional addition)
function tagSelector(event) {
	let text =  event.target.nodeName;
	document.getElementById('demo').textContent = "The last TAGNAME you clicked on was:" + " " + text;
}

//Return Length Functions
function ul_Get_ToDoDivWrapper_L() {
	return ul_Get_ToDoDivWrapper.length;
}

function input_Length() {
	return input.value.length;
}

function ul_Checked_List_L() {
	return ul_Checked_List.length;
}

function ul_Unchecked_List_L() {
	return ul_Unchecked_List.length;
}

function ul_GetId_Children_L() {
	return ul_GetId_Children.length;
}

function lis_L() {
	return lis.length;
}

//Pending Task - Text Display
function comptasks2() {
	for ( i = 0; i <= ul_Unchecked_List_L(); i++) {
		if ( ul_Unchecked_List_L() === 0 || ul_Unchecked_List_L() > 0 ) {
			return document.getElementById('comptaskp').textContent = 'You have ' + ul_Unchecked_List_L() + ' pending tasks';
		} 
	}
}

//Return elements from ul_GetId_Children back to ul_Unchecked_List
function ul_Unchecked_List_Return() {
	for ( let i = 0; i <= ul_GetId_Children_L(); i++) {
		return ul_Unchecked_List.push(ul_GetId_Children[i]);
	}
}

//White-Space Modifiers based on the numbers of current elements
function bgModifiers() {
	for (i=0; i <= ul_GetId_Children_L(); i++) {
		if ( ul_GetId_Children_L() > 0 ) {
			ul.classList.remove('ulcar');
			pendingTasks.classList.add('comptaskp');
			pendingTasks.classList.remove('comptaskhide');
			clearAll.classList.remove('clearallnotasks');
			clearAll.classList.add('clearall');
			clearAll.classList.remove('clearall:remove');
			document.getElementById("clearall").disabled = false;
		} else if ( ul_GetId_Children_L() == 0 ) { 
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

//Add ToDo Items Function
function iCreateElement() {
	//Item Creation Function
	let li = document.createElement('li');
	const todoDivWrapper = document.createElement('div');
	const divWrapper = document.createElement('div');
	const liWrapper = document.createElement('div');
	const delButton = document.createElement('button');
	const delButtonWrapper = document.createElement('div');

	//Delete Button Icon
	const imgdb = document.createElement('img');
	const att = document.createAttribute('src');
	att.value = "./foldero/delete-bin.svg"
	imgdb.setAttributeNode(att);
	imgdb.addEventListener('mouseover', function() {
		imgdb.classList.toggle('imgdb:hover');
	});

	//Check Button
	const check = document.createElement('input');
	check.type = "checkbox";

	//Checked/Unchecked Items
	function checkfunct() {	
		for ( let i = 0; i <= ul_GetId_Children_L(); i++) {
			if (check.checked) {
				ul_Checked_List.push(ul_Unchecked_List[i]);
				ul_Unchecked_List.pop();
				li.classList.toggle('done');
				return comptasks2();
			} else {
				ul_Checked_List.pop();
				ul_Unchecked_List_Return();
				li.classList.toggle('done');
				return comptasks2();
			}
		}
	};

	check.addEventListener('click', checkfunct);

	//Delete Button Function (for Checked/Unchecked Items)
	delButtonWrapper.addEventListener('click', function() {
		for ( let i = 0; i <= lis_L(); i++) {
			if (check.checked) {
				todoDivWrapper.remove();
				ul_Checked_List.pop();	
				comptasks2();
				bgModifiers();
			} else {
				todoDivWrapper.remove();
				ul_Unchecked_List.pop();
				comptasks2();
				bgModifiers();
			}
		}
	})

	//Class Listing
	divWrapper.classList.add('divwrapper');
	imgdb.classList.add('imgdb');
	liWrapper.classList.add('liwrapper');
	delButton.classList.add('delbutton');
	delButtonWrapper.classList.add('delbuttonwrapper');
	todoDivWrapper.classList.add('tododivwrapper');
	check.classList.add('check');

	//Appending Children
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
	ul_Unchecked_List_Return();
	comptasks2();
	bgModifiers();
}

//Press Input Button by Click
function addTaskByClick() {
	if (input_Length() > 0) {
		iCreateElement();
	}
}

//Press Input Button by Enter
function addTaskByPress(event) {
	if (input_Length() > 0 && event.keyCode === 13) {
		iCreateElement();
	}
}

//Delete-All Items function
clearAll.addEventListener('click', function() {
	for ( let i = 0; i < ul_Get_ToDoDivWrapper_L(); ) {
			let clearAllElements = ul_GetId.removeChild(ul_Get_ToDoDivWrapper[i]);
			ul_Checked_List.length = 0;
			ul_Unchecked_List.length = 0;
			comptasks2();
			bgModifiers();
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