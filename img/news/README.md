## ニュース写真の管理ルール

- 記事ごとに `YYYY-MM-DD-slug` フォルダを作成する（例: `2026-10-28-lowph-gifu/`）
- ファイル名はASCIIのみ（例: `01.jpg`, `poster.jpg`）
- 画像仕様: 長辺1600px、JPEG品質80目安、1枚300KB以下
- 上の3つは `python tools/prep_photos.py news YYYY-MM-DD-slug 元の写真…` を使えば自動で満たされる（撮影場所の EXIF も消える）
