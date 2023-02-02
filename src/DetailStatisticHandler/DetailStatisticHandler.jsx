const DetailStatisticHandler = ({ img, title, paragraph, altIcon }) => {
  return (
    <div className="DetailStatisticHandler">
      <img src={img} alt={altIcon} />
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default DetailStatisticHandler;
