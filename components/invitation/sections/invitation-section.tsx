import { ScrollIndicator } from "@/components/invitation/scroll-indicator";

export function InvitationSection() {
  return (
    <section id="invitation" data-section="invitation" className="relative h-screen w-full overflow-hidden">
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-[2] w-full object-cover">
          <img src="/images/sec4-bg.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="invitation-image-1" src="/images/sec4-image1.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="invitation-image-2" src="/images/sec4-image2.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="invitation-image-3" src="/images/sec4-image3.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="invitation-image-4" src="/images/sec4-image4.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img src="/images/sec4-image5.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
          <img data-animate="invitation-image-6" src="/images/sec4-image6.png" alt="" className="absolute inset-0 h-screen w-full object-cover" />
        </div>
      </div>

      <h3
        data-animate="invitation-title"
        className="absolute left-0 top-[20%] z-[11] w-full text-center font-ui text-[3rem] font-light text-black max-[380px]:text-[2.5rem]"
      >
        Estas invitado!
      </h3>
      <p
        data-animate="invitation-message"
        className="absolute left-0 top-[35%] z-[11] mx-[8%] w-auto text-center font-ui text-[1rem] font-light text-black max-[380px]:text-[.9rem]"
      >
        Queremos compartir contigo la inmensa alegría de unir nuestras vidas ante Jehová. Contamos con tu presencia!
        <br /><br />
        Después de nuestros consejos bíblicos, podrás compartir con nosotros una torta y tomarnos fotos para el recuerdo...
      </p>
      <ScrollIndicator className="[&>svg]:mt-[75vh]" animateName="invitation-line" />
    </section>
  );
}
