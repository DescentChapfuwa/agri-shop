import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { productsList } from "../constants";
gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".head", { type: "chars,words" });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from( '.subhead', {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.1,
      delay: 1,
    });
  }, []);
  return (
    <>
      <section id="hero" className="rain">
        <h1 className="head xs:text-3xl sm:text-5xl md:text-7xl lg:text-9xl  text-center mt-40 text-yellow-400 font-bold md:mb-10 font-modern-negra">
          AGRICULTURAL <span className="text-gray-200 mx-3 ">SHOP</span>
        </h1>
        <div className="body md:mt-60 lg:mt-125">
          <div className="flex  flex-col md:flex-row justify-between mx-15 gap-8 md:gap-70">
            <div className=" flex-row md:flex-col">
              <h1 className="subhead text-2xl md:text-6xl font-black font-modern-negra text-yellow-400">
                Your one <br />
                stop shop for <br />
                all your <br />
                agricultural needs
              </h1>
            </div>
            <div className="flex-row md:flex-col">
              {
                <>
                  <ul>
                    {productsList.map((product) => (
                      <li
                        key={product.id}
                        className="subhead text-gray-200 md:text-3xl mb-2 flex items-center gap-2"
                      >
                        <img src="/images/check.png" alt="check" />
                        {product.title}
                      </li>
                    ))}
                  </ul>
                  <button className="bg-yellow-400 text-gray-600 hover:text-gray-200 rounded-full p-2 mt-1 cursor-pointer font-modern-negra hover:scale-105">View More</button>
                </>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
