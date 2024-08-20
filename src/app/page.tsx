"use client";
import Coms_home from "./components/comps_page";

export default function Home() {
  const In = new Coms_home()
  return (
    <main>
      <section className=" flex flex-col justify-center items-center h-screen w-full">
        <In.HomeCart />
      </section>
      <section className="flex flex-col bg-blackGray bg-opacity-40 justify-center items-center h-screen">
        <In.habs_windows />
      </section>
      <section className="flex flex-col bg-blackGray bg-opacity-90 justify-center items-center h-auto">
        <In.skills_windows />
      </section>
      <section className="flex flex-col justify-center items-center w-full py-8">
        <In.last_works />
      </section>
    </main>
  );
}