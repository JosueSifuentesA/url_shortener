const ButtonComponent = ({
  textColor,
  buttonText,
  buttonColor,
  buttonFunction = null,
  borderRadius = 20,
}) => {
  let buttonReturned;

  const buttonWithFunction = (
    <button
      style={{
        backgroundColor: `${buttonColor}`,
        padding: "10px 35px",
        color: `${textColor}`,
        borderRadius: `${borderRadius}px`,
        border: "none",
      }}
      onClick={buttonFunction}
      type="submit"
    >
      {buttonText}
    </button>
  );

  const buttonWithoutFunction = (
    <button
      style={{
        backgroundColor: `${buttonColor}`,
        padding: "10px 35px",
        color: `${textColor}`,
        borderRadius: `${borderRadius}px`,
        border: "none",
        minHeight: "50px",
      }}
      type="submit"
    >
      {buttonText}
    </button>
  );
  buttonFunction != null
    ? (buttonReturned = buttonWithFunction)
    : (buttonReturned = buttonWithoutFunction);

  return buttonReturned;
};

export default ButtonComponent;
