import { useLocation } from "react-router-dom";
import { WebDesignData } from "../../data/WebDesign";
import { useEffect, useState } from "react";
import { Card } from "../../data/CardInterface";
import { AppDesignData } from "../../data/AppDesign";
import { GraphicDesignData } from "../../data/GraphicDesign";

const Cards = () => {
  const [cardData, setCardData] = useState<Card[]>([]);
  const location = useLocation();
  const webdesign = location.pathname === "/webdesign";
  const appdesign = location.pathname === "/appdesign";

  useEffect(() => {
    if (webdesign) {
      setCardData(WebDesignData);
    } else if (appdesign) {
      setCardData(AppDesignData);
    } else {
      setCardData(GraphicDesignData);
    }
  }, [webdesign, appdesign]);

  return (
    <section className="w-full grid lg:grid-cols-3 gap-6 mb-[10rem]">
      {cardData.map((card) => (
        <article
          key={card.title}
          className="rounded-2xl bg-[#FDF3F0] flex flex-col sm:flex-row items-center lg:block"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-[20.5rem] lg:w-[22rem] h-[20rem] rounded-t-2xl"
          />
          <div className="p-9 text-center space-y-5">
            <h2 className="heading-sm text-peach">{card.title}</h2>
            <p>{card.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
};
export default Cards;
