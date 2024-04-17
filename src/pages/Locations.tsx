import Title from "../components/shared/Title";
import Canada from "../assets/locations/desktop/image-map-canada.png";
import CanadaTablet from "../assets/locations/tablet/image-map-canada.png";
import Australia from "../assets/locations/desktop/image-map-australia.png";
import AustraliaTablet from "../assets/locations/tablet/image-map-australia.png";
import UK from "../assets/locations/desktop/image-map-united-kingdom.png";
import UKTablet from "../assets/locations/tablet/image-map-uk.png";
import MotionSection from "../components/shared/Motion/MotionSection";
import { useEffect, useRef } from "react";
import { useCountry } from "../hooks/useCountry";

const Locations = () => {
  const canRef = useRef<HTMLDivElement>(null);
  const ausRef = useRef<HTMLDivElement>(null);
  const ukRef = useRef<HTMLDivElement>(null);

  const { country, setCountry } = useCountry();

  useEffect(() => {
    if (country === "canada") {
      canRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    } else if (country === "australia") {
      ausRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    } else if (country === "united kingdom") {
      ukRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [country]);

  const clearCountry = () => {
    if (country !== "") {
      setTimeout(() => {
        setCountry("");
      }, 1000);
    }
  };
  clearCountry();

  return (
    <>
      <Title>Locations - Designo</Title>
      <MotionSection className="mb-12 sm:mb-10 h-full grid lg:grid-cols-3 gap-0 sm:gap-10 lg:gap-0">
        <div
          className="bg-three-circles sm:bg-two-circle bg-no-repeat sm:bg-center bg-peach-lighter lg:col-span-2 sm:rounded-2xl flex flex-col gap-7 justify-center px-5 sm:px-24 lg:px-32 sm:mr-8 h-[24rem] sm:h-[20rem] lg:h-auto max-lg:w-full"
          ref={canRef}
        >
          <h2 className="heading-md text-peach max-sm:text-center">Canada</h2>
          <div
            className="flex flex-col sm:flex-row items-center sm:justify-between max-sm:text-center max-sm:gap-10"
            ref={canRef}
          >
            <div className="body">
              <p className="font-bold">Designo Central Office</p>
              <address className="not-italic">
                3886 Wellington Street <br />
                Toronto, Ontario M9C 3J5
              </address>
            </div>
            <div className="body">
              <p className="font-bold">Contact</p>
              <p>P : +1 253-863-8967</p>
              <p>M : contact@designo.co</p>
            </div>
          </div>
        </div>
        {/* desktop and mobile image */}
        <img
          src={Canada}
          alt="Map of office located in Canada"
          className="sm:rounded-2xl h-full w-full max-lg:order-first sm:hidden lg:block"
        />
        {/* tablet image */}
        <img
          src={CanadaTablet}
          alt="Map of office located in Canada"
          className="sm:rounded-2xl h-full w-full bg-cover max-lg:order-first hidden sm:block lg:hidden"
        />
      </MotionSection>

      {/* we only set an animation delay if country is set to "" so that in case its set to a country it becomes visible faster when we scroll to it */}
      <MotionSection
        className="mb-12 sm:mb-10 h-full grid lg:grid-cols-3 gap-0 sm:gap-10 lg:gap-0"
        delay={country === "" ? 0.3 : 0}
      >
        <div
          ref={ausRef}
          className="bg-three-circles sm:bg-two-circle bg-no-repeat sm:bg-center bg-peach-lighter lg:col-span-2 sm:rounded-2xl flex flex-col gap-7 justify-center px-5 sm:px-24 lg:px-32 sm:ml-8 h-[24rem] sm:h-[20rem] lg:h-auto max-lg:w-full"
        >
          <h2 className="heading-md text-peach max-sm:text-center">
            Australia
          </h2>
          <div className="flex flex-col sm:flex-row items-center sm:justify-between max-sm:text-center max-sm:gap-10">
            <div className="body">
              <p className="font-bold">Designo AU Office</p>
              <address className="not-italic">
                19 Balonne Street <br />
                New South Wales 2443
              </address>
            </div>
            <div className="body">
              <p className="font-bold">Contact</p>
              <p>P : (02) 6720 9092</p>
              <p>M : contact@designo.au</p>
            </div>
          </div>
        </div>
        {/* desktop and mobile image */}
        <img
          src={Australia}
          alt="Map of office located in Canada"
          className="sm:rounded-2xl h-full w-full order-first sm:hidden lg:block"
        />
        {/* tablet image */}
        <img
          src={AustraliaTablet}
          alt="Map of office located in Canada"
          className="sm:rounded-2xl h-full w-full bg-cover max-lg:order-first hidden sm:block lg:hidden"
        />
      </MotionSection>

      <MotionSection
        className="mb-12 sm:mb-10 h-full grid lg:grid-cols-3 gap-0 sm:gap-10 lg:gap-0"
        delay={country === "" ? 0.6 : 0}
      >
        <div
          ref={ukRef}
          className="bg-three-circles sm:bg-two-circle bg-no-repeat sm:bg-center bg-peach-lighter lg:col-span-2 sm:rounded-2xl flex flex-col gap-7 justify-center px-5 sm:px-24 lg:px-32 sm:mr-8 h-[24rem] sm:h-[20rem] lg:h-auto max-lg:w-full"
        >
          <h2 className="heading-md text-peach max-sm:text-center">
            United Kingdom
          </h2>
          <div className="flex flex-col sm:flex-row items-center sm:justify-between max-sm:text-center max-sm:gap-10">
            <div className="body">
              <p className="font-bold">Designo UK Office</p>
              <address className="not-italic">
                13 Colorado Way <br />
                Rhyd-y-fro SA8 9GA
              </address>
            </div>
            <div className="body">
              <p className="font-bold">Contact</p>
              <p>P : 078 3115 1400</p>
              <p>M : contact@designo.uk</p>
            </div>
          </div>
        </div>
        {/* desktop and mobile image */}
        <img
          src={UK}
          alt="Map of office located in Canada"
          className="sm:rounded-2xl h-full w-full max-lg:order-first sm:hidden lg:block"
        />
        {/* tablet image */}
        <img
          src={UKTablet}
          alt="Map of office located in Canada"
          className="sm:rounded-2xl h-full w-full bg-cover max-lg:order-first hidden sm:block lg:hidden"
        />
      </MotionSection>
    </>
  );
};

export default Locations;
