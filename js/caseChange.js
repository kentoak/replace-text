function selectOne_hfCheck(){
    $('.hf-check').on('click', function() {
        if ($(this).prop('checked')){
          $('.hf-check').prop('checked', false);
          $(this).prop('checked', true);
        }
    });
}
function selectOne_ulCheck(){
    $('.ul-check').on('click', function() {
        if ($(this).prop('checked')){
          $('.ul-check').prop('checked', false);
          $(this).prop('checked', true);
        }
    });
}

function selectOne_spongeCheck(){
    $('.sponge-check').on('click', function() {
        if ($(this).prop('checked')){
          $('.sponge-check').prop('checked', false);
          $(this).prop('checked', true);
        }
    });
}

function lower(string) {
    return string.replace(/[A-ZＡ-Ｚ]/g, function(s){return String.fromCharCode(s.charCodeAt(0) + 32);})
}

function upper(string) {
    return string.replace(/[a-zａ-ｚ]/g, function(s){return String.fromCharCode(s.charCodeAt(0) - 32);})
}

function Convert(str, isHalf, type){
	var KanaFullMap =
	('ヴ ガ ギ グ ゲ ゴ ザ ジ ズ ゼ ゾ ダ ヂ ヅ デ ド バ ビ ブ ベ ボ パ ピ プ ペ ポ '
	+ 'ア イ ウ エ オ カ キ ク ケ コ サ シ ス セ ソ タ チ ツ テ ト ナ ニ ヌ ネ ノ ハ ヒ フ ヘ ホ マ ミ ム メ モ ヤ ユ ヨ ラ リ ル レ ロ ワ ヲ ン '
	+ 'ァ ィ ゥ ェ ォ ャ ュ ョ ッ ー ◌゙ \u3099 ◌゚ \u309A 、 。 ・ 「 」').split(' ');
	var KanaHalfMap =
		('ｳﾞ ｶﾞ ｷﾞ ｸﾞ ｹﾞ ｺﾞ ｻﾞ ｼﾞ ｽﾞ ｾﾞ ｿﾞ ﾀﾞ ﾁﾞ ﾂﾞ ﾃﾞ ﾄﾞ ﾊﾞ ﾋﾞ ﾌﾞ ﾍﾞ ﾎﾞ ﾊﾟ ﾋﾟ ﾌﾟ ﾍﾟ ﾎﾟ '
		+ 'ｱ ｲ ｳ ｴ ｵ ｶ ｷ ｸ ｹ ｺ ｻ ｼ ｽ ｾ ｿ ﾀ ﾁ ﾂ ﾃ ﾄ ﾅ ﾆ ﾇ ﾈ ﾉ ﾊ ﾋ ﾌ ﾍ ﾎ ﾏ ﾐ ﾑ ﾒ ﾓ ﾔ ﾕ ﾖ ﾗ ﾘ ﾙ ﾚ ﾛ ﾜ ｦ ﾝ '
		+ 'ｧ ｨ ｩ ｪ ｫ ｬ ｭ ｮ ｯ ｰ ﾞ ﾞ ﾟ ﾟ ､ ｡ ･ ｢ ｣').split(' ');
	var SymbolFullMap = ('｟ ｠ ￠ ￡ ￢ ￣ ￤ ￥ ￦ │ ← ↑ → ↓ ■ ○').split(' ');
	var SymbolHalfMap = ('⦅ ⦆ ¢ £ ¬ ¯ ¦ ¥ ₩ ￨ ￩ ￪ ￫ ￬ ￭ ￮').split(' ');
	
	var Diff = 'Ａ'.charCodeAt(0) - 'A'.charCodeAt(0);
	var ToHalf = function(str){
		return String.fromCharCode(str.charCodeAt(0) - Diff);
	}
	var ToFull= function(str){
		return String.fromCharCode(str.charCodeAt(0) + Diff);
	}
	if(type.number){
		if(isHalf) str = str.replace(/[０-９]/g, ToHalf);
		else str = str.replace(/[0-9]/g, ToFull);
	}
	if(type.latin){
		if(isHalf) str = str.replace(/[Ａ-Ｚａ-ｚ]/g, ToHalf);
		else str = str.replace(/[a-zA-Z]/g, ToFull);
	}

	if(type.symbol1){
		if(isHalf) str = str.replace(/[！-／：-＠［-｀｛-～]/g, ToHalf);
		else str = str.replace(/[!-/:-@\[-`{-~]/g, ToFull);
	}

	if(type.space){
		if(isHalf) str = str.replace(/\u3000/g, '\u0020');
		else str = str.replace(/\u0020/g, '\u3000');
	}
	if(type.kana){
		if(isHalf){
			for(var i = 0; i < KanaFullMap.length; i++)
				str = str.replace(new RegExp(KanaFullMap[ i ], 'g'), KanaHalfMap[ i ]);
		}
		else{
			for(var i = 0; i < KanaHalfMap.length; i++)
				str = str.replace(new RegExp(KanaHalfMap[ i ], 'g'), KanaFullMap[ i ]);
		}
	}
	if(type.symbol2){
		if(isHalf){
			for(var i = 0; i < SymbolFullMap.length; i++)
				str = str.replace(new RegExp(SymbolFullMap[ i ], 'g'), SymbolHalfMap[ i ]);
		}
		else{
			for(var i = 0; i < SymbolHalfMap.length; i++)
				str = str.replace(new RegExp(SymbolHalfMap[ i ], 'g'), SymbolFullMap[ i ]);
		}
	}
	return str;
}

function spongeText(string) { //sPoNgEcAsE 
	const chars = string.split("");
	for (let i = chars.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * Math.floor(2));
	  if (j == 0) {
		  chars[i] = chars[i].toLowerCase();
	  } else {
		  chars[i] = chars[i].toUpperCase();
	  }
	}
	return chars.join("");
}

function capitalize(string) { //capitalize
	//return string.charAt(0).toUpperCase() + string.slice(1);
    const words = string.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

function escape_func(a){
	a = a.replace("|","\\|","g");
}

function replace_func(){
	var input_txt = $("#input").val();
	var before_txt = $("#before-txt").val();
	var after_txt = $("#after-txt").val();
	var before_txt2 = $("#before-txt2").val();
	var after_txt2 = $("#after-txt2").val();
	var output_txt = input_txt;

	before_txt = before_txt.replace("|","\\|","g");
	if($("#check").prop('checked') && before_txt !== "" && after_txt !== ""){
		output_txt = output_txt.split(before_txt).join(after_txt);
	}

	if($("#check2").prop('checked') && before_txt2 !== "" && after_txt2 !== ""){
		output_txt = output_txt.split(before_txt2).join(after_txt2);
	}
	$("#preview").text(output_txt);

};

function insert_func(){//行の前後に文字を挿入する
	var input_txt = $("#input").val();
	var before_txt = $("#insert_before-txt").val();
	var after_txt = $("#insert_after-txt").val();
	var output_txt = input_txt;
    if($("#check8").prop('checked')){
        output_txt = output_txt.replace(/^(.)/gm,before_txt+"$1");
    }
    if($("#check8").prop('checked')){
        output_txt = output_txt.replace(/(.)$/gm,"$1"+after_txt);
    }
	$("#preview").text(output_txt);
};
  
function half_full_func(){
	var input_txt = $("#input").val();
	var output_txt = input_txt;
	var type = {
		number: $("#select-multiple option[name='number']").prop('selected'),
		latin: $("#select-multiple option[name='latin']").prop('selected'),
		kana: $("#select-multiple option[name='kana']").prop('selected'),
		symbol1: $("#select-multiple option[name='symbol1']").prop('selected'),
		symbol2: $("#select-multiple option[name='symbol1']").prop('selected'),
		space: $("#select-multiple option[name='space']").prop('selected')
	};
	if($("#check6").prop('checked')){
		output_txt = Convert(output_txt, false, type);
	}
	if($("#check7").prop('checked')){
		output_txt = Convert(output_txt, true, type);
	}
	$("#preview").text(output_txt);
};

function sponge_func(){
    var input_txt = $("#input").val();
    var output_txt = input_txt;
    if($("#check5").prop('checked')){
        output_txt = spongeText(output_txt)
    }
    $("#preview").text(output_txt);
};

function upper_lower_func(){
	var input_txt = $("#input").val();
	var output_txt = input_txt;
    if($("#check4").prop('checked')){
        output_txt = lower(input_txt)
    }
    if ($("#check3").prop('checked')){
		output_txt = upper(input_txt)
	}
	$("#preview").text(output_txt);
};

function capitalize_func(){
	var input_txt = $("#input").val();
	var output_txt = input_txt;
    if($("#check10").prop('checked')){
        output_txt = lower(input_txt)
        output_txt = capitalize(output_txt)
    }
	$("#preview").text(output_txt);
};

$(function () {
    var rpl1=$("#check").prop('checked')
    var rpl2=$("#check2").prop('checked')
    var ul1=$("#check3").prop('checked')
    var ul2=$("#check4").prop('checked')
    var hf1=$("#check6").prop('checked')
    var hf2=$("#check7").prop('checked')
    var sponge=$("#check5").prop('checked')
    cap=$("#check10").prop('checked')
    var before_txt = $("#before-txt").val();
	var after_txt = $("#after-txt").val();
	var before_txt2 = $("#before-txt2").val();
	var after_txt2 = $("#after-txt2").val();
    var insert1=$("#check8").prop('checked')
    var insert2=$("#check9").prop('checked')
    var insert_before_txt = $("#insert_before-txt").val();
	var insert_after_txt = $("#insert_after-txt").val();

    selectOne_hfCheck()
    selectOne_ulCheck()
    selectOne_spongeCheck() 
    $("#before-txt").change(function() {
        replace_func();
    });
    $("#after-txt").change(function() {
        replace_func();
    });
    $("#after-txt").keyup(function() {
        replace_func();
    });
    $("#before-txt2").change(function() {
        replace_func();
    });
    $("#after-txt2").change(function() {
        replace_func();
    });
    $("#after-txt2").keyup(function() {
        replace_func();
    });
	$("input[name='hf-check']").change(function() {
        half_full_func();
    });
    $("input[name='ul-check']").change(function() {
        upper_lower_func();
    });
    $("input[name='cap-check']").change(function() {
        capitalize_func();
    });
    $("input[name='sponge-check']").change(function() {
        sponge_func();
    });
    $("input[name='insert-check']").change(function() {
        insert_func();
    });
	$("#input").change(function() {
		rpl1=$("#check").prop('checked')
        rpl2=$("#check2").prop('checked')
        ul1=$("#check3").prop('checked')
        ul2=$("#check4").prop('checked')
        hf1=$("#check6").prop('checked')
        hf2=$("#check7").prop('checked')
        cap=$("#check10").prop('checked')
        sponge=$("#check5").prop('checked')
        insert1=$("#check8").prop('checked')
        insert2=$("#check9").prop('checked')
        insert_before_txt=$("#insert_before-txt").val();
	    insert_after_txt=$("#insert_after-txt").val();
		before_txt = $("#before-txt").val();
		after_txt = $("#after-txt").val();
		before_txt2 = $("#before-txt2").val();
		after_txt2 = $("#after-txt2").val();
        
        if ((rpl1&&before_txt!==""&&after_txt!=="")||(rpl2&&before_txt2!==""&&after_txt2!=="")){
            replace_func();
        }else{
            if (ul1 || ul2){
                upper_lower_func();
            }else{
                if (cap){
                    capitalize_func();
                }
                else{
                    if (hf1 || hf2){
                        half_full_func();
                    }else{
                        if (sponge){
                            sponge_func();
                        }
                        else{
                            if((insert1&&insert_before_txt!=="")||(insert2&&insert_after_txt!=="")){
                                insert_func()
                            }else{
                                $("#preview").text($("#input").val());
                            }
                        }
                    }
                }
            }
        }
    });

    $("#input").keyup(function() {
        rpl1=$("#check").prop('checked')
        rpl2=$("#check2").prop('checked')
        ul1=$("#check3").prop('checked')
        ul2=$("#check4").prop('checked')
        hf1=$("#check6").prop('checked')
        hf2=$("#check7").prop('checked')
        sponge=$("#check5").prop('checked')
        cap=$("#check10").prop('checked')
        insert1=$("#check8").prop('checked')
        insert2=$("#check9").prop('checked')
        insert_before_txt=$("#insert_before-txt").val();
	    insert_after_txt=$("#insert_after-txt").val();
		before_txt = $("#before-txt").val();
		after_txt = $("#after-txt").val();
		before_txt2 = $("#before-txt2").val();
		after_txt2 = $("#after-txt2").val();
        
        if ((rpl1&&before_txt!==""&&after_txt!=="")||(rpl2&&before_txt2!==""&&after_txt2!=="")){
            replace_func();
        }else{
            if (ul1 || ul2){
                upper_lower_func();
            }else{
                if (cap){
                    capitalize_func();
                }else{
                    if (hf1 || hf2){
                        half_full_func();
                    }else{
                        if (sponge){
                            sponge_func();
                        }
                        else{
                            if((insert1&&insert_before_txt!=="")||(insert2&&insert_after_txt!=="")){
                                insert_func()
                            }else{
                                $("#preview").text($("#input").val());
                            }
                        }
                    }
                }
            }
        }
    });
});

$(function(){
	var btn= $('#submit-button1');
	btn.on('click',function(){
        $("#preview").focus();
        var copyText = $('#preview');
		copyText.select();
		document.execCommand("copy");
	});
});

$(function(){
  $("#clear-button1").click(function() {
    $("#input").val("");
    $("#preview").val("");
    $('#input').trigger("focus");
  });
});
