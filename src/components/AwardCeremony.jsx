import { LocateIcon, MapPin } from "lucide-react";
import Image from "next/image";

export default function AwardCeremony() {
  return (
    <>
      <div className="hidden md:block w-full bg-red-300 mx-auto h-auto bg-[linear-gradient(180deg,rgba(255,203,1,1)_0%,rgba(231,110,194,1)_100%)]">
        <div className="container mx-auto px-60 flex items-center aspect-[16/11] justify-center award-ceremony">
          <div className="flex flex-col items-center">
            <div className="relative flex flex-col">
              <img
                src={"/assets/award-ceremony/main.png"}
                className="mx-auto -mt-14"
                alt="Award Ceremony"
              />
              <p className="text-right w-[80%] self-end text-white font-outline mt-6 text-2xl">
                Five years strong, and we're just getting started!
                <br />
                This ultimate bash is our chance to thank the
                <br /> people who truly brought this event to life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden w-screen min-h-screen award-ceremony-mob flex flex-col justify-center">
        <div className="mx-auto min-h-[100%] w-full">
          <div className="flex flex-col items-center justify-center text-center px-6">
            <div>
              <img src="/assets/award-ceremony/mob-1.png" />
            </div>

            <div className="text-left w-[92%] self-start ml-2 text-white font-outline my-6 text-[26px] leading-tight font-regular">
              Five years strong, and we're just getting started! This ultimate
              bash is our chance to thank the people who truly brought this
              event to life.
            </div>

            <div>
              <img
                src="/assets/award-ceremony/mob-2.png"
                className="w-[75%] mt-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
