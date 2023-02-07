import "./detailStatisticHandler.css";

const DetailStatisticHandler = ({ img, title, paragraph, altIcon }) => {
  const classTitle = title.split(" ");
  const classTitleTogether = `${classTitle[0]}${classTitle[1]}`;

  return (
    <div
      className={`DetailStatisticHandler DetailStatisticHandler__${classTitleTogether}`}
    >
      <img className="DetailStatisticHandler_img" src={img} alt={altIcon} />
      <h1 className="DetailStatisticHandler_h1">{title}</h1>
      <p className="DetailStatisticHandler_paragraph">{paragraph}</p>
    </div>
  );
};

export default DetailStatisticHandler;
