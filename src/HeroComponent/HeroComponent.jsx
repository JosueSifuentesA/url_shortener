import iconWorking from "../assets/illustration-working.svg";
import "./heroComponent.css";

const HeroComponent = ({ title, paragraph, buttonText }) => {
  return (
    <section className="heroComponent">
      <div>
        <img className="heroComponent_img" src={iconWorking} />
      </div>
      <div className="heroComponent_info">
        <h1 className="info_h1">{title}</h1>
        <p className="info_paragraph">{paragraph}</p>
        <button className="buttonText">{buttonText}</button>
      </div>
    </section>
  );
};

export default HeroComponent;
