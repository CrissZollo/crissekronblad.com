import "../styles/intro.scss";
import wavy from "../img/wavy_green.svg";

export default function Intro() {
  return (
    <div className="intro-container">
      <h1 id="intro-title">Hello World</h1>
      <h3 id="intro-scrolldown-text">Scroll Down</h3>
      <img className="wavy-full" src={wavy} alt="Wavy" />
    </div>
  );
}
