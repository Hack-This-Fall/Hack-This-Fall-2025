import Image from 'next/image';

export default function HackerHouse() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block w-full bg-red-300 mx-auto aspect-[16/10] h-auto overflow-hidden bg-gradient-to-b from-[rgba(254,149,57,1)] to-[rgba(255,204,0,1)]">
        <div className="container mx-auto h-full w-full hacker-house aspect-[16/10] relative">
          <div className="h-full">
            <div className="top-bar flex justify-between px-6 pt-20 z-10">
              <div className="box font-big-shoulders flex gap-x-2 items-center z-10">
                <Image
                  src={'/assets/hacker-house/location-pin.png'}
                  width={20}
                  height={20}
                  alt="location"
                />
                <span className="text-xl font-bold">BENGALURU</span>
              </div>
              <div className="box font-big-shoulders flex gap-x-2 items-center z-10">
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
          <img
            className="absolute top-[-385px] left-[-385px] w-[670px] object-cover z-0"
            alt="Decorative mountain silhouette"
            src="/assets/build-station/mountain-yellow.svg"
          />
          <img
            className="absolute top-[-385px] right-[-385px] w-[670px] object-cover z-0"
            alt="Decorative mountain silhouette"
            src="/assets/build-station/mountain-yellow.svg"
          />
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
