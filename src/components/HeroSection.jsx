import { Button } from '@/components/ui/button';

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
          We've been building, learning, and growing together for half a
          decade!Join the month-long sprint with thousands of builders,
          culminating in an epic finale!
        </p>
        <div className="flex gap-4 justify-center sm:flex-col sm:flex-row px-4 sm:px-0 mt-10 sm:mt-12">
          <Button className="bg-[#ff9933] border-2 border-black text-black font-semibold p-6 text-md hover:bg-[#e6852e] transition-colors rounded-none font-outfit">
            Join Hackathon
          </Button>
          <Button
            variant="outline"
            className="border-2 border-black bg-white text-black font-semibold p-6 text-md hover:bg-gray-50 transition-colors rounded-none font-outfit"
          >
            Learn More
          </Button>
        </div>
        <div className="text-center justify-start text-gray-600 text-base font-semibold font-outfit underline mt-6">
          Interested in Partnering?
        </div>
      </div>
    </section>
  );
}
