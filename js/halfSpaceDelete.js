$(function(){
	var textArea = $('#changeText');
	textArea.on('keydown keyup keypress change focus blur click',function(){//keydown keyup keypress change: 入力エリアになにかしらの反応があった時のアクションを記述
		var self = $(this),
		selfVal = self.val(),//gオプションは置き換えたい文字列を指定した時にその文字が複数含まれている場合に、その全てを置き換えるオプション
		setText = selfVal.replace(/([^\w.]) +([^\w.])/g, '$1$2');
		self.val(setText);
	});
});

$(function(){
    var btn1= $('#btn1');
	btn1.on('click',function(){
        $('#changeText').val($('#changeText').val().replace(/,/g, '、').replace(/\./g, '。'))
	});
});

$(function(){
    var btn1= $('#btn2');
	btn1.on('click',function(){
        $('#changeText').val($('#changeText').val().replace(/、/g, ',').replace(/。/g, '\.'))
	});
});

$(function(){
	$('#changeText').on('dblclick',function(){//テキストエリアをダブルクリックで改行削除
        $('#changeText').val($('#changeText').val().replace(/\r?\n/g, ' '))
	});
});
