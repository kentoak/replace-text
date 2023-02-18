# replace-text
`Alt+M`（`⌥+M`）でポップアップのページを呼び出し、テキストボックスにペーストした瞬間に全角に挟まれた半角スペースを削除したり、ピリオドカンマと句読点を正しくしてくれたりｍテキスト置換をしてくれるChrome拡張。
![image](https://user-images.githubusercontent.com/43945931/203188902-bce13cde-7c1c-4d92-be19-661773d2af88.png)

* 全角に挟まれた半角スペースを削除（テキストボックスにペーストすると自動で半角スペースが削除される。）
* 改行などの削除
* テキスト置換する（2つまで）

![image](https://user-images.githubusercontent.com/43945931/209933067-85ac5174-5b77-496f-bf2c-e019bf52828e.png)

![image](https://user-images.githubusercontent.com/43945931/209933073-6721fe98-3093-4acb-ac63-42daae99a5ec.png)

`Alt+M`で呼び出す。Macだと`⌥+M`。

## 機能

### 全角に挟まれた半角スペースを削除
日本語pdfをコピーすると、このように半角スペースが挟まってしまうことがある。テキストボックスに文字列を入力したら、即座に全角に挟まれた半角スペースを削除する。
    
e.g.)
    日本語pdfについて、日本語間に空白ができることがある。
    改行が半角スペースとなっており、邪魔。
    ![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/316390/d65d4a40-5709-8133-0091-74c728ba2ccc.png)
    ↓
    テキストボックスにペーストすると半角スペースが削除される。
    ![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/316390/2a643039-6ce8-c02e-5fd6-ca39ecb461e3.png)

### 改行などの削除
![image.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/316390/f871ddaf-7e28-17ac-590a-fb726e0f3ee7.png)

* `NL`
    改行→半角スペースにする。Alt（⌥）キーを連打するとこれが実行され、さらにクリップボードにコピーされる。
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

### 文字列置換
置換前wordに置換したいと思っている文字列を入力し、置換後wordに変換する文字列を入力。Beforeの欄に、テキストを入れると、Afterに置換後のテキストがリアルタイムで出力される。`Clear`でテキストボックスがクリアされ、`Copy`を押すとクリップボードにコピーされる。
![image](https://user-images.githubusercontent.com/43945931/219882632-b8d83389-3792-4890-ad3b-ad0f5cdb60ee.png)


### UpperCase & LowerCase
入力を大文字・小文字に変換する。
![image](https://user-images.githubusercontent.com/43945931/219880505-c83e36b3-a301-49fc-888a-fe2a58cd203e.png)


### 半角to全角 & 全角to半角
入力を半角→全角、全角→半角に変換する。
![image](https://user-images.githubusercontent.com/43945931/219880517-eec2d81b-7e1e-414d-9f5d-dc5f4c9f0aef.png)


### SpongeCase
入力をsPoNgEcAsEのような、大文字と小文字がランダムに混じった文にする。これは皮肉めいたネットミームで使われ、SpOnGeBoB mEmEと呼ばれる。
![image](https://user-images.githubusercontent.com/43945931/219880535-edf94b36-e3b5-4064-a406-674b756474f9.png)

### Insert
行頭または行末に文字を挿入する
![image](https://user-images.githubusercontent.com/43945931/219882448-f19ec6bd-e34a-4f2d-b7ff-01ed87adac6a.png)


# Chrome拡張の導入方法
1. [リポジトリ](https://github.com/kentoak/replace-text)をGitHubからクローンするかzipファイルをダウンロードしてunzip。
2. Chromeを起動しの拡張機能の管理ページ(chrome://extensions)で、画面右上のトグルボタンをクリックしてChromeのデベロッパーモードをオンにする。
3. デベロッパーモードを起動すると表示されるバーの一番左の「パッケージ化されていない拡張機能を読み込む」というボタンを押し、先程このリポジトリをダウンロードしたフォルダを選択する。
