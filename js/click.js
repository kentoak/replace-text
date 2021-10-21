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