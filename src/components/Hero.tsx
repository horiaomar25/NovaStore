
import picture2 from "../assets/picture2.png"; // Update the path to your image
import hero from "../assets/hero.png"; 
import HeroText from "../components/HeroText"; // Import the new component

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-full border-b-2 border-t-2 border-black hidden lg:block">
        <img
          src={hero}
          alt="Hero Image"
          className="w-full h-full object-cover"
          
        />
        <div className="absolute inset-0 flex items-center justify-start p-6">
          <HeroText /> 
        </div>
      </div>

      <div className="block lg:hidden">
        <img
          src={picture2}
          alt="Picture 2"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
        <HeroText /> 
      </div>
    </>
  );
}
