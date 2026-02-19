import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks, productsLinks } from "../constants";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav>
      <div>
        <a href="/" className="flex items-center gap-2 ">
          <img
            src="/images/fav.png"
            className="h-15 w-15 rounded-full"
            alt="logo"
          />
          <p className="text-yellow-300 font-modern-negra text-2xl">Agri-<span className="text-gray-900">Shop</span></p>
        </a>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} className="hover:scale-105 hover:text-gray-200">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            {
              <select name="Products" id="products">
                {productsLinks.map((link) => (
                  <option
                    value={`#${link.id}`}
                    key={link.id}
                  >
                    {link.title}
                  </option>
                ))}
              </select>
            }
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
