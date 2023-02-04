import "./detailStatisticHandler.css";

const DetailStatisticHandler = ({ img, title, paragraph, altIcon }) => {
  return (
    <div className="DetailStatisticHandler">
      <img className="DetailStatisticHandler_img" src={img} alt={altIcon} />
      <h1 className="DetailStatisticHandler_h1">{title}</h1>
      <p className="DetailStatisticHandler_paragraph">{paragraph}</p>
    </div>
  );
};

export default DetailStatisticHandler;
