import { useLocation } from "react-router-dom";
import { WebDesignData } from "../../data/WebDesign";
import { Card } from "../../data/CardInterface";
import { AppDesignData } from "../../data/AppDesign";
import { GraphicDesignData } from "../../data/GraphicDesign";
import MotionArticle from "./Motion/MotionArticle";

const Cards = () => {
  const location = useLocation();
  const webdesign = location.pathname === "/webdesign";
  const appdesign = location.pathname === "/appdesign";

  let cardData: Card[] = [];

  if (webdesign) {
    cardData = WebDesignData;
  } else if (appdesign) {
    cardData = AppDesignData;
  } else {
    cardData = GraphicDesignData;
  }

  return (
    <section className="w-full grid lg:grid-cols-3 gap-6 mb-[10rem]">
      {cardData.map((card, index) => (
        <MotionArticle
          index={index}
          key={card.title}
          className="rounded-2xl bg-peach-lighter flex flex-col sm:flex-row items-center lg:block"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-[20.5rem] lg:w-[22rem] max-sm:rounded-t-2xl sm:rounded-l-2xl lg:rounded-t-2xl"
          />
          <div className="p-9 text-center space-y-5">
            <h2 className="heading-sm text-peach">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </MotionArticle>
      ))}
    </section>
  );
};
export default Cards;
