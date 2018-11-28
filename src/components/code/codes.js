import React from "react";

export const Codes = [
  {
    id: "PHP",
    number: 4,
    body: (
      <div className="code" key={"PHP"}>
        <p className="textYellow">## PHP</p>
        <br />
      </div>
    )
  },
  {
    id: "Ruby",
    number: 6,
    body: (
      <div className="code" key={"Ruby"}>
        <p className="textYellow">## Ruby</p>
        <br />
        <p>
          最初に学んだプログラミング言語であり、非常に書きやすいと感じています。
        </p>
        <p>
          RubyのフレームワークであるRuby on Railsを使った
          <a
            href="https://net-go.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ネット碁会所
          </a>
          や
          <a
            href="https://a-markdown.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Markdown
          </a>
          の開発などに使用しました。
        </p>
      </div>
    )
  },
  {
    id: "JavaScript",
    number: 14,
    body: (
      <div className="code" key={"JavaScript"}>
        <p className="textYellow">## JavaScript</p>
        <br />
        <p>
          出来ることが多く、Web制作に必須であり、非常に学びがいのある言語だと思います。
        </p>
        <p>このサイトもJavaScriptとそのライブラリであるReactで制作しました。</p>
        <p>
          個人的にはGASでスプレッドシートを操作して入力を自動化するなどに使用しています。
        </p>
        <br />
        <p>
          Node.jsでのサーバーサイドやReact Native,Vue
          Nativeでのネイティブアプリ制作ができることもあり非常に興味をひかれています。
        </p>
      </div>
    )
  },
  {
    id: "Docker",
    number: 6,
    body: (
      <div className="code" key={"Docker"}>
        <p className="textYellow">## Docker</p>
        <br />
        <p>
          主にDockerやDocker
          Composeを用いてコンテナ環境での開発のために使用しています。
        </p>
        <p>
          一度環境を整備してしまえば、簡単に使いまわせるのは素晴らしいです。
        </p>
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
            Markdown
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
    number: 10,
    body: (
      <div className="code" key={"About"}>
        <p className="textYellow">## MyProfile</p>
        <br />
        <p>Name: 西村 爽(Sou Nishimura)</p>
        <p>Birth: 1997/7/19</p>
        <p>Mail: sounishimura7@gmail.com</p>
        <br />
        <p>
          <a
            href={"https://github.com/sitilma"}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href={"https://qiita.com/sitilma"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Qiita
          </a>
        </p>
        <p>
          <a
            href={"https://twitter.com/sitilma"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </p>
      </div>
    )
  },
  {
    id: "Contact",
    number: 7,
    body: (
      <div className="code" key={"Contact"}>
        <p className="textYellow">## Contact</p>
        <br />
        <p>Twitterもしくはメールアドレスからお問い合わせください。</p>
        <br />
        <p>
          <a
            href={"https://twitter.com/sitilma"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </p>
        <p>sounishimura7@gmail.com</p>
      </div>
    )
  }
];
