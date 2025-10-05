import Image from "next/image";

export default function HackerHouse() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block w-screen bg-red-300 container mx-auto aspect-[1513/874] h-auto hacker-house">
        <div className="container mx-auto relative h-full w-full">
          <div className="h-full">
            <div className="top-bar flex justify-between px-6 pt-20">
              <div className="box font-big-shoulders flex gap-x-2 items-center">
                <Image
                  src={'/assets/hacker-house/location-pin.png'}
                  width={20}
                  height={20}
                  alt="location"
                />
                <span className="text-xl font-bold">BENGALURU</span>
              </div>
              <div className="box font-big-shoulders flex gap-x-2 items-center">
                <Image
                  src={'/assets/hacker-house/remote.png'}
                  width={20}
                  height={20}
                  alt="in person"
                />
                <span className="text-xl font-bold">IN PERSON</span>
              </div>
            </div>

            <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center font-big-shoulders">
                <div className="font-bold text-2xl">The Grand Finale</div>
                <div className="font-black text-[4rem] text-[#9E34F9]">
                  HACKER HOUSE
                </div>
                <div className="font-black text-[4rem] -mt-6">
                  &amp; DEMO DAY
                </div>
                <div className="font-outfit px-20 text-center max-w-3xl">
                  This is where the best projects from the month-long sprint
                  come together in person for mentorship, final polishing, and
                  to present to our panel of experts. Get ready for an
                  energy-packed two days of building, networking, and
                  celebrating innovation!
                </div>
                <div className="box font-big-shoulders flex gap-x-2 items-center !mt-12">
                  <Image
                    src={'/assets/hacker-house/calender.png'}
                    width={20}
                    height={20}
                    alt="calendar"
                  />
                  <span className="text-xl font-bold">27-28 DECEMBER</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden w-screen min-h-screen hacker-house flex flex-col justify-center">
        <div className="mx-auto min-h-[100%] w-full">
          <div className="flex flex-col items-center justify-center text-center px-2 py-10 ">
            <div className="font-big-shoulders">
              <div className="font-bold text-xl">The Grand Finale</div>
              <div className="font-black text-6xl text-[#9E34F9] leading-tight">
                HACKER HOUSE
              </div>
              <div className="font-black text-6xl">&amp; DEMO DAY</div>
            </div>

            <p className="font-outfit text-sm mt-4 text-[#414651] px-2 tracking-wider">
              This is where the best projects from the month-long sprint come
              together in person for mentorship, final polishing, and to present
              to our panel of experts. Get ready for an energy-packed two days
              of building, networking, and celebrating innovation!
            </p>

            <div className="flex justify-center gap-x-4 w-full text-sm font-bold font-big-shoulders !mt-8">
              <div className="box-mobile flex items-center gap-2">
                <Image
                  src={'/assets/hacker-house/location-pin.png'}
                  width={20}
                  height={20}
                  alt="location"
                />
                <span>BENGALURU</span>
              </div>
              <div className="box-mobile flex items-center gap-2">
                <Image
                  src={'/assets/hacker-house/remote.png'}
                  width={20}
                  height={20}
                  alt="in person"
                />
                <span>IN PERSON</span>
              </div>
            </div>
            <div className="box-mobile flex items-center gap-2 font-big-shoulders text-sm font-bold !mt-4">
              <Image
                src={'/assets/hacker-house/calender.png'}
                width={20}
                height={20}
                alt="calendar"
              />
              <span>27-28 DECEMBER</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
