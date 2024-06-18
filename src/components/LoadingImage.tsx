"use client";
import { useState } from 'react';
import Image from 'next/image';

interface LoadingImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const LoadingImage = ({ src, alt, width, height }: LoadingImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <h1>{alt}</h1>}
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        onLoad={() => setIsLoading(false)}
      />
    </>
  );
}