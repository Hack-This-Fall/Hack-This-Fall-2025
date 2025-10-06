import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-8 sm:pt-10">
      <div className="flex flex-col items-center container mx-auto px-1 sm:px-4 py-16 text-center">
        <img
          src="/assets/hero-section/heading.svg"
          alt="Hero Section Heading"
          className="h-auto sm:w-[85%] w-full object-cover"
          priority
        />
        <p className="w-[90%] sm:w-[60%] text-center justify-start text-lg sm:text-2xl mt-8 font-normal font-outfit">
          We've been building, learning, and growing together for half a decade.
          Join the month-long sprint with thousands of builders, leading up to
          an epic showdown!
        </p>
        <div className="flex gap-4 justify-center sm:flex-col sm:flex-row px-4 sm:px-0 mt-10 sm:mt-12">
          <Link href="https://hackthisfall.devfolio.co/" target="_blank">
            <Button className="bg-[#ff9933] border-2 border-black cursor-pointer text-black font-semibold p-6 text-md hover:bg-[#e6852e] transition-colors rounded-none font-outfit">
              Join Hackathon
            </Button>
          </Link>
          <Link href="https://luma.com/hackthisfall-events" target="_blank">
            <Button
              variant="outline"
              className="border-2 border-black bg-white cursor-pointer text-black font-semibold p-6 text-md hover:bg-gray-50 transition-colors rounded-none font-outfit"
            >
              Join Build Station
            </Button>
          </Link>
        </div>
        <a
          href="mailto:sponsorships@hackthisfall.tech"
          target="_blank"
          className="text-center justify-start text-gray-600 text-base font-semibold font-outfit underline mt-6"
        >
          Interested in Partnering?
        </a>
      </div>
    </section>
  );
}
