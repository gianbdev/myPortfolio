"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Projects() {
  const images = ["u1.png", "u2.png", "u3.png", "u4.png", "u5.png", "u6.png"];
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Software Clínico</h2>

        <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden shadow-lg">
          {images.map((img, idx) => (
            <div key={idx} className="keen-slider__slide flex justify-center">
              <Image
                src={`/projects/${img}`}
                alt={`Vista ${idx + 1} del software clínico`}
                width={800}
                height={500}
                className="rounded-xl object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
