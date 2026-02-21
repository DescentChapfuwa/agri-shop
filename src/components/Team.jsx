import React from "react";
import { teamLists } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  useGSAP(() => {
 
    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#team",
        start: "top center",
      },
    });

    scrollTimeline
    
      .from(
        ".teamCol",
        {
          opacity: 0,
          duration: 2,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5",
      );
  });

  return (
    <section className="mx-auto p-5 ">
      <div id="team" className="container mx-auto radial-gradient-about">
        <div className="flex flex-col md:flex-row gap-5 p-10 mt-5">
          {teamLists.map((employee) => (
            <div
              key={employee.id}
              className="teamCol flex flex-col bg-transparent blur-[0.5px] text-black border border-gray-200 rounded-3xl shadow-2xl  justify-center  w-full p-5 my-5"
            >
              <img
                src="/images/hero.png"
                alt=""
                className="rounded-full border border-gray-200 w-40 h-40 mx-auto"
              />
              <h1 className="text-2xl font-semibold text-yellow-300 my-1 text-center">
                {employee.name}
              </h1>
              <h2 className="text-2xl text-gray-900 font-modern-negra text-center mt-1 ">
                {employee.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
