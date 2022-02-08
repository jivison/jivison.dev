import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export function Navbar() {
  const seperators = [
    ">",
    "~",
    ":",
    ";",
    "()",
    "<<",
    "!",
    "?",
    ",",
    ".",
    "$",
    "[]",
    "/",
    "™",
    "_",
    "+",
    ".js",
    "-",
    "*",
    "",
  ];

  const [sep, setSep] = useState(
    seperators[Math.floor(Math.random() * seperators.length)]
  );

  const onclick = () => {
    setSep(seperators[Math.floor(Math.random() * seperators.length)]);
  };

  return (
    <div className="Navbar">
      <p className="tag" onClick={onclick}>
        john{sep}
      </p>
      <div className="links">
        <Link className="link" to="/">
          home
        </Link>
        {sep}
        <Link className="link" to="/coding">
          coding
        </Link>
        {sep}
        <Link className="link" to="/about">
          about
        </Link>
        {sep}
        <Link className="link" to="/projects">
          projects
        </Link>
        {sep}
      </div>
      <div className="grow" />
    </div>
  );
}
