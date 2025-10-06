import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function VirtualHackathonHero() {
  return (
    <section className="bg-[#180629] pt-10 relative overflow-hidden pb-[96px]">
      <div className="container mx-auto px-2 sm:px-0 relative z-10">
        {/* Top Section: Headline, Subtitle, and Card */}
        <div className="flex flex-col sm:flex-row items-center md:items-start justify-between gap-10 sm:gap-16 pt-10 pb-0 relative">
          {/* Left: SVG Heading and subtitle */}
          <div className="flex-1 flex flex-col sm:items-start sm:ml-16">
            <img
              src="/assets/virtual-hackathon/your-idea.svg"
              alt="Your Idea A MONTH TO BUILD IT"
              className="w-full max-w-[300px] sm:max-w-[520px] h-auto"
              draggable={false}
            />
            <p className="text-white font-outfit font-normal text-[18px] sm:text-[24px] text-center sm:ml-19 mt-6 max-w-[520px]">
              Let's turn this November into something epic.
            </p>
            {/* Card centered below subtitle on mobile, hidden on desktop */}
            <div className="w-[90%] flex justify-start mt-8 sm:hidden">
              <img
                src="/assets/virtual-hackathon/virtual-hackathon.svg"
                alt="Virtual Hackathon"
                className="w-full sm:max-w-[220px] h-auto"
                draggable={false}
              />
            </div>
          </div>
          {/* Right: SVG Card with grid behind (desktop only) */}
          <div className="flex-1 hidden sm:flex justify-end items-start mt-8 sm:mt-0 relative">
            <div className="relative">
              <img
                src="/assets/virtual-hackathon/virtual-hackathon.svg"
                alt="Virtual Hackathon"
                className="w-40 h-72 sm:w-auto sm:h-[400px]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Section with Details and Button */}
      <div className="relative z-10 mt-[72px]">
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #a78bfa 1px, transparent 1px),
              linear-gradient(to bottom, #a78bfa 1px, transparent 1px)
            `,
            backgroundSize: '24px 24px',
            opacity: 0.3,
          }}
        />
        <div className="container mx-auto px-2 sm:px-0 py-[24px] relative z-10">
          {/* Responsive flex: column on mobile, row on desktop */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 px-15">
            {/* SVG Boxes */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
              {/* Box 1 SVG */}
              <img
                src="/assets/virtual-hackathon/virtual-box.svg"
                alt="Virtual"
                className="h-[72px] w-[60%] sm:w-auto"
                draggable={false}
              />
              {/* Box 2 SVG */}
              <img
                src="/assets/virtual-hackathon/november-box.svg"
                alt="November"
                className="h-[72px] w-[60%] sm:w-auto"
                draggable={false}
              />
              {/* Box 3 SVG */}
              <img
                src="/assets/virtual-hackathon/open-for-all-box.svg"
                alt="Open for all"
                className="h-[72px] w-[60%] sm:w-auto"
                draggable={false}
              />
            </div>
            {/* Join Now Button */}
            <div className="flex items-center w-full sm:w-auto justify-center sm:ml-[285px] mt-6 sm:mt-0">
              <Link href="https://hackthisfall.devfolio.co/" target="_blank">
                <Button className="bg-[#ff9933] border-2 border-black cursor-pointer text-black font-semibold text-[24px] px-[24px] h-[72px] hover:bg-[#e6852e] transition-colors rounded-none font-outfit flex items-center justify-center min-w-[148px] w-[220px] mx-auto sm:w-auto">
                  Join Hackathon
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
