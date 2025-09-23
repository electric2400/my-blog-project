import Image from "next/image";

export default function Home() {
  return (
     <main className="bg-[url('/hero-img.jpg')] bg-cover bg-center ">
      <section className="text-center h-dvh p-10 bg-black/70 flex flex-col justify-center items-center">
      <h1 className="font-bold text-5xl text-white max-md:text-2xl">The Tech News Blog</h1>
      <p className="py-1 text-lg text-white">A blog about next gen tech</p>

      <input
        type="text"
        placeholder="Search for articles"
        className="border border-gray-300 rounded-md px-3 py-2 mt-4 max-md:text-sm text-white"
      />

     </section>

     
     </main>
  );
}
