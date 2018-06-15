var langJsFileLoadFlag = {
	"en":false,
	"bn":false
};
function initLangFunc() {
	langSelected = 'en';
	loadLangScript(langSelected, getLangDependentValues);
}
window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("LangMenu").onchange = function(){
		langSelected = this.value;
		if (langJsFileLoadFlag[langSelected] == false) {
			loadLangScript(langSelected, getLangDependentValues);
		} else {
			getLangDependentValues();
		}
	};
}, false);
function loadLangScript(langSelected, callback)
{	
	// Adding the script tag to the head as suggested before
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'js/language/' + langSelected + '.js';
	script.id = langSelected;
	// Then bind the event to the callback function.
	// There are several events for cross browser compatibility.
	script.onreadystatechange = callback;
	script.onload = callback;
	// Fire the loading
	head.appendChild(script);
	langJsFileLoadFlag[langSelected] = true;
}
var getLangDependentValues = function() {
   // GetValues   
	for (i = 0; i < langID.length; i++) { 
		text = '#' + langID[i];
		document.querySelector(text).innerHTML =  window[langSelected][langID[i]];
	}   
};
initLangFunc();