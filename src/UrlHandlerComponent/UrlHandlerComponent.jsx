import "./urlHandlerComponent.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const UrlHandlerComponent = ({ originalLink, shortedLink, buttonText }) => {
  return (
    <div className="componentContainer_urlHandler">
      <label className="urlHandler_label">{originalLink}</label>
      <hr></hr>
      <div className="urlHandler_resultHandler">
        <a className="resultHandler_link">{shortedLink}</a>
        <ButtonComponent
          buttonText={buttonText}
          buttonColor="var(--cyan)"
          textColor={"white"}
          borderRadius={0}
        ></ButtonComponent>
      </div>
    </div>
  );
};

export default UrlHandlerComponent;
