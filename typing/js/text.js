// 模仿打字特效
// 使用自定义函数初始化一些准备工作，此种模式也叫‘惰性函数定义’
 
var writeContent;

(function(){
	writeContent = function(){
		var myContent = document.getElementById('myContent'),
			ctw = document.getElementById('contentToWrite'),
			inputText = ctw.innerHTML,
			charIndex = 0,
			stringLength = inputText.length;

		writeContent = function(){
			var initString = myContent.innerHTML.replace(/<SPAN.*$/gi,""),
			    theChar = inputText.charAt(charIndex),
			    nextFourChars = inputText.substr(charIndex,4);
			    
			if(nextFourChars=='<BR>' || nextFourChars=='<br>'){
				theChar = '<BR>';
				charIndex += 3;
			}
			initString = initString + theChar + "<SPAN id='blink'>_</SPAN>";
			myContent.innerHTML = initString;

			var blink = document.getElementById('blink');
			charIndex = charIndex + 1;
			if(charIndex % 2 == 1){
				blink.style.display = 'none';
			}else{
				blink.style.display = 'inline';
			}
			blink.scrollIntoView();

			if(charIndex <= stringLength){
				setTimeout(function(){writeContent();},319);
			}else{
				blinkSpan(blink);
			} 
		};
		 
		writeContent();
	};

	var blinkSpan = function (blink){
		blink.style.display = (currentStyle === 'inline' ? none : 'inline');
		setTimeout(function(){blinkSpan();},120);
	};
})();