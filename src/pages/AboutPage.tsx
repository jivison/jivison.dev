import "./AboutPages.scss";
import PhotoOfMe from "../assets/photoOfMe.jpeg";

export function AboutPage() {
  return (
    <div className="about-page">
      <img
        className="photo"
        src={PhotoOfMe}
        alt="me with a spooky red background"
      />
      <small>A photo of me</small>

      <div className="text-body">
        <p>
          I'm currently working my way through a computer science degree at SFU!
        </p>

        <p>
          Aside from coding, I love listening to music. You can find me on
          various music sites:
          <ul>
            <li>
              <a href="https://last.fm/user/flushed_emoji">Last.fm</a>
            </li>
            <li>
              <a href="https://rateyourmusic.com/~flushed_emoji">
                RateYourMusic
              </a>
            </li>
            <li>
              <a href="https://www.discogs.com/user/flushed_emoji/collection">
                Discogs
              </a>
            </li>
            <li>
              <a href="https://wavy.fm/user/john">Wavy.fm</a>
            </li>
          </ul>
        </p>

        <p>
          I'm also a transit and urban planning nerd, you can see a map of
          everywhere I've been on transit{" "}
          <a href="https://www.google.com/maps/d/edit?mid=1wHhjeDCpz_E4EPFGMgj8hFU2NMtBVVb_&usp=sharing">
            here
          </a>
          .
        </p>

        <p>
          Sometimes I try learning other languages, so far I've tried learning
          French (somewhat successful), Korean (still giving it my best), German
          (complete fail), Spanish, Russian, and Mandarin (didn't get very far).
        </p>
      </div>
    </div>
  );
}
