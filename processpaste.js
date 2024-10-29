function processpaste (elem, savedcontent) {
    var regex = /mpflag.*?(?=(mpflag|otherflag))/gm;
    var mp,result;
    var member="";
    var s="";
	s = elem.innerText;
	s = s.replace(/.*The SAS System.*|[0-9 ]{10}\+.*/g,"");
	s = s.replace(/\nMPRINT\([A-Z0-9_\.]+\):/g,"mpflag");
	s = s.replace(/\nMACROGEN|\nMLOGIC|\nNOTE|\nSYMBOLGEN:|\nWARNING|\nERROR|\n[0-9]+ \+/g,"otherflag");
	s = s.replace(/(\r\n|\n|\r)/g," ");
    result = s.match(regex);
	if (result) {
		for (var i = 0; i < result.length; i++) {
        mp = result[i].replace("mpflag","");
         mp = mp.replace(/;.*$/,"; \r\n<br/>");  
        member = member + mp ; 
		}
	}
	document.getElementById("code-output").innerText = strip(member);
} 

document.getElementById("clear-code").addEventListener("click", function() {
    document.getElementById("code-output").innerHTML = '<p style="color: grey;">Extracted code will appear here.</p>';
    document.getElementById("code-input").innerHTML = '<p style="color: grey;">Paste your log here, and the executable code will appear on the right.</p>';
});

document.getElementById("copy-code").addEventListener("click", function() {
    var codeOutput = document.getElementById("code-output");
    var range = document.createRange();
    range.selectNode(codeOutput);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
});

document.getElementById("save-code").addEventListener("click", function() {
    var codeOutput = document.getElementById("code-output").innerText;
    var blob = new Blob([codeOutput], { type: "text/plain;charset=utf-8" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "extracted_code.txt";
    link.click();
});

document.getElementById("extract-code").addEventListener("click", function() {
    var elem = document.getElementById("div");
    var savedcontent = elem.innerText;
    processpaste(elem, savedcontent);
});
