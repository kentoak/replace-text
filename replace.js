////Replace
$(function () {
	$('input').iCheck({
		checkboxClass: 'icheckbox_flat-red',
		radioClass: 'iradio_flat-red'
	});

	$("input,#input").change(function() {
	    replace_func();
	});
	$("input,#input").keyup(function() {
		replace_func();
	});
	$("select").change(function() {
	    replace_func();
	});

	$('input').on('ifChanged', function(event){
		replace_func();
	});

	$("#check").on('ifChanged', function(event){
		if($("#check").prop('checked')){
			$("#before-txt,#after-txt").removeAttr("disabled");
		}else{
			$("#before-txt,#after-txt").attr("disabled","disabled");
		}
	});
	$("#check2").on('ifChanged', function(event){
		if($("#check2").prop('checked')){
			$("#before-txt2,#after-txt2").removeAttr("disabled");
		}else{
			$("#before-txt2,#after-txt2").attr("disabled","disabled");
		}
	});
	$("#check3").on('ifChanged', function(event){
		if($("#check3").prop('checked')){
			$("#before-txt3,#after-txt3").removeAttr("disabled");
		}else{
			$("#before-txt3,#after-txt3").attr("disabled","disabled");
		}
	});
	$("#check4").on('ifChanged', function(event){
		if($("#check4").prop('checked')){
			$("#before-txt4,#after-txt4").removeAttr("disabled");
		}else{
			$("#before-txt4,#after-txt4").attr("disabled","disabled");
		}
	});

	$("#clear-button").click(function() {
	    $("#input").val("");
		replace_func();
		$('#input').trigger("focus");
	});

	$("#preview").click(function(){
		if($("#select-check").prop('checked')){
		$(this).select();
		}
	});

	replace_func();

});

function escape_func(a){
a = a.replace("|","\\|","g");

}

function replace_func(){
	var input_txt = $("#input").val();
	var before_txt = $("#before-txt").val();
	var after_txt = $("#after-txt").val();
	var before_txt2 = $("#before-txt2").val();
	var after_txt2 = $("#after-txt2").val();
	var before_txt3 = $("#before-txt3").val();
	var after_txt3 = $("#after-txt3").val();
	var before_txt4 = $("#before-txt4").val();
	var after_txt4 = $("#after-txt4").val();
	var output_txt = input_txt;
before_txt = before_txt.replace("|","\\|","g");

	if($("#check").prop('checked') && before_txt !== ""){
		output_txt = output_txt.split(before_txt).join(after_txt);
	}
	if($("#check2").prop('checked') && before_txt2 !== ""){
		output_txt = output_txt.split(before_txt2).join(after_txt2);
	}

	if($("#check3").prop('checked') && before_txt3 !== ""){
		output_txt = output_txt.split(before_txt3).join(after_txt3);
	}

	if($("#check4").prop('checked') && before_txt4 !== ""){
		output_txt = output_txt.split(before_txt4).join(after_txt4);
	}

	if(	input_txt !== ""){
		$("#preview").text(output_txt);
	}else{$("#preview").text("");}


};
