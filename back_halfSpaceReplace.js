function jumpTextSearch() {
	return function(info, tab) {
		var str = info.selectionText;
		for(var i=0; i<10; i++){
			str = str.replace('，', '、').replace('．', '。').replace(/([^\x01-\x7E\uFF61-\uFF9F]) +([^\x01-\x7E\uFF61-\uFF9F])/g, '$1$2').replace(/([^\x01-\x7E\uFF61-\uFF9F]) +([A-Za-z0-9])/g, '$1$2').replace(/([A-Za-z0-9]) +([^\x01-\x7E\uFF61-\uFF9F])/g, '$1$2').replace(/([^\x01-\x7E\uFF61-\uFF9F]),/g,'$1、').replace(/(^[^\x01-\x7E]*$)\．+/g, '$1。').replace(/(^[^\x01-\x7E])、+([^\x01-\x7E])/g, '$1, $2').replace(/([^\x01-\x7E\uFF61-\uFF9F])\./, '$1。').replace(/(^[^\x01-\x7E]*$)。+/g, '$1.').replace(/([^\x01-\x7E]):+([^\x01-\x7E])/g, '$1: $2');
		}
		str = str.replace(/[\/\\\|]/g,"\\$&")+'';
        saveToClipboard(str);
		//copyToClipboard(str)
		//window.open(url,null);
	};
};

//選択中文字列をクリップボードに入れる
function saveToClipboard(str) {
    var textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = str;
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}

var parentId = chrome.contextMenus.create({
	//"title" : chrome.i18n.getMessage('extContextmenu'),
	"title" : "MM（選択中の文字列をコピーする）",
	"type" : "normal",
	"contexts" : ["selection"],
	"onclick" : jumpTextSearch
});