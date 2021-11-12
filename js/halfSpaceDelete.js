$(function(){
	var textArea = $('#changeText');
	textArea.on('keydown keyup keypress change focus blur click',function(){//keydown keyup keypress change: 入力エリアになにかしらの反応があった時のアクションを記述
		var self = $(this);
		setText = self.val();//gオプションは置き換えたい文字列を指定した時にその文字が複数含まれている場合に、その全てを置き換えるオプション

		//半角スペースの繰り返しを消す //([^\w.])は全角 //+は直前の1回以上の繰り返し //カッコ()が＄の番号( )、カッコ内をグループ化。マッチした内容は参照可
		//半角+半角スペース+全角の半角スペースと、全角+半角スペース+半角の半角スペースも消す。//全角ピリオド、全角カンマにも対応//半角:半角のときには半角スペースを入れる。
		setText = setText.replace('，', '、')
		setText = setText.replace('．', '。')
		setText = setText.replace(/([^\x01-\x7E\uFF61-\uFF9F]) +([^\x01-\x7E\uFF61-\uFF9F])/g, '$1$2')//全-半スペ-全、
		setText = setText.replace(/([^\x01-\x7E\uFF61-\uFF9F]) +([A-Za-z0-9])/g, '$1$2')//全角が左右どちらかにあれば半角スペース削除
		setText = setText.replace(/([A-Za-z0-9]) +([^\x01-\x7E\uFF61-\uFF9F])/g, '$1$2')//全角が左右どちらかにあれば半角スペース削除

		//^は文頭、$は文末
		setText = setText.replace(/([^\x01-\x7E\uFF61-\uFF9F]),/g,'$1、')//全-,-全
		setText = setText.replace(/(^[A-Za-z0-9]*$)\．+/g, '$1。')
		setText = setText.replace(/(^[A-Za-z0-9])、+([A-Za-z0-9])/g, '$1, $2')
		setText = setText.replace(/([^\x01-\x7E\uFF61-\uFF9F])\./, '$1。')
		setText = setText.replace(/(^[A-Za-z0-9]*$)。+/g, '$1.')
		setText = setText.replace(/([\w.]):+([\w.])/g, '$1: $2');//半角スペースの繰り返しを消す 
		setText = setText.replace("\nwww.DeepL.com/Translator（無料版）で翻訳しました。","")

		//([^\w.])は全角 //+は直前の1回以上の繰り返し //カッコ()が＄の番号
		//.replace(/([\w.]) +([^\w.])/g, '$1$2')
		//.replace(/([\w.])　+([\w.])/g, '$1 $2')//半-全スペ-半

		//setText = setText.replace('，', '、').replace('．', '。').replace(/([^\w.]) +([^\w.])/g, '$1$2').replace(/([^\w.]) +([\w.])/g, '$1$2').replace(/([^\w.]),+([^\w.])/g, '$1、$2').replace(/(^[^\x01-\x7E\uFF61-\uFF9F]+$),+(^[^\x01-\x7E\uFF61-\uFF9F]+$)/g, '$1、$2').replace(/(^[^\x01-\x7E\uFF61-\uFF9F]+$),+([\w.])/g, '$1、$2').replace(/([\w.])\.+/g, '$1。').replace(/([\w.])\．+/g, '$1。').replace(/([\w.])、+([\w.])/g, '$1,$2').replace(/([^\w.])\./, '$1。').replace(/([\w.])。+/g, '$1.').replace(/([\w.]):+([\w.])/g, '$1: $2').replace("\nwww.DeepL.com/Translator（無料版）で翻訳しました。","")
		self.val(setText);//半角([^\x01-\x7E]),全角(^[^\x01-\x7E\xA1-\xDF]+$)

		//半角？^[A-Za-z0-9]*$
		//全角(/^[^\x20-\x7e]*$/)、
		//全角？[\x01-\x7E\uFF65-\uFF9F]
		//全角？^[^\x01-\x7E\uFF61-\uFF9F]+$
	});
});

$(function(){
	var btn1= $('#btn1');
	btn1.on('click',function(){
		$('#changeText').val($('#changeText').val().replace(/\r?\n/g, ' '))
	});
});