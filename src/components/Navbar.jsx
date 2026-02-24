'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navLinks, productsLinks } from "../constants";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
import { useState } from "react";

const Navbar = () => {
  const [toggle , setToggle] = useState(false);
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


 const onToggle = ()=>{
  toggle ? setToggle(false) : setToggle(true)
  return toggle
 }

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
            <button className="cursor-pointer hover:text-gray-200" onClick={()=>onToggle()}>Products</button>
           <ul className={toggle ? "dropdown w-1/10 absolute z-999  block shadow-2xl p-2 rounded-3xl mx-auto right-0 bg-white" : "dropdown w-1/10 absolute z-999  hidden shadow-2xl p-2 rounded-3xl mx-auto right-0 bg-white"}>
            {productsLinks.map((link) => (
              <li key={link.id} className=" hover:text-gray-700 border-b border-gray-500 p-1">
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
           </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
