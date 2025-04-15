"use client";

export default function projects() {
  return (
     <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        {/* Aquí embebes la página de mantenimiento */}
        <div className="w-full h-[500px] border rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://maintenance-page-test.vercel.app/"
            title="Under Maintenance"
            width="100%"
            height="100%"
            frameBorder="0"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section> 
  );
}