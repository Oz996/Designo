import Canada from "../../assets/shared/desktop/illustration-canada.svg";
import Australia from "../../assets/shared/desktop/illustration-australia.svg";
import UK from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import Button from "./Button";
import classNames from "classnames";

const Countries = () => {
  interface Country {
    title: string;
    image: string;
  }

  const countries: Country[] = [
    {
      title: "canada",
      image: Canada,
    },
    {
      title: "australia",
      image: Australia,
    },
    {
      title: "united kingdom",
      image: UK,
    },
  ];

  return (
    <section className="grid gap-20 lg:grid-cols-3">
      {countries.map((country, index) => (
        <div
          key={country.title}
          className={classNames({
            "flex flex-col gap-10 justify-center items-center bg-no-repeat bg-top":
              true,
            "bg-circle-variant-three": index === 0,
            "bg-circle-variant-one": index === 1,
            "bg-circle-variant-two": index === 2,
          })}
        >
          <div>
            <img src={country.image} alt={`illustration of ${country.title}`} />
          </div>
          <h2 className="heading-sm uppercase">{country.title}</h2>
          <Button variant="secondary">see location</Button>
        </div>
      ))}
    </section>
  );
};
export default Countries;