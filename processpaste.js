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
	document.body.innerText=strip(member);
} 
