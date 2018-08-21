# puppeteer-practice
- ソシム株式会社から発売された[「JS + Node.jsによるWebクローラー/ネットエージェント [開発テクニック]」](http://www.amazon.co.jp/exec/obidos/ASIN/4883379930)という書籍の学習リポジトリ

# 目的
- 書籍の「第3章 ログインの必要なWebサイトをクロールする」をリファクタリングする
- 以下の節ではPhantomJSとCasperJSを使用してWebスクレイピングを行なっているが、  
[PhantomJSは2018年6月2日に開発が終了](https://jser.info/2018/06/11/phantomjs-ended/)していたため、puppeteerで書き直す
   - 01 PhantomJSとCasperJS
   - 02 ログイン後のデータをダウンロドする

- 以下の節ではelectronを使用しているが、サンプルのままだと動かなかったため書き直す。
   - 04 Electronでデスクトップアプリを作る
   - 05 Electronでスクリーンキャプチャ

## 開発環境
### puppeteer
- OS : CentOS7
- node.js : v10.8.0
- puppeteer : v1.7.0

### electron
- OS : macOS HighSierra
- node.js : v10.8.0
- electron : v1.4.13
