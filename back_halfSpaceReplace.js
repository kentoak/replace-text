function jumpTextSearch() {
	return function(info, tab) {
		var str = info.selectionText;
		setText = str;//gオプションは置き換えたい文字列を指定した時にその文字が複数含まれている場合に、その全てを置き換えるオプション//半角スペースの繰り返しを消す //([^\w.])は全角 //+は直前の1回以上の繰り返し //カッコ()が＄の番号( )、カッコ内をグループ化。マッチした内容は参照可//半角+半角スペース+全角の半角スペースと、全角+半角スペース+半角の半角スペースも消す。//全角ピリオド、全角カンマにも対応//半角:半角のときには半角スペースを入れる。//^は行の先頭にマッチする。//$は行の末尾にマッチする。/^は文頭、$は文末
		setText = setText.replace('，', '、')
		setText = setText.replace('．', '。')
		setText = setText.replace(/([^\x01-\x7E\uFF61-\uFF9F]) +([^\x01-\x7E\uFF61-\uFF9F])/g, '$1$2')//全-半スペ-全、
		setText = setText.replace(/([^\x01-\x7E\uFF61-\uFF9F]) +([A-Za-z0-9])/g, '$1$2')//全角が左右どちらかにあれば半角スペース削除
		setText = setText.replace(/([A-Za-z0-9]) +([^\x01-\x7E\uFF61-\uFF9F])/g, '$1$2')//全角が左右どちらかにあれば半角スペース削除
		setText = setText.replace(/([^\x01-\x7E\uFF61-\uFF9F]),/g,'$1、')//全-,-全
		setText = setText.replace(/(^[^\x01-\x7E]*$)\．+/g, '$1。')
		setText = setText.replace(/(^[^\x01-\x7E])、+([^\x01-\x7E])/g, '$1, $2')
		setText = setText.replace(/([^\x01-\x7E\uFF61-\uFF9F])\./, '$1。')
		setText = setText.replace(/(^[^\x01-\x7E]*$)。+/g, '$1.')
		setText = setText.replace(/([^\x01-\x7E]):+([^\x01-\x7E])/g, '$1: $2');//([^\w.])は全角 //+は直前の1回以上の繰り返し //カッコ()が＄の番号//.replace(/([\w.]) +([^\w.])/g, '$1$2')//.replace(/([\w.])　+([\w.])/g, '$1 $2')//半-全スペ-半//setText = setText.replace('，', '、').replace('．', '。').replace(/([^\w.]) +([^\w.])/g, '$1$2').replace(/([^\w.]) +([\w.])/g, '$1$2').replace(/([^\w.]),+([^\w.])/g, '$1、$2').replace(/(^[^\x01-\x7E\uFF61-\uFF9F]+$),+(^[^\x01-\x7E\uFF61-\uFF9F]+$)/g, '$1、$2').replace(/(^[^\x01-\x7E\uFF61-\uFF9F]+$),+([\w.])/g, '$1、$2').replace(/([\w.])\.+/g, '$1。').replace(/([\w.])\．+/g, '$1。').replace(/([\w.])、+([\w.])/g, '$1,$2').replace(/([^\w.])\./, '$1。').replace(/([\w.])。+/g, '$1.').replace(/([\w.]):+([\w.])/g, '$1: $2').replace("\nwww.DeepL.com/Translator（無料版）で翻訳しました。","")
		str = setText;//半角([^\x01-\x7E]),全角(^[^\x01-\x7E\xA1-\xDF]+$)
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
	"onclick" : jumpTextSearch()
});