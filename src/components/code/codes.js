import React from "react";

export const Codes = [
  {
    id: "PHP",
    number: 4,
    body: (
      <div className="code" key={"PHP"}>
        <p>php</p>
        <p>hoge</p>
        <a href={"http://php.net/manual/ja/index.php"}>phpドキュメント</a>
      </div>
    )
  },
  {
    id: "Ruby",
    number: 4,
    body: (
      <div className="code" key={"Ruby"}>
        <p>ruby</p>
        <p>hoge</p>
        <p>繰り返しが書きやすい</p>
      </div>
    )
  },
  {
    id: "JavaScript",
    number: 4,
    body: (
      <div className="code" key={"JavaScript"}>
        <p>javascript</p>
        <p>hoge</p>
        <p>ES6って凄い</p>
      </div>
    )
  },
  {
    id: "Docker",
    number: 4,
    body: (
      <div className="code" key={"Docker"}>
        <p>docker</p>
        <p>hoge</p>
        <p>Compose使ってる。</p>
      </div>
    )
  },
  {
    id: "GoApp",
    number: 15,
    body: (
      <div className="code" key={"GoApp"}>
        <p className="textYellow">## ネット碁会所</p>
        <br />
        <p>
          Heroku:{" "}
          <a
            href="https://net-go.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ネット碁会所
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/sitilma/Go-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go-App
          </a>
        </p>
        <br />
        <p>
          プログラミングを学び始めて作り上げたWebアプリであり、Railsで制作しました。
        </p>
        <p>囲碁の棋譜を投稿し、語り合うWebサービスです。</p>
        <p>
          棋譜の部分はJavaScriptのライブラリでできており、棋譜データがあれば簡単に投稿、閲覧ができるようになっています。
        </p>
        <p>
          今後、大幅な改修を行いサービスとして運用していきたいという思いもあります。
        </p>
      </div>
    )
  },
  {
    id: "Markdown",
    number: 15,
    body: (
      <div className="code" key={"Markdown"}>
        <p className="textYellow">## Article Markdown</p>
        <br />
        <p>
          Heroku:{" "}
          <a
            href="https://a-markdown.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            マークダウン
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/sitilma/Article-Markdown"
            target="_blank"
            rel="noopener noreferrer"
          >
            Article-Markdown
          </a>
        </p>
        <br />
        <p>Railsで制作したMarkdown形式の記事投稿サービスです。</p>
        <p>Qiitaを参考にして作成しました。</p>
        <p>
          初めて製作したそれなりの規模のサービスであり、enumやscopeで様々な機能を作ったのは大きな経験となりました。
        </p>
        <p>下書き機能や編集履歴機能等を備えています。</p>
      </div>
    )
  },
  {
    id: "Portfolio",
    number: 14,
    body: (
      <div className="code" key={"Portfolio"}>
        <p className="textYellow">## Portfolio Site</p>
        <br />
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/sitilma/React-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            React-Portfolio
          </a>
        </p>
        <br />
        <p>このサイトです。React.jsで実装しました。</p>
        <p>reduxでstateを管理し現在表示されている部分を特定しています。</p>
        <p>コンセプトはテキストエディタ風のポートフォリオサイト。</p>
        <p>
          今後要素を追加していくことを考え、できるだけComponentにまとめて作成しました。
        </p>
        <p>
          コンセプトがテキストエディタということもあり、レスポンシブ対応に出来なかったのが心残りです。
        </p>
      </div>
    )
  },
  {
    id: "Laravel",
    number: 4,
    body: (
      <div className="code" key={"Laravel"}>
        <p>laravel</p>
        <p>hoge</p>
        <p>今やってるやつ</p>
      </div>
    )
  },
  {
    id: "About",
    number: 7,
    body: (
      <div className="code" key={"About"}>
        <p className="textYellow">## MyProfile</p>
        <br />
        <p>Name: 西村 爽(Sou Nishimura)</p>
        <p>Birth: 1997/7/19</p>
        <p>
          GitHub:{" "}
          <a
            href={"https://github.com/sitilma"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sou
          </a>
        </p>
        <p>Mail: sounishimura7@gmail.com</p>
      </div>
    )
  },
  {
    id: "Contact",
    number: 5,
    body: (
      <div className="code" key={"Contact"}>
        <p className="textYellow">## Contact</p>
        <br />
        <p>メールアドレスからお問い合わせください。</p>
        <p>sounishimura7@gmail.com</p>
      </div>
    )
  }
];
