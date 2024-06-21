import { useState } from 'react';
import Image from 'next/image';
import {LoadingImage} from '@/components/LoadingImage';
import Hero from '@/components/Hero';

export default function Home() {
  return (
  <main className="flex flex-col items-center justify-between pt-24 px-12 m:px-28 ">
	{/* <div style={{ minWidth: '300px', minHeight: '106px' }}>
		<Image src="/media/images/logo-16-9.png" alt="LM-Art" width={800} height={200}  />
	</div>
	<Image src="/media/images/banner_1.jpg" alt="LM-Art" width={800} height={200}  />
	<p className="py-5 text-sm ">Art is the cure for the soul.</p>
	<div className="pt-16 m:pt-24 pb-6"></div> */}
	<div className="flex gap-4 pb-4 items-center">
		<div className="flex-1">
			<Image
				src="/media/artwork/art-001.jpg"
				alt="Line art"
				width={500}
				height={500}
			/>
		  </div>
		  <div className="flex-1">
			<Image
				src="/media/artwork/art-002.jpg"
				alt="Line art"
				width={500}
				height={500}
			/>
		</div>
	  </div>
	  <div className="flex gap-4 pb-4 items-center">
		<div className="flex-1">
		  <Image
			src="/media/artwork/art-003.jpg"
			alt="Line art"
			width={500}
			height={500}
			/>
		  </div>
		  <div className="flex-1">
			<Image
			src="/media/artwork/art-004.jpg"
			alt="Line art"
			width={500}
			height={500}
			/>
		</div>
	  </div>
	  <div className="flex gap-4 pb-4 items-center">
		<div className="flex-1">
		  <Image
			src="/media/artwork/art-005.jpg"
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