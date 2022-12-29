chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	switch (message.type) {
		case 'write to clipboard':
			navigator.clipboard.writeText(message.content).then().catch((err) => {
				console.log(err)
			})
      	break
	  	case 'get selected text include newline-code':
			const contexMenusId = "get selected text include newline-code"
			window.alert(document.querySelector(`#${inputID}`))
			if(document.querySelector(`#${inputID}`) === null) {
				const $input = document.createElement('input');
				$input.setAttribute('type', 'text');
				$input.setAttribute('id', inputID);
				$input.setAttribute('style', 'position: absolute; left: -100vw; top: 0');
				document.body.appendChild($input);
			}
			var str = window.getSelection().toString()
			window.alert(str)
			window.alert(message.text)
			for(var i=0; i<10; i++){
				str = str.replace(/([^\x01-\x7E\uFF61-\uFF9F]), /g, '$1、').replace('，', '、').replace('．', '。').replace(/([^\x01-\x7E\uFF61-\uFF9F]) +([^\x01-\x7E\uFF61-\uFF9F])/g, '$1$2').replace(/([^\x01-\x7E\uFF61-\uFF9F]) +([A-Za-z0-9])/g, '$1$2').replace(/([A-Za-z0-9]) +([^\x01-\x7E\uFF61-\uFF9F])/g, '$1$2').replace(/([^\x01-\x7E\uFF61-\uFF9F]),/g,'$1、').replace(/(^[^\x01-\x7E]*$)\．+/g, '$1。').replace(/([^\x01-\x7E\uFF61-\uFF9F])\./, '$1。').replace(/(^[^\x01-\x7E]*$)。+/g, '$1.').replace(/([^\x01-\x7E]):+([^\x01-\x7E])/g, '$1: $2');
			}
			str = str.replace(/\.\n/,'@@@')//.replace(/\r?\n/g, '')//.replace('@@@','\.\n')
			document.execCommand('copy');
			sendResponse({ body: str })
		break
	}
})