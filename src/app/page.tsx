"use client";
import Coms from "@/components/common/Common";

export default function Home() {
  const In = new Coms()
  return (
    <main>
      <section className=" flex flex-col justify-center items-center h-screen w-full">
        <In.HomeCart />
      </section>
    </main>
  );
}