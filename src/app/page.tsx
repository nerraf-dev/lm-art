import { useState } from 'react';
import Image from 'next/image';
import {LoadingImage} from '@/components/LoadingImage';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between pt-24 px-28 ">
      {/* <Hero 
        heading="LM-Art"
        message="Just a normal person transmuting emotions."
      /> */}
      <Image
        src="/media/images/menu_logo_300px.png"
        alt="LM-Art"
        width={300}
        height={48}
      />
      <p className="font-mono text-center">Just a normal person transmuting emotions.</p>
      <div className="py-6"></div>
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