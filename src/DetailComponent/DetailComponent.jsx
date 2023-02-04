import DetailStatisticHandler from "../DetailStatisticHandler/DetailStatisticHandler";
import iconRecognition from "../assets/icon-brand-recognition.svg";
import iconDetailedRecords from "../assets/icon-detailed-records.svg";
import iconFullyCustomizable from "../assets/icon-fully-customizable.svg";

import "./detailComponent.css";

const DetailComponent = () => {
  return (
    <section className="detailComponent">
      <div className="detailComponent_header">
        <h1 className="header_h1">Advanced Statistics</h1>
        <p className="header_paragraph">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>

      <DetailStatisticHandler
        img={iconRecognition}
        title={"Brand Recognition"}
        paragraph={
          "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        }
      />

      <DetailStatisticHandler
        img={iconDetailedRecords}
        title={"Detailed Records"}
        paragraph={
          "Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions."
        }
      />

      <DetailStatisticHandler
        img={iconFullyCustomizable}
        title={"Fully Customizable"}
        paragraph={
          "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        }
      />
    </section>
  );
};
export default DetailComponent;
