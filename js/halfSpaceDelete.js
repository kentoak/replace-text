
$(function(){
	var textArea = $('#changeText');
	textArea.on('keydown keyup keypress change focus blur click',function(){//keydown keyup keypress change: 入力エリアになにかしらの反応があった時のアクションを記述
		while(1){
			var self = $(this);
			setText_temp = self.val();
			setText = self.val();//gオプションは置き換えたい文字列を指定した時にその文字が複数含まれている場合に、その全てを置き換えるオプション
			//半角スペースの繰り返しを消す //([^\w.])は全角 //+は直前の1回以上の繰り返し //カッコ()が＄の番号( )、カッコ内をグループ化。マッチした内容は参照可
			//半角+半角スペース+全角の半角スペースと、全角+半角スペース+半角の半角スペースも消す。//全角ピリオド、全角カンマにも対応//半角:半角のときには半角スペースを入れる。
			//^は行の先頭にマッチする。
			//$は行の末尾にマッチする。/^は文頭、$は文末
			setText = setText.replace(/([^\x01-\x7E\uFF61-\uFF9F]),+\s/g, '$1、')//全角+半角カンマがあれば半角カンマ削除して読点に//0725これがないと、全角+半角カンマ+半角スペース+全角で死ぬ
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
			setText = setText.replace(/([^\x01-\x7E]):+([^\x01-\x7E])/g, '$1: $2');
			setText = setText.replace("\nwww.DeepL.com/Translator（無料版）で翻訳しました。","")

			//([^\w.])は全角 //+は直前の1回以上の繰り返し //カッコ()が＄の番号
			//.replace(/([\w.]) +([^\w.])/g, '$1$2')
			//.replace(/([\w.])　+([\w.])/g, '$1 $2')//半-全スペ-半
			//setText = setText.replace('，', '、').replace('．', '。').replace(/([^\w.]) +([^\w.])/g, '$1$2').replace(/([^\w.]) +([\w.])/g, '$1$2').replace(/([^\w.]),+([^\w.])/g, '$1、$2').replace(/(^[^\x01-\x7E\uFF61-\uFF9F]+$),+(^[^\x01-\x7E\uFF61-\uFF9F]+$)/g, '$1、$2').replace(/(^[^\x01-\x7E\uFF61-\uFF9F]+$),+([\w.])/g, '$1、$2').replace(/([\w.])\.+/g, '$1。').replace(/([\w.])\．+/g, '$1。').replace(/([\w.])、+([\w.])/g, '$1,$2').replace(/([^\w.])\./, '$1。').replace(/([\w.])。+/g, '$1.').replace(/([\w.]):+([\w.])/g, '$1: $2').replace("\nwww.DeepL.com/Translator（無料版）で翻訳しました。","")
			if (setText == setText_temp){
				break
			}
			self.val(setText);//半角([^\x01-\x7E]),全角(^[^\x01-\x7E\xA1-\xDF]+$)
			//半角？^[A-Za-z0-9]*$
			//全角(/^[^\x20-\x7e]*$/)、
			//全角？[\x01-\x7E\uFF65-\uFF9F]
			//全角？^[^\x01-\x7E\uFF61-\uFF9F]+$
		}
	});
	//ここ田岡健太
    document.onkeydown = function(e) {
        var keyCode = false;
        if (e.keyCode == 18) {//ALTを押した時
			var btn1= $('#btn1');
			btn1.click();
			//window.alert("テキストの内容をコピーしました")
        } else if (event.which) {
            keyCode = event.which;
        }
        //alert(keyCode);
    }
});

const pasteText = (callback) => {
	// 閲覧しているブラウザが「navigator.clipboardに
	// 対応しているか確認
	if(navigator.clipboard){
		var textArea = $('#changeText');
		//クリップボードにあるテキストを読み込み
		navigator.clipboard.readText().then((text) => {
			textArea.focus();
			document.execCommand("paste");
			//alert(text)//読み込んだテキストを操作
			$(textArea).val(text);
			textArea.textContent = text;
			//alert(navigator.clipboard.readText())
			callback(text);
		});
		//alert("text")
		return true;
	} else {
		//alert("false")
	  	return false;
	}
  }

$(function(){
	//Mousetrap.bind('ctrl+l',function(){
		var btn1= $('#btn1');
		btn1.on('click',function(){
			$('#changeText').val($('#changeText').val().replace(/\r?\n/g, ' '))
			var copyText = $('#changeText');
			copyText.select();
  			document.execCommand("copy");
			// if(navigator.clipboard) {
			// 	var copyText = $('#changeText');
			// 	navigator.clipboard.writeText(copyText).then(function() {
			// 		alert('コピーしました。');
			// 	});
			// }else {
			// 	alert('対応していません。');
			// }
		});
	//});
});

$(function(){
	var btn2= $('#btn2');
	btn2.on('click',function(){
		var copyText = $('#changeText');
		copyText.select();
		document.execCommand("copy");
	});
});

$(function(){
	var btn3= $('#btn3');
	btn3.on('click',function(){
		document.getElementById("count1").innerText = document.querySelector('#changeText').value.length+"文字";;
	});
});

var storage = chrome.storage.local;

function saveMemo(){
	storage.set({'data_changeText':$('#changeText').val()}, function(){//上側
		// storage.get("data_changeText",function(value){
		// 	var value_data = value.data_changeText;
		// 	//alert(value_data)
		// 	document.querySelector('#savedText1').textContent = value_data
		// });
		storage.get('config__send_flg',function(items) {
			if(items.config__send_flg=="1"){
			}else{
				alert(chrome.i18n.getMessage("extSaveSuccess"));
			}
		});
	});
	storage.set({'data_savedText1':$('#savedText1').val()}, function(){
		storage.get('config__send_flg',function(items) {
			if(items.config__send_flg=="1"){
			}else{
				alert(chrome.i18n.getMessage("extSaveSuccess"));
			}
		});
	});
	storage.set({'data_savedText2':$('#savedText2').val()}, function(){
		storage.get('config__send_flg',function(items) {
			if(items.config__send_flg=="1"){
			}else{
				alert(chrome.i18n.getMessage("extSaveSuccess"));
			}
		});
	});
	storage.set({'data_text':$('#Text').val()}, function(){//下側
		storage.get('config__send_flg',function(items) {
			if(items.config__send_flg=="1"){
			}else{
				alert(chrome.i18n.getMessage("extSaveSuccess"));
			}
		});
	});
	return;
}

function setRealtimeSaveFlg(flg){
	storage.set({'config__realtimesaveflg':flg}, function(){
	});
	return true;
}
setRealtimeSaveFlg("1");

function realtimesave(){
	storage.get('config__realtimesaveflg',function(items) {
	  	if(items.config__realtimesaveflg){
			if(items.config__realtimesaveflg=="1"){
				saveMemo();
			}
	  	}
	});
	return true;
}
document.querySelector('#changeText').addEventListener('keydown', realtimesave);
document.querySelector('#Text').addEventListener('keydown', realtimesave);

window.onload = function() {
	storage.get('data_changeText',function(items) {
	  if(items.data_changeText){
		//$('#changeText').val(items.data_changeText);
		$('#savedText1').val(items.data_changeText);
	  }
	});
	storage.get('data_savedText1',function(items) {
		if(items.data_savedText1){
		  $('#savedText2').val(items.data_savedText1);
		}
	});
	storage.get('data_savedText2',function(items) {
		if(items.data_savedText2){
		  $('#savedText3').val(items.data_savedText2);
		}
	});
	storage.get('data_text',function(items) {
		if(items.data_text){
			$('#Text').val(items.data_text);
		}
	});
};

function countLength1(){
	document.getElementById("count1").innerText = document.querySelector('#changeText').value.length+"文字";
}
function countLength2(){
	document.getElementById("count2").innerText = document.querySelector('#Text').value.length+"文字";
}
