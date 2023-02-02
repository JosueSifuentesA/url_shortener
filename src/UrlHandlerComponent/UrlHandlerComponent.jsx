const UrlHandlerComponent = ({ originalLink, shortedLink, buttonText }) => {
  return (
    <div className="componentContainer_urlHandler">
      <label>{originalLink}</label>
      <div className="urlHandler_resultHandler">
        <span>{shortedLink}</span>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default UrlHandlerComponent;
