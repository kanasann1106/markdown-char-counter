# Markdown 文字数カウンター

Markdown文書をレンダリング後の正確な文字数で測定するツール

[🚀 こちらから利用できます](https://kanasann1106.github.io/markdown-char-counter/)

## 概要

このツールは、Markdownの生テキスト文字数と実際の表示文字数が異なるという一般的な問題を解決します。Markdownの入力とレンダリング後のHTML出力の両方に対して、リアルタイムの文字数カウント機能を提供します。

## 機能

- **リアルタイム文字数カウント** - 4つの異なる指標で測定:
  - 生入力文字数（Markdown記法を含む）
  - 生入力文字数（空白除く）
  - レンダリング後文字数（HTML出力）
  - レンダリング後文字数（空白除く）
- **ライブプレビュー** - レンダリングされたMarkdownのリアルタイム表示
- **包括的Markdown対応** - 見出し、強調、リスト、コードブロック、引用、テーブル、リンクに対応

## 技術的実装

### コア技術
- 純粋なHTML/CSS/JavaScript（外部依存なし）
- クライアントサイドMarkdownパース・レンダリング
- リアルタイムテキスト処理・文字数カウント

### アーキテクチャ
```
入力(Markdown) → パーサー → HTMLレンダラー → 文字数カウンター
                              ↓
                         ライブプレビュー表示
```

## プロジェクト構造

```
markdown-char-counter/
├── index.html          # メインアプリケーションファイル
└── README.md          # プロジェクト文書
```

## 開発

### セットアップ
```bash
git clone <repository-url>
cd markdown-char-counter
```

### ローカル開発
単純に`index.html`をWebブラウザで開くだけです。ビルドプロセスやサーバーは不要です。

### デプロイメント
アプリケーションはGitHub Pagesを使用してデプロイされています：
- **ライブURL**: https://kanasann1106.github.io/markdown-char-counter/
- **デプロイメント**: mainブランチからGitHub Pagesで自動デプロイ
