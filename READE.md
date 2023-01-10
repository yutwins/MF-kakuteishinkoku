## コーディングルール

- 文字コード：UTF-8
- 改行コード：LF
- ファイル参照形式：相対パスを使用する
  例：`img src="./path/to/file.png"`
  ※ `og:image`、YouTube、3rd party JS など絶対パスが必須のケースを除く

## ターゲットブラウザ

- Chrome, Firefox, Safari の最新版
- （Internet Explorer 11）
  - 最低限必要なレイアウトと機能の提供のみサポートする
    ※ JavaScript で追加の実装をしないでください
  - IE 未対応で問題ない機能の例
    - Sticky positioning
    - Responsive image
    - Intersection Observer を利用した表現
    - Smooth scroll
- 未対応で問題ない機能の例
  - Lazy loading (img, iframe)

### 画像の取り扱い

予算・納期の都合もあるため、以下の全てを行う必要はありませんが善処をお願いします。

- **【必須】**Retina Display 対応を行うこと
  - 昨今は、デバイスピクセル比が3や4の端末も存在するため、可能な限りベクターデータの SVG を使用することを推奨します
- [ImageAlpha](https://pngmini.com/), [ImageOptim](https://imageoptim.com/mac) または同等の機能を持つアプリ等で十分に最適化すること
  - 透過 png は、ImageAlpha -> ImageOptim（圧縮なし）の順で最適化すると効果が高いです
- Responsive Web Design 対応を行うこと
  - `picture` 要素、 `img` 要素の `srcset` 属性などでターゲットブラウザごとに適切なサイズ・フォーマットを提供する
  - スマートフォン・PC という分け方ではなく、様々な画面サイズで確認する
- WordPress 上で使用する場合
  - svg ではなく、2倍以上のサイズの png, jpg, webp 等を利用してください
  - 事前に `picture` 要素、 `img` 要素の `srcset` 属性などの利用可否を確認してください
  - ファイル名には prefix を追加してください
    - 例：lp-img-main.png

### フォントの取り扱い

- サブセット化した Noto Sans CJK JP をセルフホスティングで使用します
- パフォーマンスへの考慮として PC でのみ Web フォントを使用します
- 上記2点は共通のスタイルとして定義済みです
- その他の Web フォントは原則的に利用不可とします
- `font-family` の再定義は原則的に禁止します
  - フォームなど共通のスタイルがカバーしていない部分は定義可
  - monospace など共通のスタイルがカバーしていない部分は定義可
  - Marketo の form など外部サービスが提供する CSS は上書可

### 色の取り扱い

- 共通のスタイルで定義された [Custom Properties](https://developer.mozilla.org/ja/docs/Web/CSS/Using_CSS_custom_properties) を使用してください
- その他の色の使用は原則的に禁止とします

### HTML について

予算・納期の都合もあるため、状況に応じてご相談ください

- `img` 要素には必ず `width`, `height` 属性を定義してください
- `img` 要素には必ず `alt` 属性を定義し適切な代替テキストを定義してください
  - 例外：「アイコン＋テキスト」の様な表現の場合
    - まずは、CSS の利用を検討してください
    - `img` 要素を使用する場合
      - `alt` 属性をカラで定義する
      - `role="presentation"` を追加する
- ファーストビュー以外で使用する `img`, `iframe` 要素には `loading="lazy"` を追加してください
- `iframe` 要素には適切な `title` 属性を定義してください
- `header`, `main`, `footer` 等、最低限のランドマーク要素を使用してください
- 正しいアウトラインをキープしてください
  - 基本的には `hn` 要素でのアウトラインを推奨します
- `a` 要素で `target="_blank"` 属性を使用する場合、必ず `rel="noopener"` を追加してください

※ [biz.moneyforward.com/](biz.moneyforward.com/) の、画像、CSS、JS 等を使用する際は直接参照するのではなく、ダウンロードしたファイルを利用してください。
※ 制作時に Google Chrome の DevTools に内包される Lighthouse で検証を行うと上記の確認が容易です。

### CSS について

- Media Queries は小さなデバイスのための CSS を基本として、 min-width で上書きしてください
  - 例外として `(max-width: 320px)` は利用可とします（Viewport 320px のデバイスはシェアが低いため）

### 外部 JavaScript ライブラリの取り扱い

予算・納期の都合もあるため、状況に応じてご相談ください

- まず、必須の機能以外は利用を避けてください
- `head` 要素内で外部 JavaScript を読み込まないでください
  - `body` 要素の終了付近を利用してください
- 初回レンダリング時に必須の機能以外は、onload イベントや scroll イベントなどで遅延させてください
- 不必要な jQuery の利用は避けてください
  - ライブラリ等を検討する際、jQuery が不要なタイプを検討していください

※ JavaScript 等の外部ライブラリを使用する際は、最低限、セキュリティの問題が発生しないか確認してください

### テンプレートファイル等について

```
template/
 ├ img/       ... 画像ファイルをこのディレクトリに追加してください
 └ index.html ... HTML, CSS, JS をこのファイル内に記載してください
```

#### テンプレートについて

- L5: WordPress 上で使用する場合は、原則的に `noindex` のみ可
- L15-22: そのページの情報を記載してください
- L28: CSS を追加してください
- L35: HTML を追加してください
- L37: 必要であれば、JS を追加してください。
  不要なコメントを削除してください


＜Todo＞
・フォントファミリーを再度確認する！Inter部分が抜け落ちている可能性がある
・料金プランセクションのSP版完成させる
・SP版フッターボタン（CTAエリア？）の作成
・料金シュミレーションセクションの仕様確認
・QAセクションの内容整理
・各種リンク先設定
・細かい修正

＜Components＞

<!-- ボタン -->
<a href="#" class="btn"><span class="btn__text">無料で始める</span></a>

<!-- セクションタイトル -->
<h2 class="section__title">ここにテキストが入ります</h2>

<!-- セクションサブタイトル -->
<p class="section__subTitle">ここにテキストが入ります</p>

<!-- Noto sans JP -->
font-family: 'Noto Sans JP', sans-serif;

<!-- Poppins -->
font-family: 'Poppins', sans-serif;

<!-- Inter -->
font-family: 'Inter', sans-serif;

＜Memo＞
・「入力から申告まで、「確定申告」に必要な機能を網羅」のリストの上下余白を微調整しております。

・reasonセクションアイテム2の「最新の青色申告特別控除にも対応」のSP時改行に違和感があったので微調整を行った
