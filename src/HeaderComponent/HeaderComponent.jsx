import { useState } from "react";
import iconLogo from "../assets/logo.svg";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import iconMenu from "../assets/menu.svg";
import "./headerComponent.css";
const HeaderdComponent = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <header className="header">
      <div className="header_navBar">
        <img
          src={iconLogo}
          alt="Web logo"
          style={{ maxWidth: "150px", width: "30vw", height: "5vh" }}
        />

        <div className="navBar_options">
          <div className="options_data">
            <label>Features</label>
            <label>Pricing</label>
            <label>Resources</label>
          </div>

          <div className="options_login">
            <label>Login</label>
            <ButtonComponent
              buttonText={"Sign Up"}
              buttonColor={"var(--cyan)"}
              textColor={"white"}
              borderRadius={60}
            />
          </div>
        </div>

        <div
          className="headerOptions"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <img src={iconMenu} style={{ maxWidth: "50px" }} alt="Web logo" />
        </div>
      </div>

      {clicked == true && (
        <div className="optionContainer">
          <label className="optionContainer_label">Features</label>
          <label className="optionContainer_label">Pricing</label>
          <label className="optionContainer_label">Resources</label>
          <hr style={{ width: "100%" }}></hr>
          <label className="optionContainer_label">Login</label>
          <ButtonComponent
            buttonText={"Sign Up"}
            buttonColor={"var(--cyan)"}
            textColor={"white"}
            borderRadius={60}
          />
        </div>
      )}
    </header>
  );
};
export default HeaderdComponent;
