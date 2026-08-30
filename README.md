# ひだまりホームページ

架空の子どもの居場所「ひだまり」を紹介する、初心者の練習用ホームページです。小学生・中学生と保護者に向けて、活動内容・活動時間・よくある質問・お問い合わせ導線を掲載しています。

## 構成

```text
hidamari-homepage/
├── .github/
│   └── workflows/
│       └── pages.yml # GitHub Pages に公開するための設定
├── index.html        # ページ本文。各セクションとナビゲーションを記述
├── package.json      # 開発サーバーとビルド確認用スクリプト
├── scripts/
│   ├── build.js      # 公開用ファイルを dist/ にコピーする簡易ビルドスクリプト
│   └── serve.js      # iPhone確認用URLを表示するローカルプレビュー用スクリプト
├── src/
│   └── styles.css    # レスポンシブ対応を含むデザイン設定
└── README.md         # この説明ファイル
```

## ページ内容

- トップメッセージ「ここには、あなたの居場所がある。」
- ひだまりについて
- できること
  - 勉強
  - ゲームや遊び
  - スタッフへの相談
  - イベント
- 活動時間
- よくある質問
- お問い合わせボタン・お問い合わせ欄

## 主な機能

- メニューやボタンを押すと、該当箇所までなめらかにスクロールします。
- 「よくある質問」は、項目をタップまたはクリックすると回答が開きます。
- スマートフォンでも読みやすいレスポンシブデザインです。
- データベースやログイン機能は使っていないため、HTML と CSS を中心に修正できます。

## 一番簡単なプレビュー方法（パソコンで確認）

1. ターミナルでこのフォルダを開きます。
2. 次のコマンドを実行します。

   ```bash
   npm start
   ```

3. ターミナルに表示された `http://localhost:5173/` をブラウザで開きます。
4. 終了するときは、ターミナルで `Ctrl + C` を押します。

## iPhoneで実際に確認する方法

パソコンとiPhoneが同じWi-Fiにつながっていれば、追加のアプリなしで確認できます。

1. パソコンで次のコマンドを実行します。

   ```bash
   npm start
   ```

2. ターミナルに次のようなURLが表示されます。

   ```text
   http://192.168.x.x:5173/
   ```

3. iPhoneをパソコンと同じWi-Fiに接続します。
4. iPhoneのSafariで、表示された `http://192.168.x.x:5173/` を開きます。

うまく開けない場合は、パソコンのファイアウォールでポート `5173` がブロックされていないか確認してください。

## GitHub Pagesで公開する方法

このリポジトリには、GitHub Pages用の設定ファイル `.github/workflows/pages.yml` を用意しています。

1. GitHubのリポジトリ画面を開きます。
2. `Settings` → `Pages` を開きます。
3. `Build and deployment` の `Source` で `GitHub Actions` を選びます。
4. この変更を `main` ブランチに反映すると、自動で公開処理が始まります。
5. 公開が終わると、`Settings` → `Pages` に公開URLが表示されます。

## iPhoneだけでmainブランチに反映する方法

すでにPull Request（プルリクエスト）が作られている場合は、iPhoneのSafariだけでmainブランチに反映できます。

1. iPhoneのSafariでGitHubを開き、このリポジトリのページに移動します。
2. 画面上部の `Pull requests` をタップします。
3. 反映したいPull Requestをタップします。
4. 内容を確認して問題なければ、緑色の `Merge pull request` をタップします。
5. 次に表示される `Confirm merge` をタップします。
6. `Pull request successfully merged and closed` と表示されたら、mainブランチへの反映は完了です。

Pull Requestがまだない場合は、次の手順で作成します。

1. GitHubのリポジトリ画面で `Pull requests` をタップします。
2. `New pull request` をタップします。
3. `base` が `main`、`compare` が作業中のブランチになっていることを確認します。
4. `Create pull request` をタップします。
5. タイトルと説明を入力して、もう一度 `Create pull request` をタップします。
6. 作成後、緑色の `Merge pull request` → `Confirm merge` の順にタップします。

GitHub Pagesで公開している場合は、mainブランチに反映したあと自動で公開処理が始まります。数分待ってから、GitHubの `Settings` → `Pages` に表示されるURLをiPhoneのSafariで開いて確認してください。

## ビルド確認

公開用ファイルを作成できるか確認する場合は、次のコマンドを実行します。

```bash
npm run build
```

ビルドが成功すると、`dist/` フォルダに公開用ファイルが作成されます。外部ライブラリを使っていないため、依存パッケージの追加なしで確認できます。
