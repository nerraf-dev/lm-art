import { useState } from 'react';
import Image from 'next/image';
import {LoadingImage} from '@/components/LoadingImage';
import Hero from '@/components/Hero';
// const play = Playfair_Display_SC({ weight: '400', subsets: ['latin'], style: 'normal'});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-24 px-12 m:px-28 ">
      {/* <Hero
        heading="LM-Art"
        message="Art is the cure for the soul."
      /> */}
      <div style={{ minWidth: '300px', minHeight: '106px' }}>
                    <Image src="/media/images/logo-16-9.png" alt="LM-Art" width={800} height={200} objectFit="cover" />
                </div>
                {/* <h2 className='text-2xl xs:text-3xl md:text-8xl font-bold p-4 font-mono font'>{heading}</h2> */}
          <p className="py-5 text-l ">Art is the cure for the soul.</p>
      <div className="pt-16 m:pt-24 pb-6"></div>
      <div className="flex gap-4 pb-4">
        <div className="flex-1">
          <Image
            src="/media/images/insta_sample_line.png"
            alt="Line art"
            width={500}
            height={500}
            />
          </div>
          <div className="flex-1">
            <Image
            src="/media/images/insta_sample_line.png"
            alt="Line art"
            width={500}
            height={500}
            />
        </div>
      </div>
      <div className="flex gap-4 pb-4">
        <div className="flex-1">
          <Image
            src="/media/images/insta_sample_line.png"
            alt="Line art"
            width={500}
            height={500}
            />
          </div>
          <div className="flex-1">
            <Image
            src="/media/images/insta_sample_line.png"
            alt="Line art"
            width={500}
            height={500}
            />
        </div>
      </div>
    </main>
  );
}