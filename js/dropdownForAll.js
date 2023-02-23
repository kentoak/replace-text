$(function () {
    $('#select-multiple').multipleSelect({
        width:117, 
        formatSelectAll: function() {
            return 'すべて';
        },
        formatAllSelected: function() {
            return 'all selected';
        }
    });
    $(".select-choice").css({
        width: '110',
        height: '16'
    });
    $(".ms-choice").css({
		width: '110',
		height: '16'
	});
	$(".ms-choice").css({
        height: "16px",
        margin: '4px'
    });
});