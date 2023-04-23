import { ArrowLongDownIcon } from "@heroicons/react/24/solid";

import featuredOne from "../../assets/featured-1.png";
import featuredTwo from "../../assets/featured-2.png";
import featuredThree from "../../assets/featured-3.png";
import featuredFour from "../../assets/featured-4.png";

const Featured = () => {
  return (
    <div className="mt-20 w-full h-full">
      <div className="text-font-primary flex items-center h-16">
        <ArrowLongDownIcon className="h-8 w-8 " />
        <p className="text-md">Featured Work</p>
      </div>

      <div className="flex flex-col md:flex-row">
        <img
          className="pb-4 lg:pb-8 w-full md:w-6/12 md:pr-2 lg:pr-4 md:mb-32"
          src={featuredOne}
          alt="featured one"
        />
        <img
          className="pb-4 lg:pb-8 w-full md:w-6/12 md:pl-2 ld:pl-4 md:mt-32"
          src={featuredTwo}
          alt="featured two"
        />
      </div>
      <div className="flex flex-col md:flex-row md:-mt-32">
        <img
          className="pb-4 lg:pb-8 w-full md:w-6/12 md:pr-2 lg:pr-4 md:mb-32"
          src={featuredThree}
          alt="featured three"
        />
        <img
          className="pb-4 lg:pb-8 w-full md:w-6/12 md:pl-2 lg:pl-4 md:mt-32"
          src={featuredFour}
          alt="featured four"
        />
      </div>
    </div>
  );
};

export default Featured;
