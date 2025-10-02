import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" min-h-dvh ">
      <section className="bg-[url('/hero-img.jpg')] bg-cover bg-center mb-10">
        <div className="text-center h-dvh p-10 bg-black/60 flex flex-col justify-center
       items-center ">
      <h1 className="font-bold text-5xl text-white max-md:text-2xl">The Tech News Blog</h1>
      <p className="py-1 text-lg text-white">A blog about next gen tech</p>

     {/*  <input
        type="text"
        placeholder="Search for articles"
        className="border border-gray-300 rounded-md px-3 py-2 mt-4 max-md:text-sm text-white"
      /> */}

        </div>
      </section>

     <section>
        {/* categories section starts */}
            <h1 className='text-3xl font-bold mb-3 lg:px-20 max-lg:px-5'>Categories</h1>
      
            <div className='grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-8 gap-y-15 justify-items-center
             mb-20 lg:px-20 max-lg:px-5'>
              <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
                <Image
                src={"/core-tech.jpg"}
                alt="logo"
                width={900}
                height={900}
                className="w-full h-50"
                />
                <p className='text-center text-xl font-semibold'>Core tech news</p>
                <p className='text-center'>trending updates in the tech world.</p>
              </Link>
      
              <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
                <Image
                src={"/software-developement.jpg"}
                alt="logo"
                width={900}
                height={900}
                className="w-full h-50"
                />
                <p className='text-center text-xl font-semibold'>Software & Development</p>
                <p className='text-center'>latest app launches, updates, productivity tools.</p>
              </Link>
      
              <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
                <Image
                src={"/gadgets-img.jpg"}
                alt="logo"
                width={900}
                height={900}
                className="w-full h-50"
                />
                <p className='text-center text-xl font-semibold'>Devices & Gadgets</p>
                <p className='text-center'>latest hardware releases: Smartphones & Gadgets, PCs & Laptops,
                  Smartwatches e.t.c.
                </p>
              </Link>
      
              <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
                <Image
                src={"/ai-img.jpg"}
                alt="logo"
                width={900}
                height={900}
                className="w-full h-50"
                />
                <p className='text-center text-xl font-semibold'>Tech Trends</p>
                <p className='text-center'>AI & machine learning, blockchain, cybersecurity.</p>
              </Link>
      
              <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
                <Image
                src={"/lifestyle-img.jpg"}
                alt="logo"
                width={900}
                height={900}
                className="w-full h-50"
                />
                <p className='text-center text-xl font-semibold'>Lifestyle & Future tech</p>
                <p className='text-center'>gaming & esports, quantum computing and futuristic inventions.</p>
              </Link>
      
              <Link href={"#"} className='flex flex-col gap-2 border border-gray-200 w-full'>
                <Image
                src={"/business-img.jpg"}
                alt="logo"
                width={900}
                height={900}
                className="w-full h-50"
                />
                <p className='text-center text-xl font-semibold'>Industry & Business</p>
                <p className='text-center'>tech policy & regulation, analysis on the tech economy.</p>
              </Link>
      
      
              
      
      
            </div>
           {/* categories section ends */}
      
     </section>

     
     </main>
  );
}
