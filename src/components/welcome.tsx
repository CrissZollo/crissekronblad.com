import wavy from "../img/wavy.svg";
import "../styles/welcome.scss";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="wavy-container">
        <div className="wavy">
          <img id="wavy-left" src={wavy} alt="Wavy" />
        </div>
        <div className="wavy">
          <img id="wavy-right" src={wavy} alt="Wavy" />
        </div>
      </div>
      <h1>Welcome</h1>
    </div>
  );
}
