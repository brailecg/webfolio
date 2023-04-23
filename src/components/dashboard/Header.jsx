import reactImage from "../../assets/header-image.png";

import EmailButton from "../../utilities/EmailButton";

const Header = () => {
  return (
    <div className="flex items-center flex-col-reverse lg:flex-row lg:pt-40 lg:items-start">
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start w-full lg:w-6/12">
        <h1 className="text-font-primary font-bold text-4xl md:text-6xl">
          Hi, I am Your Name A Product Designer based in City.
        </h1>
        <p className="text-font-secondary text-lg mt-5 mb-12 md:mt-6 md:mb-20 md:text-xl">
          I help businesses and companies reach their goals by designing
          user-centric digital products & interactive experiences.
        </p>
        <EmailButton />
      </div>
      <div className="flex justify-center items-center py-16 w-full lg:w-6/12 lg:py-0">
        <img
          src={reactImage}
          alt="reactImage"
          className="w-60 h-60 md:w-96 md:h-96 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
