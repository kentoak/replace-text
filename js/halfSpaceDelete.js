$(function(){
	var textArea = $('#changeText');

	textArea.on('keydown keyup keypress change focus blur click',function(){
		var self = $(this),
		selfVal = self.val(),
		selfVal = selfVal.replace(/\r?\n/g, ' ');
		setText = selfVal.replace(/([^\w.]) +([^\w.])/g, '$1$2');
		self.val(setText);
	});
});
