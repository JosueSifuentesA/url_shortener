import iconWorking from "../assets/illustration-working.svg";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./heroComponent.css";

const HeroComponent = ({ title, paragraph, buttonText }) => {
  return (
    <section className="heroComponent">
      <div>
        <img
          className="heroComponent_img"
          src={iconWorking}
          alt="Ilustration of somebody working in a desk"
        />
      </div>
      <div className="heroComponent_info">
        <h1 className="info_h1">{title}</h1>
        <p className="info_paragraph">{paragraph}</p>
        <ButtonComponent
          buttonText={buttonText}
          buttonColor="var(--cyan)"
          textColor={"white"}
        ></ButtonComponent>
      </div>
    </section>
  );
};

export default HeroComponent;
