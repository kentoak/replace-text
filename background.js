chrome.browserAction.onClicked.addListener(doActionButton);

function doActionButton(tab){
    console.log('Action Button clicked. Tab:',tab);
}

chrome.commands.onCommand.addListener(function(command) {
    //Polyfill the Browser Action button
    if(command === '_execute_browser_action') {
        chrome.tabs.query({active:true,currentWindow:true},function(tabs){
            //Get the popup for the current tab
            chrome.browserAction.getPopup({tabId:tabs[0].id},function(popupFile){
                if(popupFile){
                    openPopup(tabs[0],popupFile);
                } else {
                    //There is no popup defined, so we do what is supposed to be done for
                    //  the browserAction button.
                    doActionButton(tabs[0]);
                }
            });
        });
        return;
    } //else
});


chrome.contextMenus.onClicked.addListener(function(clickData){
    $(function(){
        var textArea = $('#changeText');
        textArea.on('keydown keyup keypress change focus blur click',function(){//keydown keyup keypress change: 入力エリアになにかしらの反応があった時のアクションを記述
            var self = $(this),
            selfVal = self.val(),//gオプションは置き換えたい文字列を指定した時にその文字が複数含まれている場合に、その全てを置き換えるオプション
            //半角スペースの繰り返しを消す //([^\w.])は全角 //+は直前の1回以上の繰り返し //カッコ()が＄の番号( )、カッコ内をグループ化。マッチした内容は参照可
            //半角+半角スペース+全角の半角スペースと、全角+半角スペース+半角の半角スペースも消す。//全角ピリオド、全角カンマにも対応//半角:半角のときには半角スペースを入れる。
            setText = selfVal.replace(/([^\w.]) +([^\w.])/g, '$1$2').replace(/([\w.]) +([^\w.])/g, '$1$2').replace(/([^\w.]) +([\w.])/g, '$1$2').replace(/([^\w.]),+([^\w.])/g, '$1、$2').replace(/([^\w.])，+([^\w.])/g, '$1、$2').replace(/([^\w.])\.+/g, '$1。').replace(/([^\w.])\．+/g, '$1。').replace(/([\w.])、+([\w.])/g, '$1,$2').replace(/([\w.])。+/g, '$1.').replace(/([\w.]):+([\w.])/g, '$1: $2');//半角スペースの繰り返しを消す //([^\w.])は全角 //+は直前の1回以上の繰り返し //カッコ()が＄の番号
            self.val(setText);
        });
    });
    
    $(function(){
        var btn1= $('#btn1');
        btn1.on('click',function(){
            $('#changeText').val($('#changeText').val().replace(/\r?\n/g, ' '))
        });
    });
}