import "./urlHandlerComponent.css";

const UrlHandlerComponent = ({ originalLink, shortedLink, buttonText }) => {
  return (
    <div className="componentContainer_urlHandler">
      <label className="urlHandler_label">{originalLink}</label>
      <hr></hr>
      <div className="urlHandler_resultHandler">
        <a className="resultHandler_link" href={shortedLink}>
          {shortedLink}
        </a>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default UrlHandlerComponent;
