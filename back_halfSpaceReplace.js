function jumpTextSearch() {
	return function(info, tab) {
		var str = info.selectionText;
		str = str.replace(/[\/\\\|]/g,"\\$&")+'';
		//ここ田岡
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
	"onclick" : jumpTextSearch()
});

