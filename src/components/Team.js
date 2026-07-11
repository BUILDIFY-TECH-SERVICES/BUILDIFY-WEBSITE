"use client";

import { useEffect, useRef } from "react";
import TeamProfileCard from "./TeamProfileCard";

export default function Team() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("exit");
          } else {
            if (entry.boundingClientRect.top < 0) {
              entry.target.classList.add("exit");
            } else {
              entry.target.classList.remove("visible");
              entry.target.classList.remove("exit");
            }
          }
        });
      },
      { threshold: [0, 0.1, 0.5, 0.9] }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="zoom-section py-20 bg-[#0f0d13]/30 relative z-10 px-6 md:px-16"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-24 space-y-4">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#e6e0e9]">
            The Minds Behind the Tech
          </h2>
          <p className="font-body text-sm sm:text-base text-[#cbc4d2] max-w-xl mx-auto leading-relaxed">
            Our elite team blends architectural precision with breakthrough innovation.
          </p>
        </div>

        {/* Staggered Profile Panels Container */}
        <div className="flex flex-col gap-12 max-w-5xl mx-auto w-full">
          
          {/* Profile 1 - Left Staggered (Bhupendra) */}
          <TeamProfileCard
            id="bhupendra"
            name="Bhupendra"
            designation="Founder & CEO"
            bio="IIT (ISM) Dhanbad Silver Medalist engineering end-to-end AI platforms — from custom reinforcement learning environments and RLHF pipelines to production-grade RAG systems that scale seamlessly from research to deployment."
            image="/images/bhupendra.png"
            imageAlt="Bhupendra - Founder & CEO"
            accent="primary"
            align="left"
            slideClass="slide-left"
          />

          {/* Profile 2 - Right Staggered (Suryadeep) */}
          <TeamProfileCard
            id="suryadeep"
            name="Suryadeep Singh"
            designation="Fullstack AI Engineer"
            bio="Building end-to-end AI-powered applications with expertise in full-stack development, machine learning integration, and scalable system architecture — transforming complex requirements into elegant, production-ready solutions."
            image="/images/suryadeep.jpeg"
            imageAlt="Suryadeep Singh - Fullstack AI Engineer"
            accent="secondary"
            align="right"
            slideClass="slide-right"
          />

        </div>
      </div>
    </section>
  );
}
