import iconLogo from "../assets/logo.svg";

const HeaderdComponent = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <img src={iconLogo} />
      <div
        onClick={() => {
          alert("clicked");
        }}
      >
        <img src={iconLogo} />
      </div>
    </header>
  );
};
export default HeaderdComponent;
