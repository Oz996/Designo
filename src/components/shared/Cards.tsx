import { useLocation } from "react-router-dom";
import { WebDesignData } from "../../data/WebDesign";

const Cards = () => {
  const location = useLocation();
  const webdesign = location.pathname === "/webdesign";

  return (
    <section className="w-full grid grid-cols-3 gap-6">
      {WebDesignData.map((card) => (
        <article key={card.title}>
          <img src={card.image} alt="" className="w-[22rem] h-[20rem]" />
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </article>
      ))}
    </section>
  );
};
export default Cards;
