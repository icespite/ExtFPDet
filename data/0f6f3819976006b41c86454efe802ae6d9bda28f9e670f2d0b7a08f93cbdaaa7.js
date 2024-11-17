
function checkerror(msg, url, linenumber){ 
	if (msg=='Permission Denied') {
		window.location = window.location
	}
	return true;
}

window.onerror = checkerror;
