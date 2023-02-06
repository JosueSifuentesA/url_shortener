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
  const [refresh, setRefresh] = useState(false);

  const submitFunction = async (data) => {
    await fetch(`${URL_API_SHORTER}${data.link}`)
      .then((datas) => datas.json())
      .then((response) => {
        console.log(response.result.short_link);
        const newShortedList = [...shortedLinks];
        newShortedList.push(response.result.short_link);
        localStorage.setItem("shortedLink", JSON.stringify(newShortedList));
        setShortedLinks(newShortedList);
      });

    const newLinkList = [...linkList];
    newLinkList.push(data);
    localStorage.setItem("originalLink", JSON.stringify(newLinkList));
    setLinkList(newLinkList);
  };

  useEffect(() => {
    const storedLinkList = JSON.parse(localStorage.getItem("originalLink"));
    const storedShortedLinkList = JSON.parse(
      localStorage.getItem("shortedLink")
    );

    if (storedLinkList) {
      setLinkList(storedLinkList);
    }

    if (storedShortedLinkList) {
      setShortedLinks(storedShortedLinkList);
    }
  }, []);

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

      <ButtonComponent
        buttonText={"CLEAR ALL 🗑"}
        buttonColor={"red"}
        textColor={"white"}
        borderRadius={10}
        buttonFunction={() => {
          localStorage.clear();
          setLinkList([]);
          setShortedLinks([]);
        }}
      />
    </div>
  );
};

export default UrlComponent;
