import { CheckCircle2, SpaceIcon } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl my-8 tracking-wide text-center ">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3" key={index}>
            <div className="border border-neutral-700 rounded-xl p-10 m-2">
              <p className="mb-8 text-3xl">
                {option.title}
                {option.title === "Pro" && <span className="text-xl bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-4 ml-2" >(Most Popular)</span>}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2 ">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature,index)=>(
                  <li key={index} className="flex mt-8 items-center"><CheckCircle2/>
                  <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-20 ">Subscribe</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
