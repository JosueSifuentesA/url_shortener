import "./urlHandlerComponent.css";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useEffect, useState } from "react";
const UrlHandlerComponent = ({
  originalLink,
  shortedLink,
  buttonText,
  dataFunction,
}) => {
  const [newText, setNewText] = useState(buttonText);
  const [clicked, setClicked] = useState(false);
  const [buttonColor, setButtonColor] = useState("var(--cyan)");

  const sendData = (data) => {
    dataFunction(data);
  };

  useEffect(() => {
    if (clicked == true) {
      setButtonColor("var(--darkViolet)");
    } else {
      setButtonColor("var(--cyan)");
    }
  }, [clicked]);

  /*que se reciva una prop que setee el valor de clicked a false cuando el usuario presiona el boton de otro componente
    esto tiene qu estar fuera del return 
  */

  return (
    <div className="componentContainer_urlHandler">
      <label className="urlHandler_label">{originalLink}</label>
      <hr></hr>
      <div className="urlHandler_resultHandler">
        <a className="resultHandler_link">{shortedLink}</a>
        <ButtonComponent
          buttonText={newText}
          buttonColor={buttonColor}
          textColor={"white"}
          borderRadius={0}
          buttonFunction={() => {
            navigator.clipboard.writeText(shortedLink);
            setNewText("Copied!");
            setClicked(true);
            sendData(clicked);

            setTimeout(() => {
              setClicked(false);
              setNewText(buttonText);
            }, 1000);
          }}
        ></ButtonComponent>
      </div>
    </div>
  );
};

export default UrlHandlerComponent;
