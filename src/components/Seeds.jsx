import React from "react";
import { seedsLists } from "../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Seeds = () => {

   useGSAP(() => {
   
      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#seeds",
          start: "top center",
        },
      });
  
      scrollTimeline
      
         .from(
        ".seedCol",
        {
          opacity: 0,
          duration: 2,
          ease: "power1.inOut",
          stagger: 0.3,
        },
        "-=0.5",
      );
    });
  

  return (
    <section id="seeds" className="container mx-auto p-5 mt-10">
       <h2 className= "text-yellow-300 text-center  sm:text-3xl md:text-5xl xl:text-8xl font-modern-negra mb-5">
          SEE<span className="text-gray-600">DS</span>
        </h2>
      <div className="flex flex-col sm:flex-row">
        {seedsLists.map((seed) => (
          <div className="seedCol  mb-4 p-2" key={seed.id}>
            <div className="card p-2">
              <img src={seed.image} className="card-img-top hover:scale-105" alt={seed.name} />
              <div className="card-body">
                <h3 className="card-title text-center font-bold font-modern-negra text-yellow-300 text-2xl my-1">
                  {seed.name} <span className="text-gray-900">Seeds</span>{" "}
                </h3>
              </div>
            </div>
            <button className="btn btn-primary w-full rounded-full cursor-pointer bg-yellow-300 text-gray-900 hover:text-white p-1 my-1">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Seeds;
