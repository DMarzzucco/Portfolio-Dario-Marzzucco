"use client";
import { Dates, share_comps } from "@/components";
import { Coms_home } from "./components";

export default function Home() {
  const It = new Dates();
  const comp = new share_comps(It)
  const In = new Coms_home(It, comp)
  return (
    <main>
      <In.header_page />

      <In.HomeCart />

      <In.skills_windows />

      <In.architecture_soft />

      <In.solid_windows />

      <In.habs_windows />

      <In.last_works />
    </main>
  );
}