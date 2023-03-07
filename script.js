var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var ulf = ul.children;
const li = document.querySelector('li');
const lis = document.querySelectorAll('li');
const lisi = document.getElementsByTagName('li');
const c = console.log.bind(document);
var submasterDivWrapper = document.getElementById("submasterdiv");
const clearAll = document.getElementById('clearall');

function ievent(event) {
	let text =  event.target.nodeName;
	document.getElementById('demo').innerHTML = "The last TAGNAME you clicked on was:" + " " + text;
}

function inputLength() {
	return input.value.length;
}

function lisiLen() {
	return lisi.length;
	}

function ulipL() {
	return ulip.length;
}

function ulfL() {
	return ulf.length;
}

function lisL() {
	return lis.length;
}

function comptasks() {
	for ( i = 0; i <= lisiLen(); i++) {
		if ( lisiLen() === 0 || lisiLen() > 0 ) {
			return document.getElementById('comptaskp').innerHTML = 'You have ' + lisiLen() + ' pending tasks';
		} 
	}
}

function comptasks4() {
	for ( i = 0; i <= ulipL(); i++) {
		if ( ulipL() === 0 || ulipL() > 0 ) {
			return document.getElementById('comptaskp').innerHTML = 'You have ' + ulipL() + ' pending tasks';
		} 
	}
}

const uli = document.getElementById('firstul');
const ulis = uli.children;
var ulia = new Array();
var ulip = new Array();

function dilip() {
	for ( let i = 0; i <= ulfL(); i++) {
		return ulip.push(ulf[i]);
	}
}

function ulfi() {
	if ( ulfL() == 0 ) {
		ul.classList.add('ulcar');
	} else if ( ul.children.length > 0 ) {
		ul.classList.remove('ulcar');
	  }
  	}

ulfi();

function resUlfi() {
	return ulfi();
}

comptasks4();

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
		// c('merge imgdb.addfunction');
	});

	const check = document.createElement('input');
	check.type = "checkbox";
	check.name = "CB_Test";
	check.setAttribute("name", "CBTest2");
	// check.value = 2;
	check.checked.value = 333;

	function checkfunct() {	
		for ( let i = 0; i <= ulfL(); i++) {
			if (check.checked) {
				c('executed');
				ulia.push(ulip[i].innerHTML);
				ulip.pop();
				li.classList.toggle('done');
				c(ulia);
				c(ulia.length);
				return comptasks4();
			} else {
				c('executedd');
				ulia.pop();
				dilip();
				li.classList.toggle('done');
				return comptasks4();
				// c(false);
			}
		}
	};

	check.addEventListener('click', checkfunct);

	delButtonWrapper.addEventListener('click', function() {
		for ( let i = 0; i <= lisL(); i++) {
			if (check.checked) {
				todoDivWrapper.remove();	
				comptasks4();
				c(comptasks4());
				c(ulia.length);
				c(ulia);
				ulfi();
			} else {
				todoDivWrapper.remove();
				ulip.length = ulip.length - 1;
				comptasks4();
				ulia.length = 0;
				c(ulia.length);
				c(ulia);
			}
		ulfi();
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
	dilip();
	comptasks4();
	resUlfi();
}

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

let clearAlli = document.getElementById('firstul');
let clearAll_nested = document.getElementsByClassName('tododivwrapper');

function cANL() {
	return clearAll_nested.length;
}

clearAll.addEventListener('click', function() {
	for ( let i = 0; i < cANL(); ) {
			let clearAllNode = clearAlli.removeChild(clearAll_nested[i]);
			ulia.length = 0;
			ulip.length = 0;
			comptasks4();
			// c('log merge log at least i guess');
	}
});

clearAll.addEventListener('mouseover', function() {
	clearAll.classList.toggle('clearall:hover');
		c('merge clearAll.addfunction');
	});

button.classList.toggle('imgb');
button.addEventListener('mouseover', function() {
	button.classList.toggle('imgb:hover');
});
button.addEventListener('click', addTaskByClick);
input.addEventListener('keypress', addTaskByPress);