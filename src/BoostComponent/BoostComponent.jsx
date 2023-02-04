import "./boostComponent.css";
const BoostComponent = ({ title, buttonText }) => {
  return (
    <section className="boostSection">
      <h1 className="boostSection_h1">{title}</h1>
      <button className="boostSection_button">{buttonText}</button>
    </section>
  );
};

export default BoostComponent;
