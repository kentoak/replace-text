# replace-text
ペーストした瞬間に全角に挟まれた半角スペースを削除し、ピリオドカンマと句読点を正しくしてくれるテキストボックスをポップアップしてくれるChrome拡張。
`Alt+M`で呼び出す。
![image](https://user-images.githubusercontent.com/43945931/203188902-bce13cde-7c1c-4d92-be19-661773d2af88.png)

テキストボックスにペーストすると自動で半角スペースが削除される。

テキスト置換する（2つまで）
![image](https://user-images.githubusercontent.com/43945931/209902218-3cbf1058-8b47-4311-9f1e-3decdf7f8826.png)


* `NL`
    改行→半角スペースにする。Altを押してもこれが実行され、さらにクリップボードにコピーされる。
    e.g.) 
    ```
    I have a pen.
    I have an apple.
    ```
    ↓
    ```
    I have a pen. I have an apple.
    ```

* `BL`
    空白となっている行を消去する。
    e.g.) 
    ```
    I have a pen.
    
    I have an apple.
    ```
    ↓
    ```
    I have a pen.
    I have an apple.
    ```


* `NL&Spc`
    改行のみを削除する。
    e.g.) 
    ```
    I have a pinea
    pple
    ```
    ↓
    ```
    I have a pineapple
    ```

* `Copy`
    クリップボードにコピーする。
  
* `~Spc~`
    文字列の先頭(前方/左側)及び末尾(後方/右側)にある空白文字を一括削除

* `ALL`
    すべての半角スペースを一括削除

* `Cmd`
    ネットに載っているコマンドをコピーするときに偶に邪魔な、`$`+`半角スペース`、`%`+`半角スペース`、`>`+`半角スペース`、`+`+`半角スペース`を削除する。
    e.g.)
    ```
    $ cd Desktop
    $ ls
    ```
    ↓
    ```
    cd Desktop
    ls
    ```
* `cnt`
    文字数カウントする。右下に文字数が表示される。

* etc
    * テキストボックスにペーストすると自動で全角に囲まれた半角スペースが削除されるが、何回かフォーカスしないと途中までしかやってくれないかもしれないので注意。
    * 履歴が3つまで残る。（History1~3）
    * 下段のテキストボックスはなにもしないので元のテキストの保存用に。Memoは履歴には残らないただのテキストボックス。



# Chrome拡張の導入方法
1. [リポジトリ](https://github.com/kentoak/replace-text)をGitHubからクローンするかzipファイルをダウンロードしてunzip。
2. Chromeを起動しの拡張機能の管理ページ(chrome://extensions)で、画面右上のトグルボタンをクリックしてChromeのデベロッパーモードをオンにする。
3. デベロッパーモードを起動すると表示されるバーの一番左の「パッケージ化されていない拡張機能を読み込む」というボタンを押し、先程このリポジトリをダウンロードしたフォルダを選択する。
