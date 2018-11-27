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
    id: "igo",
    number: 5,
    body: (
      <div className="code" key={"igo"}>
        <p>igo</p>
        <p>hoge</p>
        <p>棋譜投稿するやつ</p>
        <a href={"https://net-go.herokuapp.com/"}>ネット碁会所</a>
      </div>
    )
  },
  {
    id: "Markdown",
    number: 5,
    body: (
      <div className="code" key={"Markdown"}>
        <p>markdown</p>
        <p>hoge</p>
        <p>マークダウンで書くやつ</p>
        <a href={"https://a-markdown.herokuapp.com/"}>マークダウン</a>
      </div>
    )
  },
  {
    id: "Portfolio",
    number: 4,
    body: (
      <div className="code" key={"Portfolio"}>
        <p className="textYellow">## Portfolio Site</p>
        <br />
        <p>このサイトです。React.jsで実装しました。</p>
        <p>コンセプトはテキストエディタ風のポートフォリオサイト。</p>
        <p>
          今後要素を追加していくことを考え、できるだけComponentにまとめて作成しました。
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
          GitHub: <a href={"https://github.com/sitilma"}>Sou</a>
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
