const markdownInput = document.getElementById('markdown-input');
const preview = document.getElementById('preview');
const rawCount = document.getElementById('raw-count');
const rawCountNoSpace = document.getElementById('raw-count-no-space');
const renderedCount = document.getElementById('rendered-count');
const renderedCountNoSpace = document.getElementById('rendered-count-no-space');

// HTMLタグを除去してテキストのみを取得する関数
function getTextContent(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
}

// 文字数をカウントする関数
function updateCounts() {
    const rawText = markdownInput.value;
    const rawTextLength = rawText.length;
    const rawTextNoSpaceLength = rawText.replace(/\s/g, '').length;

    if (rawText.trim() === '') {
        preview.innerHTML = '<p style="color: #999; text-align: center; margin-top: 50px;">左側にマークダウンを入力すると、ここにプレビューが表示されます</p>';
        rawCount.textContent = '0';
        rawCountNoSpace.textContent = '0';
        renderedCount.textContent = '0';
        renderedCountNoSpace.textContent = '0';
        return;
    }

    // マークダウンをHTMLに変換
    const htmlContent = marked.parse(rawText);
    preview.innerHTML = htmlContent;

    // レンダリング後のテキストを取得
    const renderedText = getTextContent(htmlContent);
    const renderedTextLength = renderedText.length;
    const renderedTextNoSpaceLength = renderedText.replace(/\s/g, '').length;

    // カウント結果を更新
    rawCount.textContent = rawTextLength.toLocaleString();
    rawCountNoSpace.textContent = rawTextNoSpaceLength.toLocaleString();
    renderedCount.textContent = renderedTextLength.toLocaleString();
    renderedCountNoSpace.textContent = renderedTextNoSpaceLength.toLocaleString();
}

// スクロール同期用のフラグ
let isScrollSyncing = false;

// スクロール同期機能
function syncScroll(sourceElement, targetElement) {
    if (isScrollSyncing) return;
    
    isScrollSyncing = true;
    
    const sourceScrollTop = sourceElement.scrollTop;
    const sourceScrollHeight = sourceElement.scrollHeight - sourceElement.clientHeight;
    const scrollRatio = sourceScrollHeight > 0 ? sourceScrollTop / sourceScrollHeight : 0;
    
    const targetScrollHeight = targetElement.scrollHeight - targetElement.clientHeight;
    const targetScrollTop = Math.round(scrollRatio * targetScrollHeight);
    
    targetElement.scrollTop = targetScrollTop;
    
    // 少し遅延してフラグをリセット
    setTimeout(() => {
        isScrollSyncing = false;
    }, 10);
}

// 入力エリアのスクロールイベント
markdownInput.addEventListener('scroll', () => {
    syncScroll(markdownInput, preview);
});

// プレビューエリアのスクロールイベント
preview.addEventListener('scroll', () => {
    syncScroll(preview, markdownInput);
});

// 入力時にリアルタイムで更新
markdownInput.addEventListener('input', updateCounts);

// 初期化
updateCounts();

// サンプルテキストを設定
markdownInput.value = `# サンプルマークダウン

これは**マークダウン文字数カウントツール**のサンプルです。

## 特徴

- マークダウンをリアルタイムでプレビュー
- レンダリング後の正確な文字数を計算
- シンプルで使いやすいUI

### コードブロックの例

\`\`\`javascript
function hello() {
    console.log("Hello, World!");
}
\`\`\`

> これは引用文です。
> マークダウン記法を使って書かれています。

1. 番号付きリスト
2. アイテム2
3. アイテム3

**太字**や*斜体*、~~取り消し線~~なども正確にカウントされます。

[リンクテキスト](https://example.com)

| 項目 | 説明 |
|------|------|
| HTML | マークアップ言語 |
| CSS | スタイルシート |
| JS | プログラミング言語 |`;

// サンプルテキストでカウントを更新
updateCounts();