import wavy from "../img/wavy_brown.svg";
import "../styles/welcome.scss";

export default function Welcome() {
  return (
    <div className="welcome-container" id="welcome">
      {/*
      <div className="wavy-container">
        <div className="wavy">
          <img id="wavy-left" src={wavy} alt="Wavy" />
        </div>
        <div className="wavy">
          <img id="wavy-right" src={wavy} alt="Wavy" />
        </div>
      </div>
      */}
      <div className="welcome-text-container">
        <h1 id="welcome-title">Hello World</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          ipsam laudantium dolorem sit doloremque rem atque repellendus nisi,
          odio molestiae fugiat similique deleniti. Eos magni voluptatibus, ipsa
          sed ab eveniet? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Doloremque perferendis, at laboriosam nobis similique quibusdam
          aspernatur? Omnis adipisci temporibus illo quos aliquam quaerat
          recusandae? Non id quas corrupti ipsam reprehenderit!
        </p>
      </div>
    </div>
  );
}
