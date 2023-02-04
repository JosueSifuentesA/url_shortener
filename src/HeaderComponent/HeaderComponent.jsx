import iconLogo from "../assets/logo.svg";

const HeaderdComponent = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <img src={iconLogo} alt="Web logo" />
      <div
        onClick={() => {
          alert("clicked");
        }}
      >
        <img src={iconLogo} alt="Web logo" />
      </div>
    </header>
  );
};
export default HeaderdComponent;
