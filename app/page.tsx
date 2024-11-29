export default function Home() {
    return (
      <div className="flex flex-wrap items-center justify-center mt-[80px] md:mt-[80px] lg:mt-0">
        {/* First Div */}
        <div className="bg-[#FF6F61] h-[160px] lg:h-80 flex items-center justify-center p-4 text-center w-full lg:w-1/3 md:w-full">
          <blockquote className="text-black text-lg lg:text-2xl">
            "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default."
          </blockquote>
          <cite className="text-black mt-2 block text-sm lg:text-base">— J.K. Rowling</cite>
        </div>
  
        {/* Second Div */}
        <div className="bg-[#61d5ff] h-[160px] lg:h-80 flex items-center justify-center p-4 text-center w-full lg:w-1/3 md:w-1/2">
          <blockquote className="text-black text-lg lg:text-2xl">
            "Things usually work out in the end." "What if they don't?" "That just means you haven't come to the end yet."
          </blockquote>
          <cite className="text-black mt-2 block text-sm lg:text-base">— ​Jeanette Walls</cite>
        </div>
  
        {/* Third Div */}
        <div className="bg-[#daff61] h-[160px] lg:h-80 flex items-center justify-center p-4 text-center w-full lg:w-1/3 md:w-1/2">
          <blockquote className="text-black text-lg lg:text-2xl">
            "When you can't change the direction of the wind, adjust your sails."
          </blockquote>
          <cite className="text-black mt-2 block text-sm lg:text-base">— H. Jackson Brown Jr</cite>
        </div>
      </div>
    );
  }
  