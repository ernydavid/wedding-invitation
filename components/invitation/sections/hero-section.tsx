import { ScrollIndicator } from "@/components/invitation/scroll-indicator";

export function HeroSection() {
  return (
    <section
      id="intro"
      data-section="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 w-full object-cover">
          <img
            data-animate="hero-image-1"
            src="/images/image1.png"
            alt=""
            className="absolute inset-0 h-screen w-full object-cover"
          />
          <img
            data-animate="hero-image-2"
            src="/images/image2.png"
            alt=""
            className="absolute inset-0 h-screen w-full object-cover"
          />
          <img
            data-animate="hero-image-3"
            src="/images/image3.png"
            alt=""
            className="absolute inset-0 h-screen w-full object-cover"
          />
          <img
            data-animate="hero-image-4"
            src="/images/image4.png"
            alt=""
            className="absolute inset-0 h-screen w-full object-cover"
          />
          <img
            data-animate="hero-image-5"
            src="/images/image5.png"
            alt=""
            className="absolute inset-0 h-screen w-full object-cover"
          />
          <img
            data-animate="hero-image-6"
            src="/images/image6.png"
            alt=""
            className="absolute inset-0 h-screen w-full object-cover"
          />
          <div
            data-animate="hero-blur"
            className="absolute inset-0 z-1 h-screen w-full overflow-hidden bg-black"
          />
        </div>
      </div>

      <ScrollIndicator label="VAMOS!" animateName="hero-line" />

      <h2
        data-animate="hero-subtitle"
        className="absolute left-0 top-[22%] z-99 w-full text-center font-ui text-[1.2rem] font-normal uppercase tracking-wedding-title text-white max-[380px]:text-[1rem]"
      >
        NOS CASAMOS
      </h2>
      <h1
        data-animate="hero-title"
        className="absolute left-0 top-[35%] z-99 w-full text-center font-display text-[4rem] leading-14 text-black max-[380px]:text-[3.4rem]"
      >
        Tu nombre &amp; Su nombre
      </h1>
      <h3
        data-animate="hero-content-title"
        className="absolute left-0 top-[90vh] z-5 w-full text-center font-ui text-[3rem] font-light max-[380px]:text-[2.5rem]"
      >
        Acompáñanos
      </h3>
      <p
        data-animate="hero-content-message"
        className="absolute left-0 top-[106vh] z-6 mx-[8%] w-auto text-center font-ui text-[1rem] font-light opacity-0 max-[380px]:text-[.9rem]"
      >
        &quot;Mejor son dos que uno solo porque tienen un mayor beneficio por su
        duro trabajo. Y es que, si uno de ellos cae, el otro puede ayudar a su
        compañero a levantarse. Pero ¿qué le pasará al que cae si no hay nadie
        que lo ayude? Por otro lado, si dos se acuestan juntos, se darán calor.
        Pero ¿cómo se mantendrá caliente uno solo? Además, uno que anda solo
        puede ser vencido, pero dos juntos pueden hacerle frente al agresor. Y
        una cuerda triple no se rompe fácilmente&quot;.
        <br />
        (ECLE. 4: 9-11)
      </p>
    </section>
  );
}
