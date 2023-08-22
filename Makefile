.PHONY: backend
.PHONY: frontend

# 初回起
## foregroundで起動
up:
	docker compose up
## backgroundで起動
upd:
	docker compose up -d
# 停止
## backgroundで起動しているとき
stop:
	docker compose stop

# 再起動 or 実装変更を反映させる
restart:
	docker comopse restart

# コンテナの確認
ps:
	docker compose ps
# ログ
log:
	docker-compose logs -f --tail="5" -t

# 停止&削除
## 停止&削除(コンテナ・ネットワーク)
down:
	docker-compose down
## 停止＆削除（コンテナ・ネットワーク・イメージ）
downrmi:
	docker-compose down --rmi all
## 停止＆削除（コンテナ・ネットワーク・ボリューム）
downv:
	downdocker-compose down -v
destroy:
	docker compose down --rmi all --volumes --remove-orphans

# コンテナにssh接続
frontend:
	docker compose exec frontend bash
	# docker compose exec frontend bash -c 'cd web'
backend:
	docker compose exec backend bash

## docker-compose.ymlを編集したときに実行。docker-composeの再ビルド
container:
	docker compose up -d --build
