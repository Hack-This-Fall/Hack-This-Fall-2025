import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react';

const cities = [
  {
    name: 'Ahmedabad',
    subtitle: 'City of Legacy',
    date: '06.10.25',
    image: 'gradient',
  },
  {
    name: 'Mumbai',
    subtitle: 'City of Legacy',
    date: '06.10.25',
    image: 'gradient',
  },
  {
    name: 'Delhi',
    subtitle: 'City of Legacy',
    date: '06.10.25',
    image: 'gradient',
  },
  {
    name: 'Kolkata',
    subtitle: 'City of Legacy',
    date: '06.10.25',
    image: 'gradient',
  },
  {
    name: 'Hyderabad',
    subtitle: 'City of Legacy',
    date: '06.10.25',
    image: 'gradient',
  },
];

export default function BuildStation() {
  return (
    <section className="flex flex-col w-full mx-auto items-center gap-[72px] px-[108px] py-24 relative bg-[linear-gradient(180deg,rgba(157,51,251,1)_0%,rgba(255,150,56,1)_100%)] overflow-hidden">
      <header className="flex flex-col w-full max-w-[564.05px] items-center gap-6 relative z-10">
        <div className="relative w-full max-w-[482px] h-[238px]">
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

      <div className="flex flex-wrap items-center justify-center gap-[48px] relative w-full z-10">
        {cities.map((city, index) => (
          <Card
            key={index}
            className="flex flex-col w-[338.18px] items-start gap-8 p-6 bg-white border-[1.5px] border-solid border-black rounded-none shadow-none"
          >
            <CardContent className="flex flex-col items-start gap-6 p-0 w-full">
              <div className="relative w-full h-[200px] bg-[linear-gradient(124deg,rgba(255,150,56,1)_0%,rgba(157,51,251,1)_100%)]" />

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

      <img
        className="absolute bottom-0 left-0 w-[378px] object-cover z-0"
        alt="Decorative mountain silhouette"
        src="/assets/build-station/mountain-left.svg"
      />
      <img
        className="absolute bottom-0 right-0 w-[378px] object-cover z-0"
        alt="Decorative mountain silhouette"
        src="/assets/build-station/mountain-right.svg"
      />
    </section>
  );
}
