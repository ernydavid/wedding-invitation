import { ScrollIndicator } from "@/components/invitation/scroll-indicator";

export function CelebrationSection() {
  return (
    <section id="celebration" data-section="celebration" className="relative h-screen w-full overflow-hidden">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-[2] w-full object-cover">
          <img src="/images/sec4-bg.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="celebration-image-2" src="/images/sec2-image3.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="celebration-image-1" src="/images/sec5-image1.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
        </div>
      </div>

      <h2
        data-animate="celebration-title"
        className="absolute left-0 top-[22%] z-[99] w-full text-center font-ui text-[1.1rem] font-normal uppercase tracking-[.8rem] text-black max-[380px]:text-[1rem]"
      >
        A CELEBRAR!
      </h2>
      <p
        data-animate="celebration-message"
        className="absolute left-0 top-[30%] z-[11] mx-[8%] w-auto text-center font-ui text-[1rem] font-light text-black max-[380px]:mt-[-10px] max-[380px]:text-[.9rem]"
      >
        Es un momento muy especial de nuestras vidas y estamos inmensamente felices de compartirlo con todos ustedes amigos y familiares. Sabemos que aún en la distancia están siempre presentes y les agradecemos de corazón el apoyo brindado.
      </p>
      <ScrollIndicator className="[&>svg]:mt-[80vh]" strokeClassName="text-black" animateName="celebration-line" />
    </section>
  );
}
