import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <header >
        <div className="flex justify-between pb-12"><Navbar /></div>
        {/* <div className="flex flex-col items-center pt-12">
          <div >
          <Image src="/media/images/logo-16-9.png" alt="L Meriel Art" width='690' height='388' style={{ objectFit: 'cover' }} />
        </div>
        
      </div>
        <div className="pt-16 m:pt-24 pb-6"></div> */}
    </header>
  );
};

export default Header;
