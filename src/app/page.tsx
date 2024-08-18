"use client";
import Coms from "@/components/common/Common";
import Image from "next/image";
import Link from "next/link";

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
      <section className="flex flex-col bg-blackGray bg-opacity-90 justify-center items-center h-auto">
        <In.skills_windows />
      </section>

      <section className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-start w-full">
          <h1>Last Works</h1>
          <span>There is the last project on that I working</span>
          <div>
            <div className="flex flex-col justify-center items-center">
              <Image src={""} alt="" />
              <div>
                <Link href={""}>Github</Link>
                <Link href={""}>Site</Link>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start"></div>
          </div>
          {/* footer */}
          <div className="flex flex-row justify-center items-center w-full bg-blackGray">
            <span className="font-light">If you wanna see another project on that i working <Link className="font-bold" href={"/project"}>click here.</Link></span>
          </div>
        </div>
      </section>

    </main>
  );
}