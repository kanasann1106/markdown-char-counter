# Markdown 文字数カウンター

Markdown 文書をレンダリング後の正確な文字数で測定するツール

[🚀 こちらから利用できます](https://kanasann1106.github.io/markdown-char-counter/)

## 概要

このツールは、Markdown の生テキスト文字数と実際の表示文字数が異なるという一般的な問題を解決します。Markdown の入力とレンダリング後の HTML 出力の両方に対して、リアルタイムの文字数カウント機能を提供します。

## 機能

- **リアルタイム文字数カウント** - 4 つの異なる指標で測定:
  - 生入力文字数（Markdown 記法を含む）
  - 生入力文字数（空白除く）
  - レンダリング後文字数（HTML 出力）
  - レンダリング後文字数（空白除く）
- **ライブプレビュー** - レンダリングされた Markdown のリアルタイム表示
- **包括的 Markdown 対応** - 見出し、強調、リスト、コードブロック、引用、テーブル、リンクに対応

## 技術的実装

### コア技術

- HTML/CSS/JavaScript（フロントエンドのみ）
- [Marked.js](https://marked.js.org/) v12.0.0 - Markdown パースライブラリ
- クライアントサイド処理によるリアルタイム文字数カウント
- CDN 経由でのライブラリ読み込み

### アーキテクチャ

```
入力(Markdown) → Marked.js パーサー → HTMLレンダラー → 文字数カウンター
                                      ↓
                               ライブプレビュー表示
```

### 依存関係

- **Marked.js** (v12.0.0): Markdown → HTML 変換
  - CDN: `https://cdn.jsdelivr.net/npm/marked@12.0.0/marked.min.js`

## プロジェクト構造

```
markdown-char-counter/
├── index.html          # メインアプリケーションファイル
├── style.css          # レスポンシブCSSスタイル
├── script.js          # マークダウン処理・文字数カウントロジック
├── favicon.ico        # ファビコン
├── images/            # 画像リソース
│   └── ogp.png        # OGP画像
└── README.md          # プロジェクト文書
```

## 開発

### セットアップ

```bash
git clone https://github.com/kanasann1106/markdown-char-counter.git
cd markdown-char-counter
```

### ローカル開発

単純に`index.html`を Web ブラウザで開くだけです。ビルドプロセスやサーバーは不要です。

### デプロイメント

アプリケーションは GitHub Pages を使用してデプロイされています：

- **ライブ URL**: https://kanasann1106.github.io/markdown-char-counter/
- **デプロイメント**: main ブランチから GitHub Pages で自動デプロイ
