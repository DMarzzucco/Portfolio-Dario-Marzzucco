"use client";
import Coms from "@/components/common/Common";

export default function Home() {
  const In = new Coms()
  return (
    <main>
      <section className=" flex flex-col justify-center items-center h-screen w-full">
        <In.HomeCart />
      </section>
      <section className="flex flex-col justify-center items-center h-screen">
        <In.habs_windows />
        <In.skills_windows />
      </section>
    </main>
  );
}