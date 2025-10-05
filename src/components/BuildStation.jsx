import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const cities = [
  {
    name: 'Mumbai',
    subtitle: 'City of Legacy',
    date: '08.11.25',
    image: '/assets/build-station/cities/mumbai.png',
  },
  {
    name: 'Ahmedabad',
    subtitle: 'City of Legacy',
    date: '09.11.25',
    image: '/assets/build-station/cities/ahmedabad.png',
  },
  {
    name: 'Delhi',
    subtitle: 'City of Legacy',
    date: '15.11.25',
    image: '/assets/build-station/cities/delhi.png',
  },
  {
    name: 'Kolkata',
    subtitle: 'City of Legacy',
    date: '16.11.25',
    image: '/assets/build-station/cities/kolkata.png',
  },
  {
    name: 'Hyderabad',
    subtitle: 'City of Legacy',
    date: '22.11.25',
    image: '/assets/build-station/cities/hyderabad.png',
  },
];

export default function BuildStation() {
  return (
    <section className="w-full mx-auto bg-[linear-gradient(180deg,rgba(157,51,251,1)_0%,rgba(255,150,56,1)_100%)] overflow-hidden">
      <div className="w-full container relative mx-auto py-24 sm:px-[108px] flex flex-col items-center gap-[72px]">
        <header className="flex flex-col w-full max-w-[564.05px] items-center gap-6 relative z-10">
          <div className="relative w-full">
            <img
              src="/assets/build-station/heading.svg"
              alt="Build Station Heading"
              className="flex flex-col w-full h-full items-center justify-center gap-2.5 relative"
            />
          </div>

          <p className="relative self-stretch font-outfit font-normal text-white text-2xl text-center tracking-[0] leading-[normal]">
            Get face-to-face with local builders at Build Stations! <br />
            Join us in your city to connect, collaborate, and kick-start your
            hackathon project.
          </p>
        </header>

        <div className="flex flex-col items-center gap-[48px] relative w-full z-10">
          {/* First Row - 3 Cards */}
          <div className="flex flex-wrap items-center justify-center gap-[48px]">
            {cities.slice(0, 3).map((city, index) => (
              <Card
                key={index}
                className="flex flex-col w-[338.18px] items-start gap-8 p-6 bg-white border-[1.5px] border-solid border-black rounded-none shadow-none"
              >
                <CardContent className="flex flex-col items-start gap-6 p-0 w-full">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="relative w-full h-[200px]"
                  />

                  <div className="flex flex-col items-start gap-1 w-full">
                    <div className="flex items-center justify-between w-full">
                      <h2 className="relative w-fit mt-[-1.00px] [font-family:'Big_Shoulders_Display-Black',Helvetica] font-black text-black text-[28px] tracking-[0] leading-[normal]">
                        {city.name}
                      </h2>

                      <Badge
                        variant="outline"
                        className="inline-flex items-center justify-center gap-2.5 px-4 py-2 relative bg-transparent border-none rounded-none"
                      >
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-black text-sm text-center tracking-[0] leading-[normal]">
                          {city.date}
                        </span>

                        <div className="absolute top-0 left-0 w-3 h-3 border-t-[1.38px] [border-top-style:solid] border-l-[1.38px] [border-left-style:solid] border-[#000000bf]" />

                        <div className="absolute top-0 right-0 w-3 h-3 border-t-[1.38px] [border-top-style:solid] border-r-[1.38px] [border-right-style:solid] border-[#000000bf]" />

                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.38px] [border-bottom-style:solid] border-l-[1.38px] [border-left-style:solid] border-[#000000bf]" />

                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.38px] [border-bottom-style:solid] border-r-[1.38px] [border-right-style:solid] border-[#000000bf]" />
                      </Badge>
                    </div>

                    <p className="relative w-fit [font-family:'Outfit-Regular',Helvetica] font-normal text-gray-500 text-lg tracking-[0] leading-[normal]">
                      {city.subtitle}
                    </p>
                  </div>
                </CardContent>

                <Button className="flex w-[290px] items-center justify-center gap-2.5 px-6 py-3 h-auto bg-[#ff9933] border-[2.05px] border-solid border-black rounded-none hover:bg-[#ff9933]/90">
                  <span className="relative w-fit mt-[-2.05px] [font-family:'Big_Shoulders_Display-Black',Helvetica] font-black text-black text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Apply
                  </span>
                </Button>
              </Card>
            ))}
          </div>

          {/* Second Row - 2 Centered Cards */}
          <div className="flex flex-wrap items-center justify-center gap-[48px]">
            {cities.slice(3, 5).map((city, index) => (
              <Card
                key={index + 3}
                className="flex flex-col w-[338.18px] items-start gap-8 p-6 bg-white border-[1.5px] border-solid border-black rounded-none shadow-none"
              >
                <CardContent className="flex flex-col items-start gap-6 p-0 w-full">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="relative w-full h-[200px]"
                  />

                  <div className="flex flex-col items-start gap-1 w-full">
                    <div className="flex items-center justify-between w-full">
                      <h2 className="relative w-fit mt-[-1.00px] [font-family:'Big_Shoulders_Display-Black',Helvetica] font-black text-black text-[28px] tracking-[0] leading-[normal]">
                        {city.name}
                      </h2>

                      <Badge
                        variant="outline"
                        className="inline-flex items-center justify-center gap-2.5 px-4 py-2 relative bg-transparent border-none rounded-none"
                      >
                        <span className="relative w-fit mt-[-1.00px] [font-family:'Outfit-SemiBold',Helvetica] font-semibold text-black text-sm text-center tracking-[0] leading-[normal]">
                          {city.date}
                        </span>

                        <div className="absolute top-0 left-0 w-3 h-3 border-t-[1.38px] [border-top-style:solid] border-l-[1.38px] [border-left-style:solid] border-[#000000bf]" />

                        <div className="absolute top-0 right-0 w-3 h-3 border-t-[1.38px] [border-top-style:solid] border-r-[1.38px] [border-right-style:solid] border-[#000000bf]" />

                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-[1.38px] [border-bottom-style:solid] border-l-[1.38px] [border-left-style:solid] border-[#000000bf]" />

                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-[1.38px] [border-bottom-style:solid] border-r-[1.38px] [border-right-style:solid] border-[#000000bf]" />
                      </Badge>
                    </div>

                    <p className="relative w-fit [font-family:'Outfit-Regular',Helvetica] font-normal text-gray-500 text-lg tracking-[0] leading-[normal]">
                      {city.subtitle}
                    </p>
                  </div>
                </CardContent>

                <Button className="flex w-[290px] items-center justify-center gap-2.5 px-6 py-3 h-auto bg-[#ff9933] border-[2.05px] border-solid border-black rounded-none hover:bg-[#ff9933]/90">
                  <span className="relative w-fit mt-[-2.05px] [font-family:'Big_Shoulders_Display-Black',Helvetica] font-black text-black text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                    Apply
                  </span>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        <img
          className="absolute bottom-[-405px] left-[-385px] w-[670px] object-cover z-0"
          alt="Decorative mountain silhouette"
          src="/assets/build-station/mountain-orange.svg"
        />
        <img
          className="absolute bottom-[-405px] right-[-385px] w-[670px] object-cover z-0"
          alt="Decorative mountain silhouette"
          src="/assets/build-station/mountain-orange.svg"
        />
      </div>
    </section>
  );
}
