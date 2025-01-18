import Link from "next/link";


const Footer = () => {
  return (
    <footer className="w-full flex justify-center">

<div className="py-9 text-sm mt-24 md:w-[85%] w-full">
      

      {/* TOP */}
      <div className="flex flex-col md:flex-row ml-5 md:ml-0 gap-9">

        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/5 flex flex-col gap-9">
          <Link href="/">
            <div className="text-2xl font-bold">Company Info</div>
          </Link>
          <Link href="" className="text-[16px] font-bold text-[#737373]">About Us</Link>
              <Link href="" className="text-[16px] font-bold text-[#737373]">Careers</Link>
              <Link href="" className="text-[16px] font-bold text-[#737373]">We are hiring</Link>
              <Link href="" className="text-[16px] font-bold text-[#737373]">Blog</Link>
        </div>
        {/* CENTER */}
        <div className="lg:flex justify-between w-full md:w-[50%] ">
          <div className="flex flex-col gap-9 mb-11 md:mb-0">
            <h1 className="font-bold text-2xl">
              Legal
            </h1>
            <div className="flex flex-col gap-6 text-[16px] font-bold text-[#737373]">
              <Link href="">About Us</Link> 


              <Link href="">Careers</Link>
              <Link href="">We are hiring</Link>
              <Link href="">Blog</Link>
            </div>


          </div>
          <div className="flex flex-col gap-9 mb-11 md:mb-0">
            <h1 className="font-bold text-2xl">Features</h1>
            <div className="flex flex-col gap-6 text-[16px] font-bold text-[#737373]">
              <Link href="">Buisness Marketing</Link>
              <Link href="">Users Analytics</Link>
              <Link href="">Live Chatt</Link>
              <Link href="">Unlimited support</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-9">
            <h1 className="font-bold text-2xl">Resources</h1>
            <div className="flex flex-col gap-6 text-[16px] font-bold text-[#737373]">
              <Link href="">IOS & Android</Link>
              <Link href="">Watch a Demo</Link>
              <Link href="">Customers</Link>
              <Link href="">API</Link>
            </div>
          </div>
        </div>


        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8 mb-11 md:mb-0 md:ml-14">
          <h1 className="font-medium text-lg"> Get In Touch</h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Your Email"
              className="p-4 w-3/4 rounded-md"
            />
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-blue-700">Subscribe</button>
          </div>
          <span className=" text-[#737373]">Lore imp sum dolor Amis</span>
        </div>

        </div>
        

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Mahnoor Ghaffar</div>
      </div>
    </div>

    </footer>
  );
};

export default Footer;