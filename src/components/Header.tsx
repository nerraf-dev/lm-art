import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <header >
        <div className="flex justify-between"><Navbar /></div>
        <div className="flex flex-col items-center pt-12">
          <div >
          <Image src="/media/images/logo-16-9.png" alt="L Meriel Art" width='690' height='388' style={{ objectFit: 'cover' }} />
        </div>
        <div className="w-full ">
          <div className="header-image-container">
            {/* <Image 
                className="header-image"
                src="/media/images/banner_1.jpg" 
                alt="LM-Art" 
                width={1119} 
                height={400}
                objectFit="cover"
            /> */}
        </div>
            {/* <Image 
                className="header-image"
                src="/media/images/banner_1.jpg" 
                alt="LM-Art" 
                width={1119} 
                height={400}
                style={{ width: '100%', height: 'auto' }}
            /> */}
        </div>
          <p className="py-5 text-xs sm:text-sm xl:text-lg">Art is the cure for the soul.</p>
      </div>
        {/* <div className="pt-16 m:pt-24 pb-6"></div> */}
    </header>
  );
};

export default Header;
