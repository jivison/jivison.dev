import "./ProjectsPage.scss";

export function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="terminal">
        <h1 className="projects-title">Projects</h1>

        <div className="project">
          <p className="project-title">Gowon</p>
          <span>(2020-)</span>
          <p>
            &#8627; <a href="https://gowon.ca">Homepage</a>,{" "}
            <a href="https://github.com/gowon-bot/gowon">Github</a>
          </p>

          <p>
            A Last.fm Discord bot, built with Typescript, Go, Ruby, Postgres and
            GraphQL.
          </p>
        </div>

        <div className="project">
          <p className="project-title">jivison.dev</p>
          <span>(2022-)</span>
          <p>
            &#8627; <a href="https://github.com/jivison/jivison.dev">Github</a>
          </p>

          <p>This very website, built with Typescript and React.</p>
        </div>

        <div className="project">
          <p className="project-title">Mino</p>
          <span>(2019)</span>
          <p>
            &#8627; <a href="https://github.com/jivison/mino-client">Github</a>
          </p>

          <p>
            My final project I made for the developer bootcamp I was in, built
            with Rails and React.
          </p>
        </div>

        <div className="project">
          <p className="project-title">"Text Based Game"</p>
          <span>(2017)</span>
          <p>
            &#8627;{" "}
            <a href="https://github.com/jivison/Text-Based-Game">Github</a>
          </p>

          <p>
            WARNING: BAD CODE. My first application ever, never completed.
            (Poorly) built with Python.
          </p>
        </div>
      </div>
    </div>
  );
}
