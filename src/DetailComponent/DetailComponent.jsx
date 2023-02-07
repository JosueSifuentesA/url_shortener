import DetailStatisticHandler from "../DetailStatisticHandler/DetailStatisticHandler";
import iconRecognition from "../assets/icon-brand-recognition.svg";
import iconDetailedRecords from "../assets/icon-detailed-records.svg";
import iconFullyCustomizable from "../assets/icon-fully-customizable.svg";

import UrlComponent from "../UrlComponent/UrlComponent";

import "./detailComponent.css";

const DetailComponent = () => {
  return (
    <section className="detailComponent">
      <UrlComponent />

      <div className="detailComponent_header">
        <h1 className="header_h1">Advanced Statistics</h1>
        <p className="header_paragraph">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="detailComponent_statistics">
        <DetailStatisticHandler
          img={iconRecognition}
          title={"Brand Recognition"}
          paragraph={
            "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
          }
          altIcon="Icon of grafic records"
        />

        <DetailStatisticHandler
          img={iconDetailedRecords}
          title={"Detailed Records"}
          paragraph={
            "Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions."
          }
          altIcon={"Icon of a speedometer"}
        />

        <DetailStatisticHandler
          img={iconFullyCustomizable}
          title={"Fully Customizable"}
          paragraph={
            "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          }
          altIcon={"Icon of a group of art tools"}
        />
      </div>
    </section>
  );
};
export default DetailComponent;
