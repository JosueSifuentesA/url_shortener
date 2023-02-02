import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HeaderdComponent from "./HeaderComponent/HeaderComponent";
import HeroComponent from "./HeroComponent/HeroComponent";
import UrlComponent from "./UrlComponent/UrlComponent";
import DetailComponent from "./DetailComponent/DetailComponent";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App">
      <HeaderdComponent />
      <HeroComponent
        title={"More than just shorter links"}
        paragraph={
          "Build your brand's recognition and get detailed insights on how your links are performing"
        }
        buttonText={"Get Started"}
      />

      <UrlComponent />
      <DetailComponent />
    </main>
  );
}

export default App;
