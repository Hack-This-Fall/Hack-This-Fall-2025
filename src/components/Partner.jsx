import React from "react";

const partnersData = [
  {
    title: 'Title',
    logos: [{ src: '/assets/partners/vultr.svg', alt: 'Vultr' }],
  },
  {
    title: 'Diamond',
    logos: [{ src: '/assets/partners/bhindi.png', alt: 'Bhindi AI' }],
  },
  {
    title: 'Platinum',
    logos: [
      { src: '/assets/partners/github.png', alt: 'GitHub' },
      { src: '/assets/partners/lingo.svg', alt: 'Lingo Dev' },
      { src: '/assets/partners/devfolio.png', alt: 'Devfolio' },
    ],
  },
  {
    title: 'Gold',
    logos: [{ src: '/assets/partners/apify.png', alt: 'Apify' }],
  },
];

function LogoRectangle({ children, large, medium }) {
  return (
    <div
      className={`relative flex items-center justify-center ${
        large
          ? "w-[250px] h-[90px] sm:w-[348px] sm:h-[124px]"
          : medium
          ? "w-[154px] h-[55px] sm:w-[245px] sm:h-[88px]"
          : "w-[154px] h-[55px] sm:w-[187px] sm:h-[67px]"
      }`}
    >
      {/* Corners */}
      <div className={`absolute ${large ? 'top-2 left-2 sm:top-3 sm:left-3' : medium ? 'top-2 left-2 sm:top-2.5 sm:left-2.5' : 'top-2 left-2'} ${large ? 'w-6 h-6 sm:w-8 sm:h-8' : medium ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-5 h-5'}`}>
        <div className="border-t border-l sm:border-t-2 sm:border-l-2 border-[#C299FC] w-full h-full"></div>
      </div>
      <div className={`absolute ${large ? 'top-2 right-2 sm:top-3 sm:right-3' : medium ? 'top-2 right-2 sm:top-2.5 sm:right-2.5' : 'top-2 right-2'} ${large ? 'w-6 h-6 sm:w-8 sm:h-8' : medium ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-5 h-5'}`}>
        <div className="border-t border-r sm:border-t-2 sm:border-r-2 border-[#C299FC] w-full h-full"></div>
      </div>
      <div className={`absolute ${large ? 'bottom-2 left-2 sm:bottom-3 sm:left-3' : medium ? 'bottom-2 left-2 sm:bottom-2.5 sm:left-2.5' : 'bottom-2 left-2'} ${large ? 'w-6 h-6 sm:w-8 sm:h-8' : medium ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-5 h-5'}`}>
        <div className="border-b border-l sm:border-b-2 sm:border-l-2 border-[#C299FC] w-full h-full"></div>
      </div>
      <div className={`absolute ${large ? 'bottom-2 right-2 sm:bottom-3 sm:right-3' : medium ? 'bottom-2 right-2 sm:bottom-2.5 sm:right-2.5' : 'bottom-2 right-2'} ${large ? 'w-6 h-6 sm:w-8 sm:h-8' : medium ? 'w-5 h-5 sm:w-6 sm:h-6' : 'w-5 h-5'}`}>
        <div className="border-b border-r sm:border-b-2 sm:border-r-2 border-[#C299FC] w-full h-full"></div>
      </div>
      {/* Content */}
      <div className="flex items-center justify-center z-10 px-2">
        {children}
      </div>
    </div>
  );
}
  
export default function Frame() {
  return (
    <section className="flex flex-col w-full max-w-[1511px] items-center gap-8 sm:gap-20 px-4 sm:px-4 md:px-[108px] py-8 sm:py-24 mx-auto">
      <header className="relative w-full max-w-[715.32px] h-[100px] sm:h-[180.47px]">
        <div className="w-full h-full flex items-center justify-center">
          <img
            src="/assets/partners/partners.svg"
            alt="Partner"
            draggable={false}
            className="w-full h-full object-contain"
          />
        </div>
      </header>

      <div className="gap-8 sm:gap-[72px] flex flex-col items-center justify-center w-full">
        {partnersData.map((tier, tierIndex) => (
          <div
            key={tierIndex}
            className="gap-4 sm:gap-8 flex flex-col items-center justify-center w-full"
          >
            <h2 className="w-full font-big-shoulders text-gray-600 text-base sm:text-2xl text-center tracking-[0] leading-[normal]">
              {tier.title}
            </h2>

            <div
              className={`
                flex flex-wrap items-center justify-center gap-3 sm:gap-8 w-full
                ${tierIndex >= 2 ? 'max-w-[320px] sm:max-w-full' : ''}
              `}
            >
              {tier.logos.map((logo, logoIndex) =>
                tierIndex === 0 ? (
                  <LogoRectangle key={logoIndex} large>
                    <img
                      className="w-auto h-10 sm:h-15 object-contain z-10"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  </LogoRectangle>
                ) : tierIndex === 1 ? (
                  <LogoRectangle key={logoIndex} medium>
                    <img
                      className="w-auto h-6 sm:h-12 object-contain z-10"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  </LogoRectangle>
                ) : (
                  <LogoRectangle key={logoIndex}>
                    <img
                      className="w-auto h-6 sm:h-10 max-w-32 object-contain z-10"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  </LogoRectangle>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}