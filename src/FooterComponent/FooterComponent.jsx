import iconFacebook from "../assets/icon-facebook.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconInstagram from "../assets/icon-instagram.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import "./footerComponentStyle.css";

const list = {
  Features: ["Link shortening", "Branded Links", "Analytics"],
  Rerources: ["Blog", "Developers", "Support"],
  Company: ["About", "Our Team", "Carrers", "Contact"],
};

const FooterComponent = () => {
  return (
    <section className="footerSection">
      {Object.entries(list).map(([key, value]) => (
        <div className="footerSection_infoContainer" key={key}>
          <h1 className="infoContainer_h1">{key}:</h1>
          {value.map((item) => (
            <span className="infoContainer_span" key={item}>
              {item}
            </span>
          ))}
        </div>
      ))}

      <div className="footerSection_media">
        <img src={iconFacebook} />
        <img src={iconTwitter} />
        <img src={iconPinterest} />
        <img src={iconInstagram} />
      </div>
    </section>
  );
};

export default FooterComponent;
