import { ScrollIndicator } from "@/components/invitation/scroll-indicator";

export function GiftsSection() {
  return (
    <section id="gifts" data-section="gifts" className="relative h-screen w-full overflow-hidden">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-[2] w-full object-cover">
          <img src="/images/sec4-bg.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
        </div>
      </div>

      <h2
        className="absolute left-0 top-[22%] z-[99] w-full text-center font-ui text-[1.1rem] font-normal uppercase tracking-[.8rem] text-black max-[380px]:text-[1rem]"
      >
        REGALOS?
      </h2>
      <p
        className="absolute left-0 top-[30%] z-[11] mx-[8%] w-auto text-center font-ui text-[1rem] font-light text-black max-[380px]:text-[.9rem]"
      >
        Deseamos que lo más importante sea compartir con todos ustedes. Pero si nos deseas apoyar en nuestro nuevo proyecto de vida puedes ponerte en contacto con nosotros en el siguiente enlace y escribirnos!
        <br />Te lo agradeceremos infinitamente...
      </p>
      <ScrollIndicator className="[&>svg]:mt-[84vh]" strokeClassName="text-black" direction="up" animateName="gifts-line" />
    </section>
  );
}
