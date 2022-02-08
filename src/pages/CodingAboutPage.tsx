import "./AboutPages.scss";

export function CodingAboutPage() {
  return (
    <div className="coding-about-page">
      <div className="code block">
        <p>
          <span className="code keyword">export class</span> John &#123;
        </p>

        <div className="indented">
          <p>
            name = <span className="code string">"John"</span>;
          </p>
          <p>
            age = <span className="code number">20</span>;
          </p>
          <p>
            location = &#123;
            <p className="indented">
              <p>
                city: <span className="code string">"Vancouver"</span>,
              </p>
              <p>
                country: <span className="code string">"Canada"</span>
              </p>
            </p>
            &#125;;
          </p>
        </div>
        <p>&#125;</p>
      </div>
      <br />

      <div className="text-body">
        <p>
          Hi, I'm John, a full stack developer from Vancouver, BC! I've been
          coding since 10th grade, when I started trying to make the worst
          website I possibly could. It involved getting the whole webpage to
          spin around, lots of shaking text, and now painfully unfunny jokes.
        </p>

        <p>
          Now, I like to make the <i>best</i> things I can, although I don't
          always succeed. My favourite languages, tools, and frameworks to use
          are:
        </p>

        <ul>
          <li>Typescript</li>
          <li>React</li>
          <li>Go</li>
          <li>GraphQL</li>
          <li>Ruby</li>
          <li>Docker (Compose) and CircleCI</li>
          <li>Postgres</li>
        </ul>

        <p>My favourite things to work on are:</p>

        <ul>
          <li>Discord bots</li>
          <li>Microservices</li>
          <li>Web apps</li>
          <li>
            <span style={{ textDecoration: "line-through" }}>
              Computer science assignments
            </span>
          </li>
        </ul>

        <p>
          Right now, most of my time is sucked up by{" "}
          <a href="https://github.com/gowon-bot">Gowon</a>, a Last.fm discord
          bot.
        </p>

        <p>
          Feel free to get in contact if you have any questions about anything
          I've made!
        </p>
      </div>
    </div>
  );
}
