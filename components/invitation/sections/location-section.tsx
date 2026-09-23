import { ScrollIndicator } from "@/components/invitation/scroll-indicator";

export function LocationSection() {
  return (
    <section id="location" data-section="location" className="relative h-screen w-full overflow-hidden">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-[2] w-full object-cover">
          <img src="/images/sec3-bg.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="location-image-1" src="/images/sec3-image1.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="location-image-2" src="/images/sec3-image2.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="location-image-3" src="/images/sec3-image3.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="location-image-4" src="/images/sec3-image4.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="location-image-5" src="/images/sec3-image5.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
        </div>
      </div>

      <h2
        data-animate="location-title"
        className="absolute left-0 top-[22%] z-[99] w-full text-center font-ui text-[1.1rem] font-normal uppercase tracking-[.8rem] text-white max-[380px]:text-[1rem]"
      >
        UBICACIÓN
      </h2>
      <p
        data-animate="location-message"
        className="absolute left-0 top-[27vh] z-[9] mx-[8%] w-auto text-center font-ui text-[1rem] font-light max-[380px]:text-[.9rem]"
      >
        Salón del Reino de los Testigos de Jehová de Pirineos. Hora: 4:00 p.m.
        <br />Dirección: Vereda 4 No. 3-41 Barrio Sucre Parte Alta
      </p>
      <ScrollIndicator className="[&>svg]:-mt-[38vh]" animateName="location-line-in" />
      <ScrollIndicator className="[&>svg]:mt-[70vh]" animateName="location-line-out" />
    </section>
  );
}
