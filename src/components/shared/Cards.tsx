import { useLocation } from "react-router-dom";
import { WebDesignData } from "../../data/WebDesign";

const Cards = () => {
  const location = useLocation();
  const webdesign = location.pathname === "/webdesign";

  return (
    <section className="w-full grid lg:grid-cols-3 gap-6">
      {webdesign &&
        WebDesignData.map((card) => (
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
