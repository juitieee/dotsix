/* JS source for index.html */

var degreeSel = document.getElementById('degree');
var semSel = document.getElementById('semester');
var depSel = document.getElementById('department');
var helpdismissed = false;

var helptext = document.getElementById('help');

var clearSel = function(sel) {
	var children = sel.children;
	for(var i=0;i<children.length;i++) {
		var classes = children[i].className.split(' ');
		for(var j=0;j<classes.length;j++) {
			if(classes[j] == 'active') {
				children[i].className = "btn btn-default";
			}
		}
	}
};

var getSelectedValue = function(sel) {
	var children = sel.children;
	for(var i=0;i<children.length;i++) {
		var classes = children[i].className.split(' ');
		for(var j=0;j<classes.length;j++) {
			if(classes[j] == 'active') {
				return children[i];
			}
		}
	}
};

var ondegree = function(btn) {
	clearSel(degreeSel);
	clearSel(depSel);
	depSel.className = "btn-group btn-group-justified selector";
	semSel.className = "btn-group btn-group-justified selector hidden";
	btn.className += " active";

	if(helpdismissed == false)
		helptext.innerHTML = "<strong>Now</strong> select your department to proceed.";
};

var ondep = function(btn) {
	clearSel(depSel);
	clearSel(semSel);
	semSel.className = "btn-group btn-group-justified selector";
	btn.className += " active";

	if(helpdismissed == false)
		helptext.innerHTML = "<strong>Now</strong> select your semester to proceed.";
};

var onsem = function(btn) {
	btn.className += " active";
	degree = getSelectedValue(degreeSel).name;
	depart = getSelectedValue(depSel).innerHTML.toLowerCase();
	semest = getSelectedValue(semSel).innerHTML;

	url = './courses/'+degree+'/'+depart[0]+depart[1]+'/sem'+semest+'.html';
	window.open(url,'_blank');
};

var dismisshelp = function() {
	helpdismissed = true;
}
