import ButtonComponent from "../ButtonComponent/ButtonComponent";
import UrlHandlerComponent from "../UrlHandlerComponent/UrlHandlerComponent";
import { useForm } from "react-hook-form";
import "./urlComponent.css";
import { useEffect, useState } from "react";

const URL_API_SHORTER = "https://api.shrtco.de/v2/shorten?url=";

const UrlComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [linkList, setLinkList] = useState([]);
  const [shortedLinks, setShortedLinks] = useState([]);

  const submitFunction = async (data) => {
    console.log(data);

    await fetch(`${URL_API_SHORTER}${data.link}`)
      .then((datas) => datas.json())
      .then((response) => {
        console.log(response.result.short_link);
        const newShortedList = [...shortedLinks];
        newShortedList.push(response.result.short_link);
        setShortedLinks(newShortedList);
      });

    const newLinkList = [...linkList];
    newLinkList.push(data);
    localStorage.setItem("originalLink", linkList);
    setLinkList(newLinkList);
  };

  useEffect(() => {
    console.log(linkList);
    console.log(localStorage);
  }, [linkList]);

  return (
    <div className="componentContainer">
      <form
        onSubmit={handleSubmit(submitFunction)}
        className="componentContainer_inputHandler"
      >
        <input
          {...register("link", { required: true })}
          placeholder="Shorten a link here..."
        />
        {errors.link && (
          <span style={{ color: "red", fontSize: "14px", fontStyle: "italic" }}>
            Pls add a link...
          </span>
        )}
        <ButtonComponent
          buttonText={"Shorten it!"}
          buttonColor="var(--cyan)"
          textColor={"white"}
          borderRadius={0}
        ></ButtonComponent>
      </form>

      {linkList?.map((module, index) => {
        console.log(module);
        return (
          <UrlHandlerComponent
            key={`UrlHandler_${index}`}
            originalLink={module.link}
            shortedLink={shortedLinks[index]}
            buttonText={"copy"}
          />
        );
      })}
    </div>
  );
};

export default UrlComponent;
