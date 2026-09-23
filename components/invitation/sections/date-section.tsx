import { ScrollIndicator } from "@/components/invitation/scroll-indicator";

export function DateSection() {
  return (
    <section id="date" data-section="date" className="relative h-screen w-full overflow-hidden">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-[1] w-full object-cover">
          <img src="/images/sec-2-bg.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="date-image-3" src="/images/sec2-image3.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="date-image-2" src="/images/sec2-image2.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="date-image-1" src="/images/sec2-image1.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="date-image-4" src="/images/sec2-image4.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="date-image-5" src="/images/sec2-image5.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="date-image-6" src="/images/sec2-image6.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="date-image-7" src="/images/sec2-image7.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
        </div>
      </div>

      <h2
        data-animate="date-title"
        className="absolute left-0 top-[22%] z-[99] w-full text-center font-ui text-[1.1rem] font-normal uppercase tracking-[.8rem] text-black max-[380px]:text-[1rem]"
      >
        GUARDA LA<br />FECHA
      </h2>
      <ScrollIndicator className="[&>svg]:-mt-[30vh]" strokeClassName="text-black" animateName="date-line-in" />
      <ScrollIndicator className="[&>svg]:mt-[42vh]" strokeClassName="text-black" animateName="date-line-out" />
    </section>
  );
}
