import React from 'react';

const partnersData = [
  {
    title: 'Title',
    logos: [{ src: '/assets/partners/vultr.svg', alt: 'Vultr' }],
  },
  {
    title: 'Diamond',
    logos: [{ src: '/assets/partners/bhindi.png', alt: 'Bhindi' }],
  },
  {
    title: 'Platinum',
    logos: [
      { src: '/assets/partners/devfolio.png', alt: 'Devfolio' },
      { src: '/assets/partners/github.png', alt: 'GitHub' },
      { src: '/assets/partners/lingo.svg', alt: 'Lingo Dev' },
    ],
  },
  {
    title: 'Gold',
    logos: [{ src: '/assets/partners/apify.png', alt: 'Apify' }],
  },
];

function LogoRectangle({ children, large, name, medium }) {
  return (
    <div
      className={`relative flex items-center justify-center ${
        large
          ? 'w-[250px] h-auto sm:w-[348px]'
          : medium
          ? 'w-[100px] h-auto sm:w-[245px]'
          : 'w-[100px] h-auto sm:w-[187px]'
      }`}
    >
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
            className="gap-[1rem] md:gap-[2rem] flex flex-col items-center justify-center w-full"
          >
            <h2 className="w-full font-big-shoulders text-gray-600 font-semibold text-base sm:text-2xl text-center tracking-[0] leading-[normal] uppercase ">
              {tier.title}
            </h2>

            <div
              className={`
                flex flex-wrap items-center justify-center gap-1 sm:gap-8 w-full
                ${tierIndex >= 2 ? 'max-w-[320px] sm:max-w-full' : ''}
              `}
            >
              {tier.logos.map((logo, logoIndex) =>
                tierIndex === 0 ? (
                  <LogoRectangle key={logoIndex} large name={logo.alt}>
                    <img
                      className="w-auto h-10 sm:h-15 object-contain z-10"
                      alt={logo.alt}
                      src={logo.src}
                    />
                  </LogoRectangle>
                ) : tierIndex >= 1 ? (
                  <LogoRectangle key={logoIndex} medium name={logo.alt}>
                    <img
                      className={` object-contain z-10 ${
                        logo.alt === 'GitHub'
                          ? 'h-[1.75rem] md:h-[5rem] w-auto'
                          : 'sm:h-12 h-6 w-auto'
                      } ${
                        logo.alt === 'Bhindi' && 'h-[1.8rem] md:h-[5.2rem] w-auto'
                      }`}
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
                ),
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
