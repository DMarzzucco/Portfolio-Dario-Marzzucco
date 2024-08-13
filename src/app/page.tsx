"use client";
import Coms from "@/components/common/Common";

export default function Home() {
  const In = new Coms()
  return (
    <main>
      <section className=" flex flex-col justify-center items-center h-screen w-full">
        <In.HomeCart />
      </section>
      <section className="flex flex-col bg-blackGray bg-opacity-40 justify-center items-center h-screen">
        <In.habs_windows />
      </section>
      <section className="flex flex-col bg-blackGray justify-center items-center h-auto">
        <In.skills_windows />
      </section>
    </main>
  );
}