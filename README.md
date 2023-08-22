## 環境構築の流れ
下記の流れに入る前に、Docker Desktopを起動しておくこと。
```bash
make upd # コンテナアップ
make backend # backendコンテナ内に移動
python manage.py migrate # マイグレーションの実行
python manage.py runserver 0.0.0.0:8000 # 開発サーバーを起動
```
ブラウザで0.0.0.0:8000にアクセスして、Djangoのインストール完了画面が表示されればbackendの環境構築は成功

```bash
make frontend # frontendコンテナに移動
cd web # next.jsのプロジェクトに移動
npm install # node_modules関連の依存パッケージをインストール（この工程の有無は要確認）
npm run dev # 開発サーバーを起動
```
ブラウザでlocalhost:3000にアクセスして、Next.jsのインストール完了画面が表示されればfrontendの環境構築は成功

## 開発の流れ
環境構築は完了しているものとして記載しているので、まだ環境構築が完了していない場合は、上記を参照ください<br>
### makeコマンドを使う場合
MacOSの場合は、`make`コマンドをデフォルトで使うことができます。<br>
WindowsOSの場合は、`make`コマンドを使えるようにするために、インストールする必要があります。

#### frontendの開発
1. ターミナルで、クローンしたプロジェクトのディレクトリに移動
1. `make frontend`で`frontend`コンテナに接続
1. `cd web`でNext.jsのプロジェクトディレクトリに移動
1. `npm run dev`で開発サーバーを起動
1. `cmd + L`でブラウザのアドレスバーを開いて`localhost:3000`を入力
1. ブラウザでlocalhost:3000にアクセスして、変更を確認可能

#### backendの開発
1. ターミナルで、クローンしたプロジェクトのディレクトリに移動
1. `make frontend`で`backend`コンテナに接続
1. `python manage.py runserver 0.0.0.0:8000`で開発サーバーを起動
1. `cmd + L`でブラウザのアドレスバーを開いて`0.0.0.0:8000`を入力
1. ブラウザで0.0.0.0:8000にアクセスして、変更を確認可能

### Dev Containersを使う場合（Macのみ動作確認済）
この拡張機能があればDocker Desktopを起動しなくても開発可能です（根拠なしなので、要要確認）
#### frontendの開発
1. VS Codeでクローンしたプロジェクトのルートディレクトリを開く
1. `cmd + P`でコマンドパレットを開く
1. `> Open Folder in Container`を入力
1. 開発コンテナー：コンテナーで再度フォルダを開くを選択
1. Finderから`frontend`ディレクトリを選択
1. `frontend`コンテナ内に接続することができる。接続した状態で、コンテナ内の`frontend`ディレクトリをVS Codeで開いている
1. `cmd + J`でVS Codeのターミナルウィンドウを開く
1. `cd web`でNext.jsのプロジェクトディレクトリに移動
1. `npm run dev`で開発サーバーを起動
1. ブラウザでlocalhost:3000にアクセスして、変更を確認可能

#### backendの開発
1. VS Codeでクローンしたプロジェクトのルートディレクトリを開く
1. `cmd + P`でコマンドパレットを開く
1. `> Open Folder in Container`を入力
1. 開発コンテナー：コンテナーで再度フォルダを開くを選択
1. Finderから`backend`ディレクトリを選択
1. `backend`コンテナ内に接続することができる。接続した状態で、コンテナ内の`backend`ディレクトリをVS Codeで開いている
1. `python manage.py runserver 0.0.0.0:8000` or `python manage.py runserver localhost:8000`で開発サーバーを起動
1. ブラウザで0.0.0.0:8000にアクセスして、変更を確認可能

## 参考リンク
<!--[Django × Next.js](https://qiita.com/sinnlosses/items/1e60f89dc3b347a2f3c0)-->
**[makeコマンドの設定](https://zenn.dev/genki86web/articles/6e61c167fbe926)**<br>
**[GitHubマークダウンチートシート](https://gist.github.com/mignonstyle/083c9e1651d7734f84c99b8cf49d57fa)**
