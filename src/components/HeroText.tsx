
import { Link } from "react-router-dom";

export default function TextContent() {
  return (
    <div className="text-left p-16 flex justify-center item-center flex-col">
      <h1 className="text-black text-4xl font-bold mb-4 text-center">
        Discover Your Unique Style
      </h1>
      <p className="text-black mb-6">
        Explore our curated collection of fashion-forward clothing and exquisite jewelry.
      </p>

      <div className="flex justify-center items-center ">
      <Link to='/productlist'className="border border-black text-black py-2 px-4 rounded-lg hover:lg:bg-black hover:lg:text-white w-1/2 text-center"><button >
       Explore
      </button></Link>
      </div>
    </div>
  );
}
