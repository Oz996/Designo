import Title from "../components/shared/Title";
import Canada from "../assets/locations/desktop/image-map-canada.png";
import CanadaTablet from "../assets/locations/tablet/image-map-canada.png";
import Australia from "../assets/locations/desktop/image-map-australia.png";
import AustraliaTablet from "../assets/locations/tablet/image-map-australia.png";
import UK from "../assets/locations/desktop/image-map-united-kingdom.png";
import UKTablet from "../assets/locations/tablet/image-map-uk.png";

const Locations = () => {
  return (
    <>
      <Title>Locations - Designo</Title>
      <section className="mb-36 h-full grid lg:grid-cols-3 gap-0 sm:gap-10 lg:gap-0">
        <div className="bg-three-circles sm:bg-two-circle bg-no-repeat sm:bg-center bg-peach-lighter lg:col-span-2 sm:rounded-2xl flex flex-col gap-7 justify-center px-24 lg:px-32 mr-8 h-[24rem] sm:h-[20rem] lg:h-auto max-lg:w-full">
          <h2 className="heading-md text-peach max-sm:text-center">Canada</h2>
          <div className="flex flex-col sm:flex-row items-center sm:justify-between max-sm:text-center max-sm:gap-10">
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
      </section>

      <section className="mb-36 h-full grid lg:grid-cols-3 gap-0 sm:gap-10 lg:gap-0">
        <div className="bg-three-circles sm:bg-two-circle bg-no-repeat sm:bg-center bg-peach-lighter lg:col-span-2 sm:rounded-2xl flex flex-col gap-7 justify-center px-24 lg:px-32 mr-8 h-[24rem] sm:h-[20rem] lg:h-auto max-lg:w-full">
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
      </section>

      <section className="mb-36 h-full grid lg:grid-cols-3 gap-0 sm:gap-10 lg:gap-0">
        <div className="bg-three-circles sm:bg-two-circle bg-no-repeat sm:bg-center bg-peach-lighter lg:col-span-2 sm:rounded-2xl flex flex-col gap-7 justify-center px-24 lg:px-32 mr-8 h-[24rem] sm:h-[20rem] lg:h-auto max-lg:w-full">
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
      </section>
    </>
  );
};

export default Locations;
