import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='mx-10 p-10 border-b-2 border-[#A6AEBF]'>
      <div className="flex justify-start flex-col gap-3 p-10 uppercase">
        <h3>// Our Work:</h3>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#432E54]">
          Elevate Your Vision with Our <span className='text-green-400 italic'>Expertise</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-12">
        <div className="space-y-4">
          <Image src="/livingRoom1.avif" width={700} height={700} alt="Art 1" className="w-full transition-transform duration-300 hover:scale-105" />
          <Image src="/bathroom.avif" width={700} height={700} alt="Art 1" className="w-full transition-transform duration-300 hover:scale-105" />
          <Image src="/bath.avif" width={700} height={700} alt="Art 1" className="w-full transition-transform duration-300 hover:scale-105" />
        </div>

        <div className="space-y-4 mt-12">
          <Image src="/bath.avif" width={600} height={700} alt="Art 1" className="w-full transition-transform duration-300 hover:scale-105" />
          <Image src="/kitchen.avif" width={700} height={700} alt="Art 1" className="w-full transition-transform duration-300 hover:scale-105" />
          <Image src="/bathroom.avif" width={700} height={700} alt="Art 1" className="w-full transition-transform duration-300 hover:scale-105" />
        </div>

        <div className="space-y-4">
          <Image src="/livingRoom.avif" width={700} height={700} alt="Art 1" className="w-full transition-transform duration-300 hover:scale-105" />
          <Image src="/livingRoom.avif" width={700} height={700} alt="Art 1" className="w-full transition-transform duration-300 hover:scale-105" />
          <Image src="/livingRoom.avif" width={700} height={700} alt="Art 1" className="w-full transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
