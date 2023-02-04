import ButtonComponent from "../ButtonComponent/ButtonComponent";
import UrlHandlerComponent from "../UrlHandlerComponent/UrlHandlerComponent";
import "./urlComponent.css";

const UrlComponent = () => {
  return (
    <div className="componentContainer">
      <div className="componentContainer_inputHandler">
        <input placeholder="Shorten a link here..." />
        <ButtonComponent
          buttonText={"Shorten it!"}
          buttonColor="var(--cyan)"
          textColor={"white"}
          borderRadius={0}
        ></ButtonComponent>
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
