import UrlHandlerComponent from "../UrlHandlerComponent/UrlHandlerComponent";
import "./urlComponent.css";

const UrlComponent = () => {
  return (
    <div className="componentContainer">
      <div className="componentContainer_inputHandler">
        <input placeholder="Shorten a link here..." />
        <button>Shorten it!</button>
      </div>

      <UrlHandlerComponent
        originalLink={"https://wwwwadsadsa.io"}
        shortedLink={"https//rel.ink/dsada"}
        buttonText={"copy"}
      />
    </div>
  );
};

export default UrlComponent;
