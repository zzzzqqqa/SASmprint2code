function processpaste (elem, savedcontent) {
   // pasteddata = elem.innerText;
    //^^Alternatively loop through dom (elem.childNodes or elem.getElementsByTagName) here
//alert(pasteddata);
 //   elem.innerText = savedcontent;

    // Do whatever with gathered data;
    var regex = /mpflag.*?(?=(mpflag|otherflag))/gm;
    var mp,result;
    var member="";
    var s="";
	s = elem.innerText;
	s = s.replace(/.*The SAS System.*|[0-9 ]{10}\+.*/g,"");
	s = s.replace(/\nMPRINT\([A-Z0-9_]+\):/g,"mpflag");
	s = s.replace(/\nMACROGEN|\nMLOGIC|\nNOTE|\nSYMBOLGEN:|\nWARNING|\nERROR|\n[0-9]+  /g,"otherflag");
	s = s.replace(/(\r\n|\n|\r)/g,"");

    result = s.match(regex);
	if (result) {
		for (var i = 0; i < result.length; i++) {
        mp = result[i].replace("mpflag","");
         mp = mp.replace(/;[^;]*$/,"; \r\n<br/>");  
        member = member + mp ; 
		}
 //   w.value=member;  
	}
//	var oTable=document.getElementById("div"); 
//	oTable.innerText=strip(member);
//		oTable.innerText.replace("&gt;", ">");
//        oTable.innerText.replace("&lt;", "<");
//        oTable.innerText.replace("&nbsp;", " ");
//        oTable.innerText.replace("&amp;", "&");
//        oTable.innerText.replace("&quot;", "\"");
//        oTable.innerText.replace("'", "\'");
//        oTable.innerText.replace("<br/>", "\n");
// document.body.getElementById('div').value=member;
	document.body.innerText=strip(member);
    
} 
