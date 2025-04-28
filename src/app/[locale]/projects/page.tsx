"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Projects() {
  const images = ["u1.PNG", "u2.PNG", "u3.PNG", "u4.PNG", "u5.PNG", "u6.PNG"];
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
  });

  // line
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
