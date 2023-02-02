import iconWorking from "../assets/illustration-working.svg";

const HeroComponent = ({ title, paragraph, buttonText }) => {
  return (
    <section className="heroComponent">
      <div>
        <img src={iconWorking} />
      </div>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <button className="buttonText">{buttonText}</button>
    </section>
  );
};

export default HeroComponent;
