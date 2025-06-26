# 農業AIハッカソン2025 - イベントLP

「農業AIハッカソン2025 ～農家と共に創る！生成AIで挑む、農業維新プロジェクト～」の公式イベントランディングページです。

**🔗 公開URL:** [https://noujoujin.github.io/agricultute-ai-hackathon/](https://noujoujin.github.io/agricultute-ai-hackathon/)

## ✨ 特徴 (Features)

-   **SEO & OGP対応:** 適切な`<meta>`タグ設定により、検索エンジンやSNSでの共有時に正しく情報が表示されます。
-   **動的なヒーローセクション:** 訪問者の心をつかむための、印象的なファーストビューアニメーション。
-   **スクロール連動アニメーション:** スクロールに合わせてコンテンツがスムーズに表示されることで、ユーザー体験を向上させます。
-   **インタラクティブなUI:** モーダルウィンドウやアコーディオン形式のFAQなど、情報を整理して見せるためのUIを実装。
-   **レスポンシブデザイン:** PCからスマートフォンまで、あらゆるデバイスで最適に表示されます。
-   **パフォーマンス:** GSAPとScrollTriggerを活用し、滑らかなアニメーションを実現。

## 📂 ファイル構成 (File Structure)

このプロジェクトは以下のファイルとフォルダで構成されています。
Use code with caution.
Markdown
.
├── README.md // このファイル (プロジェクトの説明)
├── index.html // サイトの骨格となるHTMLファイル
├── style.css // サイトの見た目を定義するCSSファイル
├── script.js // サイトの動きを制御するJavaScriptファイル
└── images/ // 画像を格納するフォルダ
├── kawakami.jpg // 川上牧場のプロフィール画像
├── nakaya.jpg // 彩園なかやのプロフィール画像
└── toyama.jpg // トヤマミカンのプロフィール画像

## 🚀 セットアップ (Setup)

このプロジェクトは、特別なビルドツールを必要としません。以下の手順で簡単にローカル環境で確認できます。

1.  **リポジトリをクローンまたはダウンロードします。**
    ```bash
    git clone https://github.com/your-username/agricultute-ai-hackathon.git
    ```
2.  **プロジェクトフォルダに移動します。**
    ```bash
    cd agricultute-ai-hackathon
    ```
3.  **`index.html`をブラウザで開きます。**
    これだけで、全てのコンテンツとアニメーションが動作します。

## 🛠️ 技術スタック (Tech Stack)

-   **HTML5**
-   **CSS3** (カスタムプロパティ, Flexbox, Grid)
-   **JavaScript (ES6+)**
-   **[Tailwind CSS](https://tailwindcss.com/)**: 迅速なUI開発のためのCSSフレームワーク (CDN経由)
-   **[GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)**: 高パフォーマンスなウェブアニメーションライブラリ (CDN経由)

## 🎨 カスタマイズ (Customization)

-   **テキストとリンク:** `index.html` 内のテキストやリンクを直接編集してください。
-   **画像:** `images/` フォルダ内にご自身の画像（例: `kawakami.jpg`）を配置し、`index.html` 内の `<img src="...">` のパスを更新してください。
-   **色:** `style.css` 内のカラーコード (`#1a202c` など) や、`index.html` 内のTailwind CSSのクラス名 (`bg-emerald-500` など) を変更することで、サイト全体の配色をカスタマイズできます。
-   **アニメーション:** `script.js` 内のGSAPのコード（`duration`, `delay`, `ease` など）の値を調整することで、アニメーションの挙動を細かく変更できます。
-   **SEO/OGP情報:** `index.html` の`<head>`セクション内の`<meta>`タグや`<title>`タグの内容を、必要に応じて更新してください。
