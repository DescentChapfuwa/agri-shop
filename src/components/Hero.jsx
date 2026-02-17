import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";
import { productsList } from "../constants";
gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    const heroSplit = new SplitText(".headTitle", { type: "chars,words" });

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(".itemHead", {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.1,
      delay: 1,
    });

    gsap.from(".itemLists", {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.1,
      delay: 1,
    });

    gsap.from(".view-more", {
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
        <h1 className="headTitle">
          AGRICULTURAL <span className="text-gray-200 mx-3 ">SHOP</span>
        </h1>
        <div className="body">
          <div className="firstRow">
            <div >
              <h1 className="itemHead">
                Your one <br />
                stop shop for <br />
                all your <br />
                agricultural needs
              </h1>
            </div>
            <div className="flex-row md:flex-col ">
              {
                <>
                  <ul>
                    {productsList.map((product) => (
                      <li
                        key={product.id}
                        className="itemLists"
                      >
                        <img src="/images/check.png" alt="check" />
                        {product.title}
                      </li>
                    ))}
                  </ul>
                  <button className="view-more">
                    View More
                  </button>
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
