import React from "react";
import { missionList, visionList } from "../constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const start = isMobile ? "top 20% " : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut",
      })
      .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  });

  return (
    <div id="about">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade text-yellow-300">
          ABO<span className="text-gray-600">UT</span>
        </h2>

        <div className="content">
          <ul className="space-y-2 text-center m-0">
            <h1 className="text-2xl font-modern-negra">Mission</h1>
            {missionList.map((mission) => (
              <li key={mission.id} className="flex items-center gap-2">
                <img src="/images/check.png" alt="check" />
                <p>{mission.title}</p>
              </li>
            ))}
          </ul>

          <div className="agri-img">
            <img
              src="/images/agri-transparent.png"
              alt="cocktail"
              className="masked-img w-full h-full object-contain"
            />
          </div>

          <ul className="space-y-2 m-0">
            <h1 className="text-2xl font-modern-negra">Vision</h1>
            {visionList.map((vision) => (
              <li
                key={vision.id}
                className="flex items-center justify-start  gap-2"
              >
                <img src="/images/check.png" alt="check" />
                <p className="md:w-fit w-60 ">{vision.title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="masked-container">
          <h2 className="will-fade text-white">A Worthy Investment</h2>
          <div id="masked-content">
            <h3 className="opacity-0 md:opacity-100">Work with us and farm with pride</h3>
            <p>
              It is not just agricultural inputs we offer but we also assist in
              building your farming legacy.Delivering high yields ,keeping your
              crops and your livestock healthy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
